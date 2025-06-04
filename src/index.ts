type CustomReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;

type CustomAwaited<T> = T extends Promise<infer P> ? P : T;

type A = CustomAwaited<CustomReturnType<typeof fetch>>;
