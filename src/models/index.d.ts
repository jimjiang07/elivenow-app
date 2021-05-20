import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Teacher {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly mobile?: string;
  readonly avatar?: string;
  readonly classs?: (ClassTeacher | null)[];
  constructor(init: ModelInit<Teacher>);
  static copyOf(source: Teacher, mutator: (draft: MutableModel<Teacher>) => MutableModel<Teacher> | void): Teacher;
}

export declare class ClassTeacher {
  readonly id: string;
  readonly class: Class;
  readonly teacher: Teacher;
  constructor(init: ModelInit<ClassTeacher>);
  static copyOf(source: ClassTeacher, mutator: (draft: MutableModel<ClassTeacher>) => MutableModel<ClassTeacher> | void): ClassTeacher;
}

export declare class Class {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly fee?: number;
  readonly startTime?: string;
  readonly endTime?: string;
  readonly Teachers?: ClassTeacher[];
  constructor(init: ModelInit<Class>);
  static copyOf(source: Class, mutator: (draft: MutableModel<Class>) => MutableModel<Class> | void): Class;
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  constructor(init: ModelInit<Todo>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}