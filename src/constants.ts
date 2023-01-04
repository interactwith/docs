export const JS_EXAMPLE_SDK_VAR_NAME = 'iw';

export const JS_EXAMPLE_IMPORT_NAME = 'InteractWith'

export const JS_EXAMPLE_IMPORT = `import { ${JS_EXAMPLE_IMPORT_NAME} } from "@interactwith/node";`

export const JS_EXAMPLE_SDK = [
  `const ${JS_EXAMPLE_SDK_VAR_NAME} = new ${JS_EXAMPLE_IMPORT_NAME}({`,
  `  api_key: "API_KEY",`,
  `});`,
].join('\n');