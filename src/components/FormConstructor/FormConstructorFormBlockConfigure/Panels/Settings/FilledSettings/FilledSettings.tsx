import { Select } from '@consta/uikit/Select'
import { useDispatch } from 'react-redux'
import { buttonActions, formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { BaseProps } from '../../../../store/formElements/types'
export const FilledSettings = () => {
  let filled: string = 'default'

  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)

  if (selectedElementProps) {
    if ('filled' in selectedElementProps) {
      filled = selectedElementProps?.filled as string
    }
  }

  const dispatch = useDispatch()

  function onFilledChange(filled: string): void {
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

  return (
    <>
      <Select
        getItemKey={(item: string | undefined) => item || ''}
        getItemLabel={(item: string | undefined) => item || ''}
        items={['default', 'filled']}
        label='Filled'
        value={filled || 'default'}
        onChange={({ value }) => {
          onFilledChange(value || 'none')
        }}
      />
    </>
  )
}
