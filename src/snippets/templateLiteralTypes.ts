type KeyValueSplitter<T extends string> = T extends `${infer K}:${infer V}`
  ? {
      key: K;
      value: V;
    }
  : never;

type Z = KeyValueSplitter<"name:Neil">;
