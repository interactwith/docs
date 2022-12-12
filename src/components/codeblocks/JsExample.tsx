import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import Children from 'react-children-utilities'
import { getSchemaAggregated } from '@site/src/transformers/helpers';
import { toGql } from '@site/src/transformers/to-gql';

export default function JsExample(props): JSX.Element {

  const children = Children.onlyText(props.children);
  
  const code = [
    `import { InteractWith } from "@interactwith/node";`,
    ``,
    `const interactWith = new InteractWith({`,
    `  apiKey: "API_KEY",`,
    `});`,
    ``,
    children
  ].join('\n');
  
  return (
    <CodeBlock language="js">
      { code }
    </CodeBlock>
  );
}