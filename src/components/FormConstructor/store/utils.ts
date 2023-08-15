import { IFormConstructor, UnionProps } from '../coreTypes'
import { useAppSelector } from './setupStore'

export function useAppFormConstructorSelector<T extends UnionProps>(): IFormConstructor & {
  selectedElementProps: T
} {
  return useAppSelector(state => ({
    ...state.formConstructor,
    selectedElementProps: state.formConstructor.selectedElementProps as T,
  }))
}
