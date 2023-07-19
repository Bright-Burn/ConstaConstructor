export type Values<T extends Record<string | number | symbol, unknown>> = T[keyof T]
export const isOfType =
  <TargetType>(boundary: readonly TargetType[]) =>
  (toTest: unknown): toTest is TargetType =>
    boundary.some(b => b === toTest)