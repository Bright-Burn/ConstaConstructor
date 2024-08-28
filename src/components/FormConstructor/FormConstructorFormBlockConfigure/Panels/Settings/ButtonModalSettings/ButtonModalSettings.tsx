import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { TextField } from '@consta/uikit/TextField'

import type {
  BrandButtonGroupProps,
  ButtonGroupElement,
  ButtonGroupProps,
  IselectedView,
} from '../../../../coreTypes'

import styles from './styles.module.css'

type ButtonModuleSettingsType = {
  selectedViewProps: ButtonGroupProps
  selectedView: ButtonGroupElement
}

export const ButtonModuleSettings: FC<ButtonModuleSettingsType> = ({
  selectedViewProps,
  selectedView,
}) => {
  const [props, setProps] = useState<BrandButtonGroupProps>()

  useEffect(() => {
    const buttonGroupProps: BrandButtonGroupProps = {
      props: { ...selectedViewProps },
      type: 'ButtonModal',
    }
    setProps(buttonGroupProps)
  }, [selectedViewProps])

  const onChangeWidth = (value: string | null) => {
    const newProps: BrandButtonGroupProps = {
      props: { ...selectedViewProps },
      type: 'ButtonModal',
    }
    newProps.props.width = value ? `${value}px` : ''
    onDispatch(selectedView, newProps)
  }

  const onChangeHeight = (value: string | null) => {
    if (props) {
      const newProps: BrandButtonGroupProps = {
        props: selectedViewProps,
        type: 'ButtonModal',
      }
      newProps.props.height = value ? `${value}px` : ''
      onDispatch(selectedView, newProps)
    }
  }

  const onDispatch = (selectedView: IselectedView, newProps: BrandButtonGroupProps) => {
    // dispatch(
    //   setSelectedView({
    //     elementType: selectedView.elementType,
    //     elementId: selectedView.elementId,
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
