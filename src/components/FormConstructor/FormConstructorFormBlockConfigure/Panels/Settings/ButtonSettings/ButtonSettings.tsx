import { useEffect, useState } from 'react'
import {
  ButtonAction,
  ButtonProps,
  IButtonModalElement,
  buttonActions,
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

  const { selectedElementProps, selectedElement, allElementsMap } = useAppSelector(
    state => state.formConstructor,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (selectedElement) {
      setProps(selectedElementProps as ButtonProps)
    }
  }, [selectedElementProps, selectedElement])

  const onChangeButtonAction = (value: ButtonAction) => {
    if (selectedElement) {
      const newProps: ButtonProps = {
        ...(selectedElementProps as ButtonProps),
      }

      newProps['action'] = value

      onUpdateSelected(selectedElement, newProps)
      addConnectedLayer(value)
    }
  }

  const addConnectedLayer = (buttonGroupType: ButtonAction) => {
    const currentButtonElement = allElementsMap.get(selectedElement?.elementId || '')

    if (currentButtonElement && currentButtonElement.id) {
      const connectedButtonGroupElement: IButtonModalElement = {
        id: uuid(),
        connectedButtonId: currentButtonElement.id,
        isOuter: false,
        type: 'ButtonModal',
        props: {
          height: '400px',
          width: '400px',
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
        formConstructorSlice.actions.addNewElement({
          parent: currentButtonElement.id,
          element: connectedButtonGroupElement,
        }),
      )

      dispatch(
        formConstructorSlice.actions.addNewElement({
          parent: connectedButtonGroupElement.id,
          element: layoutElement,
        }),
      )
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

