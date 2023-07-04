import { Select } from '@consta/uikit/Select'
import { useDispatch } from 'react-redux'
import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { BaseProps, fillType } from '../../../../store/formElements/types'

export const FilledSettings = () => {
  const fillValues: fillType[] = ['default', 'filled']
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)

  const dispatch = useDispatch()

  function onFilledChange(filled: fillType): void {
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
  const filled = selectedElementProps?.filled ?? 'default'

  return (
    <>
      <Select
        getItemKey={item => item}
        getItemLabel={item => item}
        items={fillValues}
        label='Filled'
        value={filled}
        onChange={({ value }) => {
          value && onFilledChange(value)
        }}
      />
    </>
  )
}
