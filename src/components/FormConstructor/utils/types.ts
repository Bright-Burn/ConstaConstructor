export type Values<T extends Record<string, string>> = T[keyof T]
