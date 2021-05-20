// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Teacher, ClassTeacher, Class, Todo } = initSchema(schema);

export {
  Teacher,
  ClassTeacher,
  Class,
  Todo
};