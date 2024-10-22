// Generic адаптер
export type GenericAdapter<DEP, ACT> = (id: string, deprecated: DEP) => ACT
