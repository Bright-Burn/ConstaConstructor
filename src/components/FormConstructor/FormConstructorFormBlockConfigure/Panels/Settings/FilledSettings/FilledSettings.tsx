import { Select } from '@consta/uikit/Select'
import { useDispatch } from 'react-redux'
import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { BaseProps, fillType } from '../../../../store/formElements/types'

export const FilledSettings = () => {
  const fillValues: fillType[] = ['default', 'filled']
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)

  const dispatch = useDispatch()

  function onFilledChange({ value: filled }: { value: fillType | null }): void {
    const newProps = { ...selectedElementProps, filled }

    if (selectedElement) {
      dispatch(
        formConstructorSlice.actions.setSelectedElement({
          elementType: selectedElement?.elementType,
          elementId: selectedElement?.elementId,
          newProps: newProps as BaseProps,
        }),
      )
    }
  }
  let filled: fillType = selectedElementProps?.filled ?? 'default'
  return (
    <Select
      getItemKey={(item: fillType) => item}
      getItemLabel={(item: fillType) => item}
      items={fillValues}
      label='Filled'
      value={filled}
      onChange={onFilledChange}
    />
  )
}
