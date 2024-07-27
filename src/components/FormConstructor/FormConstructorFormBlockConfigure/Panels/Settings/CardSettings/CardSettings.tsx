import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import type {
  BrandCardElementPropsStyles,
  CardElement,
  CardElementProps,
  CardElementPropsStyles,
  ISelectedElement,
} from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'
import { setInstanceProps } from '../../../../store/formElements'
import { getValueForSelect } from '../LabelForSelectComponent'

import styles from './styles.module.css'

type CardSettingsType = {
  selectedElementProps: CardElementPropsStyles
  selectedElement: CardElement
}

export const CardSettings: FC<CardSettingsType> = ({ selectedElementProps, selectedElement }) => {
  const [props, setProps] = useState<CardElementPropsStyles>()
  const status: string[] = ['alert', 'success', 'warning', 'undefined']
  const form: string[] = ['round', 'square']
  const [widthValue, setWidthValue] = useState<string>('376')
  const [heightValue, setHeightValue] = useState<string>('227')

  useLayoutEffect(() => {
    setHeightValue(selectedElementProps.styles?.height?.replaceAll('px', '') || '')
    setWidthValue(selectedElementProps.styles?.width?.replaceAll('px', '') || '')
    setProps(selectedElementProps)
  }, [selectedElementProps])

  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    setProps(selectedElementProps)
  }, [selectedElementProps])

  const onChangeCardField = (propsName: keyof CardElementProps) => (value: string | null) => {
    const newProps: BrandCardElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Card',
    }
    newProps.props.constaProps = { ...newProps.props.constaProps, [propsName]: value }
    onDispatch(selectedElement, newProps)
  }

  const onChangeCardSwitch =
    (propsName: keyof CardElementProps) => (check: React.ChangeEvent<HTMLInputElement>) => {
      const checked = check.target.checked
      const newProps: BrandCardElementPropsStyles = {
        props: { ...selectedElementProps },
        type: 'Card',
      }
      newProps.props.constaProps = { ...newProps.props.constaProps, [propsName]: checked }

      if (propsName === 'border' && !checked) {
        newProps.props.constaProps.status = undefined
      }

      onDispatch(selectedElement, newProps)
    }

  const onChangeWidth = (value: string | null) => {
    const newProps: BrandCardElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Card',
    }
    newProps.props.styles = { ...newProps.props.styles }
    if (value && value !== '0') {
      newProps.props.styles.width = `${value}px`
      onDispatch(selectedElement, newProps)
    } else {
      newProps.props.styles.width = undefined
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeHeight = (value: string | null) => {
    const newProps: BrandCardElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Card',
    }
    newProps.props.styles = { ...newProps.props.styles }
    if (value && value !== '0') {
      newProps.props.styles.height = `${value}px`
      onDispatch(selectedElement, newProps)
    } else {
      newProps.props.styles.height = undefined
      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandCardElementPropsStyles) => {
    dispatch(setInstanceProps(selectedElement.elementId, newProps))
  }

  return (
    <div className={styles.cardSettings}>
      {props ? (
        <div className={styles.cardSettings}>
          <div className={styles.rowSettings}>
            <TextField
              value={heightValue}
              type="number"
              size="xs"
              leftSide="Height"
              min="0"
              onChange={value => {
                onChangeHeight(value)
              }}
            />
            <Text size="xs">px </Text>
          </div>
          <div className={styles.rowSettings}>
            <TextField
              value={widthValue}
              type="number"
              size="xs"
              leftSide="Width"
              min="0"
              onChange={value => {
                onChangeWidth(value)
              }}
            />
            <Text size="xs">px </Text>
          </div>

          <Select
            getItemKey={key => key}
            size="xs"
            getItemLabel={label => label}
            items={form}
            value={props.constaProps.form}
            renderValue={({ item }) => getValueForSelect({ item, label: 'form' })}
            onChange={onChangeCardField('form')}
          />
          <Select
            getItemKey={key => key}
            size="xs"
            getItemLabel={label => label}
            items={status}
            value={`${props.constaProps.status}`}
            renderValue={({ item }) => getValueForSelect({ item, label: 'border' })}
            onChange={onChangeCardField('status')}
          />
          <Switch
            checked={props.constaProps.shadow ?? true}
            label="shadow"
            size="xs"
            onChange={onChangeCardSwitch('shadow')}
          />
        </div>
      ) : null}
    </div>
  )
}
