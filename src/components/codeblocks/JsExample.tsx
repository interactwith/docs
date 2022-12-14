import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { getSchemaAggregated } from '@site/src/transformers/helpers';
import { toGql } from '@site/src/transformers/to-gql';
import { toJs } from '@site/src/transformers/to-js';
import { JS_EXAMPLE_IMPORT, JS_EXAMPLE_SDK } from '@site/src/constants';

export default function JsExample(props): JSX.Element {

  const resource: string = props.resource;
  const method: string = props.method;
  
  const code = [
    JS_EXAMPLE_IMPORT,
    ``,
    JS_EXAMPLE_SDK,
    ``,
    toJs(resource, method)
  ].join('\n');
  
  return (
    <CodeBlock language="js" showLineNumbers>
      { code }
    </CodeBlock>
  );
}