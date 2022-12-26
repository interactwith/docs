import Pluralize from 'pluralize'
import { schema } from '@site/src/schema'
import {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  headerCase,
  noCase,
  paramCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
} from "change-case";
import { mockValues } from './mock-values';

const combined_schema = {
  ...schema['objects'],
  ...schema['scalars'],
  ...schema['inputs'],
  ...schema['enums'],
};

function isPrimitive(key: string) {

  if(key === 'String' || key === 'Int' || key === 'Float' || key === 'Boolean') {
    return true;
  }

  const obj = combined_schema[key];

  return obj.type === 'ScalarTypeDefinition' || obj.type === 'EnumTypeDefinition';
}

export function recursiveParse(arr: any[]) {

  return arr.map(field => {
    if(isPrimitive(field.type)) {
      return {
        name: field.name,
        type: field.type,
        test_value: mockValues(field, field.type),
        is_optional: !field.noNull,
      };
    } else {
      return {
        name: field.name,
        type: field.type,
        fields: recursiveParse(combined_schema[field.type].fields),
        is_optional: !field.noNull,
      };
    }
  });
}

export function getSchemaAggregated(type: string, action: string): any {

  let action_object;
  if(type === 'query') {
    action_object = schema['queries'].fields.find(field => field.name === action);
  } else {
    action_object = schema['mutations'].fields.find(field => field.name === action);
  }

  const return_object = {
    name: action_object.type,
    fields: recursiveParse(combined_schema[action_object.type].fields),
  };

  const arg_objects = recursiveParse(action_object.arguments);

  return {
    action: action,
    returns: return_object,
    args: arg_objects,
  };
  
}


export function getActionType(method: string): string {
  if(['select', 'get'].includes(method)) {
    return 'query';
  } else {
    return 'mutation';
  }
}


export function getActionName(resource: string, method: string): string {
  let action: string;
  if(method === 'select' || method === 'get') {
    if(method === 'select') {
      action = Pluralize.plural(snakeCase(resource));
    } else {
      action = snakeCase(resource);
    }
  } else {
    action = camelCase(resource) + pascalCase(method);
  }
  return action;
}