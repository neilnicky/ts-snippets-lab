// loop over object keys
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


// Key vs Value Optional 
const doThing = (ctx: { traceId: string | undefined }) => {};

const doAnotherThing = (ctx: { traceId: string | undefined }) => {};

export const mainFunction = (ctx: { traceId: string | undefined }) => {
  doThing({ traceId: ctx.traceId });

  doAnotherThing({ traceId: ctx.traceId });
};

mainFunction({ traceId: undefined });
