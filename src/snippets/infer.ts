// extends, generics, ternaries, infer

type Generic<T> = T extends Array<infer A>
  ? A extends string
    ? number
    : never
  : never;

const b = ["trse"];

const a: Generic<typeof b>;
