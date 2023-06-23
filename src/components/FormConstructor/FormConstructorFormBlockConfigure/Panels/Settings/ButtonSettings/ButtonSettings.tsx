import {
  ButtonElementProps,
  formConstructorSlice,
  useAppSelector,
} from '../../../../store/formElements'
import { ISelectedElement, UnionProps } from '../../../../store/formElements/types'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { FC } from 'react'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { views, sizes, width, forms } from './UserConstants'
import {
  ButtonPropForm,
  ButtonPropSize,
  ButtonPropView,
  ButtonPropWidth,
} from '@consta/uikit/Button'
import { TextField } from '@consta/uikit/TextField'

export const ButtonSettings: FC = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)

  const getButtonElementProps = (x: UnionProps): x is ButtonElementProps => 'label' in x

  const dispatch = useDispatch()

  if (selectedElementProps && getButtonElementProps(selectedElementProps)) {
    const props = selectedElementProps

    const onChangeLabel = (value: string | null) => {
      if (selectedElementProps) {
        const newProps: ButtonElementProps = {
          ...selectedElementProps,
        }
        value ? (newProps.label = value) : ''
        selectedElement && onDispatch(selectedElement, newProps)
      }
    }

    const onChangeSize = (value: ButtonPropSize | null) => {
      if (selectedElement && value) {
        const newProps: ButtonElementProps = {
          ...selectedElementProps,
        }
        newProps.size = value
        onDispatch(selectedElement, newProps)
      }
    }

    const onChangeForm = (value: ButtonPropForm | null) => {
      if (selectedElement && value) {
        const newProps: ButtonElementProps = {
          ...selectedElementProps,
        }
        newProps.form = value
        onDispatch(selectedElement, newProps)
      }
    }

    const onChangeView = (value: ButtonPropView | null) => {
      if (selectedElement && value) {
        const newProps: ButtonElementProps = {
          ...selectedElementProps,
        }
        newProps.view = value
        onDispatch(selectedElement, newProps)
      }
    }

    const onChangeWidth = (value: ButtonPropWidth | null) => {
      if (selectedElement && value) {
        const newProps: ButtonElementProps = {
          ...selectedElementProps,
        }
        newProps.width = value
        onDispatch(selectedElement, newProps)
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
                onChangeSize(value)
              }}
            />
            <Select
              getItemKey={(item: string | undefined) => item || ''}
              getItemLabel={(item: string | undefined) => item || ''}
              items={views}
              label='view'
              value={props.view}
              onChange={({ value }) => {
                onChangeView(value)
              }}
            />
            <Select
              getItemKey={(item: string | undefined) => item || ''}
              getItemLabel={(item: string | undefined) => item || ''}
              items={forms}
              label='form'
              value={props.form}
              onChange={({ value }) => {
                onChangeForm(value)
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
            <TextField
              label='label'
              type='text'
              value={props.label as string}
              onChange={({ value }) => onChangeLabel(value)}
            />
            <Select
              getItemKey={(item: string | undefined) => item || ''}
              getItemLabel={(item: string | undefined) => item || ''}
              items={width}
              label='width'
              value={props.width}
              onChange={({ value }) => {
                onChangeWidth(value)
              }}
            />
            <Switch
              checked={!!props.iconLeft}
              label='iconLeft'
              onChange={onChangeSwitch('iconLeft')}
            />
            <Switch
              checked={!!props.iconRight}
              label='iconRight'
              onChange={onChangeSwitch('iconRight')}
            />
            {(props.iconLeft || props.iconRight) && (
              <Switch
                checked={props.onlyIcon ?? false}
                label='onlyIcon'
                onChange={onChangeSwitch('onlyIcon')}
              />
            )}
          </>
        ) : null}
      </div>
    )
  }
  return null
}
