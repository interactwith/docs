import { getActionName, getActionType, getSchemaAggregated } from './helpers';
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
import { JS_EXAMPLE_SDK_VAR_NAME } from '../constants';
import { plural } from 'pluralize';

interface ToJsOpts {
  indent?: number;
  values?: Record<string, (number | string | boolean)> | undefined;
  hide_optional?: boolean | undefined;
  skip_values?: Record<string, (number | string | boolean)> | undefined;
}

export function toJs(resource: string, method: string, opts: ToJsOpts = {}): string {

  const { indent = 0 } = opts;
  
  const action = getActionName(resource, method);
  const type = getActionType(method);  
  const snaked_resource = snakeCase(resource);

  const variable_name = method === 'select' ? action : snaked_resource;

  const schema = getSchemaAggregated(type, action);

  // render array of fields to js arguments list passed to some test function call

  const indent_str = '  '.repeat(indent);

  const args = schema.args.map(n => {

    if(n.fields) {
      return `{\n${recursiveParseToJsArgs(n.fields, 1 + indent, n.name, opts)}\n${indent_str}}`
    } else {
      return `${n.test_value}`
    }
  }).join(', ');

  const js_method = ([
    'select', 
    'delete_many', 
    'update_many',
    'create_many',
  ].includes(method) ? plural(camelCase(resource)) : camelCase(resource)) + pascalCase(method.replace('_many', ''));

  const code = [
    `${indent_str}const ${variable_name} = await ${JS_EXAMPLE_SDK_VAR_NAME}.${js_method}(${args});`,
  ].join('\n');

  return code;

};


function recursiveParseToJsArgs(fields: any[], level = 0, path: string = '', opts: ToJsOpts): string {

  const indent = '  '.repeat(level);

  return fields.map(field => {

    const is_optional = (field.is_optional && !opts.hide_optional) ? ' // optional' : '';

    const new_path = (path.length ? path + '.' : '') + field.name;

    if(field.fields) {

      return `${indent}${field.name}: {${is_optional}\n${recursiveParseToJsArgs(field.fields, level + 1, new_path, opts)}\n${indent}}`;

    } else {
      
      let value = opts.values ? opts.values[new_path] : undefined;

      if(!value) {
        value = field.test_value;
      }

      return indent + field.name + ': ' + value + is_optional;
    }

  }).filter(n => n).join('\n');
}