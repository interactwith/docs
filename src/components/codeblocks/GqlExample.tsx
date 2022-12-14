import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import Children from 'react-children-utilities'
import { toGql } from '@site/src/transformers/to-gql';

export default function GqlExample(props): JSX.Element {

  const resource: string = props.resource;
  const method: string = props.method;

  const code = toGql(resource, method);
  
  return (
    <CodeBlock language="js" showLineNumbers>
      { code }
    </CodeBlock>
  );
}