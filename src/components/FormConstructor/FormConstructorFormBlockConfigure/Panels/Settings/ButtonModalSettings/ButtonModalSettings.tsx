import { useEffect, useState } from 'react'
import {
  ButtonGroupProps,
   useAppSelector,
} from '../../../../store/formElements'
import { setSelectedElement, useAppDispatch } from '../../../../store'
import styles from './styles.module.css'
import { TextField } from '@consta/uikit/TextField'
import { useDispatch } from 'react-redux'
import { ISelectedElement } from '../../../../store/formElements/types'

export const ButtonModuleSettings = () => {
  const [props, setProps] = useState<ButtonGroupProps>()
  const { selectedElement, selectedElementProps } = useAppSelector(state => state.formConstructor)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (selectedElementProps) {
      const buttonGroupProps = selectedElementProps as ButtonGroupProps
      setProps(buttonGroupProps)
    }
  }, [selectedElementProps])

  const onChangeWidth = (value: string | null) => {
    if (selectedElement && props) {
      const newProps = { ...props }
      newProps.width = value ? `${value}px` : ''
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeHeight = (value: string | null) => {
    if (selectedElement && props) {
      const newProps = { ...props }
      newProps.height = value ? `${value}px` : ''
      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: ButtonGroupProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  return (
    <div className={styles.buttonModuleSettings}>
      <TextField
        onChange={({ value }: { value: string | null }) => onChangeWidth(value)}
        value={props?.width.replaceAll('px', '')}
        type='number'
        label='Width'
        min='0'
      />
      <TextField
        onChange={({ value }: { value: string | null }) => onChangeHeight(value)}
        value={props?.height.replaceAll('px', '')}
        type='number'
        label='Height'
        min='0'
      />
    </div>
  )
}
