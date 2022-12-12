import { getActionName, getActionType, getSchemaAggregated } from './helpers';

export function toGql(resource: string, method: string) {
  
  const type = getActionType(method);

  const body = getBody(resource, method);

  const code = [
    `${type} {`,
    `${body.split('\n').map(line => `  ${line}`).join('\n')}`,
    `}`,
  ].join('\n');

  return code;

};


function recursiveParseToGqlSelectFields(fields: any[], level = 0): string {

  const indent = '  '.repeat(level);

  return fields.map(field => {
    if(field.fields) {
      return `${indent}${field.name} {\n${recursiveParseToGqlSelectFields(field.fields, level + 1)}\n${indent}}`;
    } else {
      return indent + field.name;
    }
  }).join('\n');

}


function recursiveParseToGqlArgs(fields: any[], level = 0): string {

  const indent = '  '.repeat(level);

  return fields.map(field => {
    if(field.fields) {
      return `${indent}${field.name}: {\n${recursiveParseToGqlArgs(field.fields, level + 1)}\n${indent}}`;
    } else {
      return indent + field.name + ': ' + field.test_value;
    }
  }).join('\n');

}


function getBody(
  resource: string, 
  method: string, 
): string {

  const action = getActionName(resource, method);
  const type = getActionType(method);

  const schema = getSchemaAggregated(type, action);

  let args = recursiveParseToGqlArgs(schema.args, 1);

  let fields = recursiveParseToGqlSelectFields(schema.returns.fields, 1);

  let args_str = args ? `(\n${args}\n)` : '';

  let body = [
    `${action}${args_str} {`,
    `${fields}`,
    `}`,
  ].join('\n');

  return body
}