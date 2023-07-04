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
import uuid from 'react-uuid'

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
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

