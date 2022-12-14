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

interface ToJsOpts {
  indent?: number;
  values?: Record<string, (number | string | boolean)>;
}

export function toJs(resource: string, method: string, opts: ToJsOpts = {}): string {

  const { indent = 0, values } = opts;
  
  const action = getActionName(resource, method);
  const type = getActionType(method);  
  const snaked_resource = snakeCase(resource);

  const schema = getSchemaAggregated(type, action);

  // render array of fields to js arguments list passed to some test function call

  const indent_str = '  '.repeat(indent);

  const args = schema.args.map(n => {

    if(n.fields) {
      return `{\n${recursiveParseToJsArgs(n.fields, 1 + indent, values, n.name)}\n${indent_str}}`
    } else {
      return `${n.test_value}`
    }
  }).join(', ');

  const code = [
    `${indent_str}const ${snaked_resource} = await ${JS_EXAMPLE_SDK_VAR_NAME}.${snaked_resource}.${method}(${args});`,
  ].join('\n');

  return code;

};


function recursiveParseToJsArgs(fields: any[], level = 0, values: any = {}, path: string = ''): string {

  const indent = '  '.repeat(level);

  return fields.map(field => {

    const new_path = (path.length ? path + '.' : '') + field.name;

    if(field.fields) {

      return `${indent}${field.name}: {\n${recursiveParseToJsArgs(field.fields, level + 1, values, new_path)}\n${indent}}`;

    } else {

      let value = values[new_path];

      if(values[new_path]) {
        value = values[new_path];
      } else {
        value = field.test_value;
      }

      return indent + field.name + ': ' + value;
    }

  }).join('\n');
}