import {
  ButtonElementProps,
  formConstructorSlice,
  useAppSelector,
} from '../../../../store/formElements'
import { ISelectedElement, UnionProps } from '../../../../store/formElements/types'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { FC, useState } from 'react'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { views, sizes, width, forms } from './UserConstants'
import {
  ButtonPropForm,
  ButtonPropSize,
  ButtonPropView,
  ButtonPropWidth,
} from '@consta/uikit/Button'

export const ButtonSettings: FC = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)

  const getButtonElementProps = (x: UnionProps): x is ButtonElementProps => 'label' in x

  const dispatch = useDispatch()
  if (selectedElementProps && getButtonElementProps(selectedElementProps)) {
    const props = selectedElementProps

    const onChangeField = (
      value: ButtonPropView | ButtonPropWidth | ButtonPropSize | ButtonPropForm,
      field: keyof ButtonElementProps,
    ) => {
      if (selectedElementProps) {
        const newProps: ButtonElementProps = {
          ...selectedElementProps,
          [field]: value,
        }

        selectedElement && onDispatch(selectedElement, newProps)
      }
    }
    const onChangeSwitch =
      (propsName: keyof ButtonElementProps) =>
      ({ checked }: { checked: boolean }) => {
        if (selectedElementProps) {
          const newProps: ButtonElementProps = {
            ...selectedElementProps,
            [propsName]: checked,
          }
          selectedElement && onDispatch(selectedElement, newProps)
        }
      }

    const onDispatch = (selectedElement: ISelectedElement, newProps: ButtonElementProps) => {
      dispatch(
        formConstructorSlice.actions.setSelectedElement({
          elementType: selectedElement.elementType,
          elementId: selectedElement.elementId,
          newProps: newProps,
        }),
      )
    }

    return (
      <div className={styles.buttonSettings}>
        {props ? (
          <>
            <Select
              getItemKey={(item: string | undefined) => item || ''}
              getItemLabel={(item: string | undefined) => item || ''}
              items={sizes}
              label='size'
              value={props.size}
              onChange={({ value }) => {
                onChangeField(value as ButtonPropSize, 'size')
              }}
            />
            <Select
              getItemKey={(item: string | undefined) => item || ''}
              getItemLabel={(item: string | undefined) => item || ''}
              items={views}
              label='view'
              value={props.view}
              onChange={({ value }) => {
                onChangeField(value as ButtonPropView, 'view')
              }}
            />
            <Select
              getItemKey={(item: string | undefined) => item || ''}
              getItemLabel={(item: string | undefined) => item || ''}
              items={forms}
              label='form'
              value={props.form}
              onChange={({ value }) => {
                onChangeField(value as ButtonPropForm, 'form')
              }}
            />
            <Switch
              checked={props.disabled ?? false}
              label='disabled'
              onChange={onChangeSwitch('disabled')}
            />
            <Switch
              checked={props.loading ?? false}
              label='loading'
              onChange={onChangeSwitch('loading')}
            />
            <Select
              getItemKey={(item: string | undefined) => item || ''}
              getItemLabel={(item: string | undefined) => item || ''}
              items={width}
              label='width'
              value={props.width}
              onChange={({ value }) => {
                onChangeField(value as ButtonPropWidth, 'width')
              }}
            />
          </>
        ) : null}
      </div>
    )
  }
  return null
}
