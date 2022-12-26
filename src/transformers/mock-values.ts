import { schema } from "../schema";

function getRandElement(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function mockValues(field: any, type: string) {

  const primitive_type = schema.scalars[type] || schema.enums[type];
  let result = '';

  if (type === 'String') {
    result = `"${field.name}"`;
  } else if (type === 'Int') {
    result = `${getRandElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}`;
  } else if (type === 'Float') {
    result = `${getRandElement([0.1, 2.2, 76.3, 43.4, 103.5, 80.6, 2.7])}`;
  } else if (type === 'Boolean') {
    result = `${getRandElement(['true', 'false'])}`;
  } else if (type === 'ID') {
    result = `"${field.name}"`;
  } else if (primitive_type.type === "EnumTypeDefinition") {
    result = `"${getRandElement(primitive_type.values)}"`;
  } else {

    // get example from primitive_type description (example: "example: 1234")
    let example = primitive_type.description.value.match(/\(example: (.*)\)/);

    if (example) {
      result = `${example[1]}`
    } else {
      result = `"..."`
    }
  }

  result = `${result}`

  return result;
}