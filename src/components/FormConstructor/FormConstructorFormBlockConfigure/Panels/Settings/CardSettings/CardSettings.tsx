import { FC, useLayoutEffect, useState } from 'react'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import styles from './styles.module.css'
import { CardElementProps, CardElementPropsStyles } from '../../../../coreTypes'
import { TextField } from '@consta/uikit/TextField'
import { ISelectedElement } from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'
import { BrandCardElementPropsStyles, CardElement } from '../../../../coreTypes/cardTypes'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Text } from '@consta/uikit/Text'

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
    if (selectedElementProps) {
      setHeightValue(selectedElementProps.styles?.height?.replaceAll('px', '') || '')
      setWidthValue(selectedElementProps.styles?.width?.replaceAll('px', '') || '')
      setProps(selectedElementProps)
    }
  }, [selectedElementProps])

  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    if (selectedElementProps) {
      setProps(selectedElementProps)
    }
  }, [selectedElementProps])

  const onChangeCardField =
    (propsName: keyof CardElementProps) =>
    ({ value }: { value: string | null }) => {
      const newProps: BrandCardElementPropsStyles = {
        props: { ...selectedElementProps },
        type: 'Card',
      }
      newProps.props.constaProps = { ...newProps.props.constaProps, [propsName]: value }
      onDispatch(selectedElement, newProps)
    }

  const onChangeCardSwitch =
    (propsName: keyof CardElementProps) =>
    ({ checked }: { checked: boolean }) => {
      const newProps: BrandCardElementPropsStyles = {
        props: { ...selectedElementProps },
        type: 'Card',
      }
      newProps.props.constaProps = { ...newProps.props.constaProps, [propsName]: checked }

      if (propsName === 'border' && checked === false) {
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
        newProps: newProps,
      }),
    )
  }

  return (
    <div className={styles.cardSettings}>
      {props ? (
        <>
          <div className={styles.rowSettings}>
            <TextField
              onChange={({ value }: { value: string | null }) => onChangeHeight(value)}
              value={heightValue}
              type='number'
              size='xs'
              leftSide='px'
              label='Высота'
              min='0'
            />
            <TextField
              onChange={({ value }: { value: string | null }) => onChangeWidth(value)}
              value={widthValue}
              type='number'
              size='xs'
              leftSide='px'
              label='Ширина'
              min='0'
            />
          </div>
          <div className={styles.rowSettings}>
            <div className={styles.columnSettings}>
              <Text view='secondary' size='xs'>
                Форма углов
              </Text>
              <ChoiceGroup
                value={props.constaProps.form}
                onChange={onChangeCardField('form')}
                items={form}
                size='xs'
                view='ghost'
                getItemLabel={item => item}
                name='ChoiceGroupExample'
              />
            </div>
            <div className={styles.columnSettings}>
              <Switch
                checked={props.constaProps.border}
                label='Границы'
                size='xs'
                onChange={onChangeCardSwitch('border')}
              />
              <Select
                getItemKey={key => key}
                size='xs'
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
            label='Тень'
            size='xs'
            onChange={onChangeCardSwitch('shadow')}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
