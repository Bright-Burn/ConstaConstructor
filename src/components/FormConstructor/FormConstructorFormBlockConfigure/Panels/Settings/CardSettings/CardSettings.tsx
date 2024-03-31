import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
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
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps,
      }),
    )
  }

  return (
    <div className={styles.cardSettings}>
      {props ? (
        <>
          <div className={styles.rowSettings}>
            <TextField
              value={heightValue}
              type="number"
              size="xs"
              leftSide="px"
              label="Высота"
              min="0"
              onChange={value => {
                onChangeHeight(value)
              }}
            />
            <TextField
              value={widthValue}
              type="number"
              size="xs"
              leftSide="px"
              label="Ширина"
              min="0"
              onChange={value => {
                onChangeWidth(value)
              }}
            />
          </div>
          <div className={styles.rowSettings}>
            <div className={styles.columnSettings}>
              <Text view="secondary" size="xs">
                Форма углов
              </Text>
              <ChoiceGroup
                value={props.constaProps.form}
                items={form}
                size="xs"
                view="ghost"
                getItemLabel={item => item}
                name="ChoiceGroupExample"
                onChange={onChangeCardField('form')}
              />
            </div>
            <div className={styles.columnSettings}>
              <Switch
                checked={props.constaProps.border}
                label="Границы"
                size="xs"
                onChange={onChangeCardSwitch('border')}
              />
              <Select
                getItemKey={key => key}
                size="xs"
                disabled={!props.constaProps.border}
                getItemLabel={label => label}
                items={status}
                value={`${props.constaProps.status}`}
                onChange={onChangeCardField('status')}
              />
            </div>
          </div>
          <Switch
            checked={props.constaProps.shadow ?? true}
            label="Тень"
            size="xs"
            onChange={onChangeCardSwitch('shadow')}
          />
        </>
      ) : null}
    </div>
  )
}
