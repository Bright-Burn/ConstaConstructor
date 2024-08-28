import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { TextField } from '@consta/uikit/TextField'

import type {
  BrandButtonGroupProps,
  ButtonGroupElement,
  ButtonGroupProps,
  ISelectedElement,
} from '../../../../coreTypes'

import styles from './styles.module.css'

type ButtonModuleSettingsType = {
  selectedElementProps: ButtonGroupProps
  selectedElement: ButtonGroupElement
}

export const ButtonModuleSettings: FC<ButtonModuleSettingsType> = ({
  selectedElementProps,
  selectedElement,
}) => {
  const [props, setProps] = useState<BrandButtonGroupProps>()

  useEffect(() => {
    const buttonGroupProps: BrandButtonGroupProps = {
      props: { ...selectedElementProps },
      type: 'ButtonModal',
    }
    setProps(buttonGroupProps)
  }, [selectedElementProps])

  const onChangeWidth = (value: string | null) => {
    const newProps: BrandButtonGroupProps = {
      props: { ...selectedElementProps },
      type: 'ButtonModal',
    }
    newProps.props.width = value ? `${value}px` : ''
    onDispatch(selectedElement, newProps)
  }

  const onChangeHeight = (value: string | null) => {
    if (props) {
      const newProps: BrandButtonGroupProps = {
        props: selectedElementProps,
        type: 'ButtonModal',
      }
      newProps.props.height = value ? `${value}px` : ''
      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandButtonGroupProps) => {
    // dispatch(
    //   setSelectedView({
    //     elementType: selectedElement.elementType,
    //     elementId: selectedElement.elementId,
    //     newProps,
    //   }),
    // )
  }

  return (
    <div className={styles.buttonModuleSettings}>
      <TextField
        value={props?.props.width.replaceAll('px', '')}
        type="number"
        label="Width"
        min="0"
        onChange={(value: string | null) => {
          onChangeWidth(value)
        }}
      />
      <TextField
        value={props?.props.height.replaceAll('px', '')}
        type="number"
        label="Height"
        min="0"
        onChange={(value: string | null) => {
          onChangeHeight(value)
        }}
      />
    </div>
  )
}
