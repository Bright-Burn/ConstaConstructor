import { useEffect, useState } from 'react'
import {
  ButtonAction,
  ButtonProps,
  IButtonModalElement,
  buttonActions,
  buttonActionsActive,
  defaultHeight,
  defaultWidth,
  formConstructorSlice,
  useAppSelector,
} from '../../../../store/formElements'
import styles from './styles.module.css'
import { Select } from '@consta/uikit/Select'
import { useDispatch } from 'react-redux'
import {
  FormGroupsTypes,
  ILayoutElement,
  ISelectedElement,
} from '../../../../store/formElements/types'
import { ButtonPropForm, ButtonPropSize, ButtonPropView } from '@consta/uikit/Button'
import uuid from 'react-uuid'
import { forms, sizes, views } from './UserConstants'
import { Switch } from '@consta/uikit/Switch'
import { TextField } from '@consta/uikit/TextField'

export const ButtonSettings = () => {
  const [props, setProps] = useState<ButtonProps>()

  const { selectedElementProps, selectedElement, allElementsMap, allElementsTree } = useAppSelector(
    state => state.formConstructor,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (selectedElement) {
      setProps(selectedElementProps as ButtonProps)
    }
  }, [selectedElementProps, selectedElement])

  const onChangeButtonAction = (value: ButtonAction) => {
    if (selectedElement && props) {
      const newProps: ButtonProps = {
        ...props,
      }

      newProps['action'] = value

      onUpdateSelected(selectedElement, newProps)
      if (buttonActionsActive.includes(value)) {
        addConnectedElement()
      } else {
        removeConnectedElement()
      }
    }
  }

  const addConnectedElement = () => {
    const currentButtonElement = allElementsMap.get(selectedElement?.elementId || '')

    if (currentButtonElement && currentButtonElement.id) {
      const connectedButtonGroupElement: IButtonModalElement = {
        id: uuid(),
        connectedButtonId: currentButtonElement.id,
        isOuter: false,
        type: 'ButtonModal',
        props: {
          height: defaultHeight,
          width: defaultWidth,
          className: '',
          baseProps: {},
        },
      }
      const layoutElement: ILayoutElement = {
        id: uuid(),
        type: FormGroupsTypes.Layout,
        isOuter: false,
        props: {
          constaProps: {
            flex: 1,
            direction: 'row',
          },
          className: '',
          baseProps: {},
        },
      }

      dispatch(
        formConstructorSlice.actions.addNewElement([
          {
            parent: currentButtonElement.id,
            element: connectedButtonGroupElement,
          },
        ]),
      )

      dispatch(
        formConstructorSlice.actions.addNewElement([
          {
            parent: connectedButtonGroupElement.id,
            element: layoutElement,
          },
        ]),
      )
    }
  }

  const removeConnectedElement = () => {
    if (selectedElement) {
      const connectedElementIds = allElementsTree.get(selectedElement.elementId)
      connectedElementIds?.forEach(id => {
        dispatch(
          formConstructorSlice.actions.deleteElement({
            elementId: id,
          }),
        )
      })
    }
  }

  const onUpdateSelected = (selectedElement: ISelectedElement, newProps: ButtonProps) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  const onChangeField = (
    value: ButtonPropSize | ButtonPropForm | ButtonPropView | string,
    field: keyof ButtonProps,
  ) => {
    if (selectedElement) {
      const newProps: ButtonProps = {
        ...(selectedElementProps as ButtonProps),
      }
      // @ts-ignore
      newProps[field] = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeSwitch =
    (propsName: keyof ButtonProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElementProps) {
        const newProps: ButtonProps = {
          ...(selectedElementProps as ButtonProps),
          [propsName]: checked,
        }
        selectedElement && onDispatch(selectedElement, newProps)
      }
    }

  const onDispatch = (selectedElement: ISelectedElement, newProps: ButtonProps) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  return (
    <div className={styles.buttonPropsSettings}>
      {props ? (
        <>
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={buttonActions}
            label='Action'
            value={props.action || 'none'}
            onChange={({ value }) => {
              onChangeButtonAction(value || 'none')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={sizes}
            label='size'
            value={props.size || 's'}
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
          <TextField
            label='label'
            type='text'
            value={props.label as string}
            onChange={({ value }) => onChangeField(value as string, 'form')}
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
      ) : (
        <></>
      )}
    </div>
  )
}
