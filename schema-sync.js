const Https = require('https');
const easygraphqlSchemaParser = require('easygraphql-parser');
const FS = require('fs');

const schema_url = 'https://raw.githubusercontent.com/interactwith/api/main/src/schema.gql';

const getFile = async (url) => {
  
  return await new Promise((resolve, reject) => {
    Https.get(url, (resp) => {
      let data = '';
  
      // A chunk of data has been received.
      resp.on('data', (chunk) => {
        data += chunk;
      });
  
      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        resolve(data);
      });
      
    }).on("error", (err) => {
      reject(err);
    });
  });
}


const main = async () => {
  const schema = await getFile(schema_url);
  const parsed_schema = easygraphqlSchemaParser(schema);

  const object_types = {};
  for (const key in parsed_schema) {
    if (![ 'Mutation', 'Query' ].includes(key) && parsed_schema[key].type === 'ObjectTypeDefinition') {
      object_types[key] = parsed_schema[key];
    }
  }


  const scalar_types = {};
  for (const key in parsed_schema) {
    if (parsed_schema[key].type === 'ScalarTypeDefinition') {
      scalar_types[key] = parsed_schema[key];
    }
  }


  const input_types = {};
  for (const key in parsed_schema) {
    if (parsed_schema[key].type === 'InputObjectTypeDefinition') {
      input_types[key] = parsed_schema[key];
    }
  }


  const result_object = {
    queries: parsed_schema['Query'],
    mutations: parsed_schema['Mutation'],
    scalars: scalar_types,
    objects: object_types,
    inputs: input_types,
    interfaces: {},
  };

  FS.writeFileSync('src/schema.ts', `export const schema = ${JSON.stringify(result_object, null, 2)};`);
}

main();