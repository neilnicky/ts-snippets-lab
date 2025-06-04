type O = {
  name: string;
  age: number;
};

type New<T extends Record<string, any>> = {
  [P in keyof T as `get${Capitalize<P & string>}`]: () => T[P];
};

const d: New<O> = {
  getAge: () => 2323,
  getName: () => "sfdsa",
};
