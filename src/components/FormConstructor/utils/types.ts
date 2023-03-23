export type Values<T extends Record<string | number | symbol, unknown>> = T[keyof T]
