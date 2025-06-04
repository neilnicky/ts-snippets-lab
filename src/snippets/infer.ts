// extends, generics, ternaries, infer

type Generic<T> = T extends Array<infer A>
  ? A extends string
    ? number
    : never
  : never;

const b = ["trse"];

const a: Generic<typeof b> = 23;

/////////////////////////////

type CustomReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;

type CustomAwaited<T> = T extends Promise<infer P> ? P : T;

type A = CustomAwaited<CustomReturnType<typeof fetch>>;
