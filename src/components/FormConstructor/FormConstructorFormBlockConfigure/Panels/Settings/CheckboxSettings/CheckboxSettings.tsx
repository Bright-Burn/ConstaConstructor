import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import styles from './styles.module.css'
import { CheckboxProps } from '../../../../store/formElements/checkboxTypes'
import { CheckboxPropSize, CheckboxPropView, CheckboxPropAlign } from '@consta/uikit/Checkbox'
import { useDispatch } from 'react-redux'
import { useLayoutEffect, useState } from 'react'
import { Select } from '@consta/uikit/Select'
import { Checkbox } from '@consta/uikit/Checkbox'
import { TextField } from '@consta/uikit/TextField'

export const CheckboxSettings = () => {
  const [props, setProps] = useState<CheckboxProps | undefined>()

  const sizes: CheckboxPropSize[] = ['l', 'm', 's', 'xs']
  const views: CheckboxPropView[] = ['primary', 'ghost']
  const statuses: CheckboxPropAlign[] = ['center', 'top']

  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    if (selectedElement) {
      setProps(selectedElementProps as CheckboxProps)
    }
  }, [selectedElementProps, selectedElement])

  const onChangeField = (
    value: CheckboxPropSize | CheckboxPropView | CheckboxPropAlign,
    field: keyof CheckboxProps,
  ) => {
    if (selectedElement) {
      const newProps: CheckboxProps = {
        ...(selectedElementProps as CheckboxProps),
      }

      // @ts-ignore
      newProps[field] = value

      onDispatch(selectedElement, newProps)
    }
  }

  const handleOnChangeLabel = ({ value }: { value: string | null }) => {
    if (selectedElement) {
      const newProps: CheckboxProps = {
        ...(selectedElementProps as CheckboxProps),
      }
      newProps.label = value || undefined

      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: CheckboxProps) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  return (
    <div className={styles.badgeSettings}>
      {props ? (
        <>
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={sizes}
            label='Size'
            value={props.size || 's'}
            onChange={({ value }) => {
              onChangeField(value as CheckboxPropSize, 'size')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={views}
            label='View'
            value={props.view || 'primary'}
            onChange={({ value }) => {
              onChangeField(value as CheckboxPropView, 'view')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={statuses}
            label='Align'
            value={props.align || 'center'}
            onChange={({ value }) => {
              onChangeField(value as CheckboxPropAlign, 'align')
            }}
          />
          <TextField value={props.label} onChange={handleOnChangeLabel} />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
