import { FC, useEffect, useState } from 'react'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'
import styles from './styles.module.css'
import { TextField } from '@consta/uikit/TextField'
import { ISelectedElement, ButtonGroupProps } from '../../../../coreTypes'
import { BrandButtonGroupProps, ButtonGroupElement } from '../../../../coreTypes/buttonTypes'

type ButtonModuleSettingsType = {
  selectedElementProps: ButtonGroupProps, 
  selectedElement: ButtonGroupElement,
}

export const ButtonModuleSettings: FC<ButtonModuleSettingsType> = ({selectedElementProps, selectedElement}) => {
  const [props, setProps] = useState<BrandButtonGroupProps>()

  const dispatch = useAppDispatch()

  useEffect(() => {
    const buttonGroupProps: BrandButtonGroupProps = {
      props: selectedElementProps,
      type: 'ButtonModal'
    }
    setProps(buttonGroupProps)
  }, [selectedElementProps])

  const onChangeWidth = (value: string | null) => {
    const newProps: BrandButtonGroupProps = {
      props: selectedElementProps,
      type: 'ButtonModal'
    }
    newProps.props.width = value ? `${value}px` : ''
    onDispatch(selectedElement, newProps)
  }

  const onChangeHeight = (value: string | null) => {
    if (props) {
      const newProps: BrandButtonGroupProps = {
        props: selectedElementProps,
        type: 'ButtonModal'
      }
      newProps.props.height = value ? `${value}px` : ''
      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandButtonGroupProps) => {
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
        value={props?.props.width.replaceAll('px', '')}
        type='number'
        label='Width'
        min='0'
      />
      <TextField
        onChange={({ value }: { value: string | null }) => onChangeHeight(value)}
        value={props?.props.height.replaceAll('px', '')}
        type='number'
        label='Height'
        min='0'
      />
    </div>
  )
}
