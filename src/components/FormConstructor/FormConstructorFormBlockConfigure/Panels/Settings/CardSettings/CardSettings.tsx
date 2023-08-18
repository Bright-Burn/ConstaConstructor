import { FC, useLayoutEffect, useState } from 'react'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import styles from './styles.module.css'
import { CardElementProps, CardElementPropsStyles } from '../../../../coreTypes'
import { TextField } from '@consta/uikit/TextField'
import { ISelectedElement } from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'
import { BrandCardElementPropsStyles, CardElement } from '../../../../coreTypes/cardTypes'

type CardSettingsType = {
  selectedElementProps: CardElementPropsStyles, 
  selectedElement: CardElement,
}

export const CardSettings: FC<CardSettingsType> = ({selectedElementProps, selectedElement}) => {
  const [props, setProps] = useState<CardElementPropsStyles>()
  const status: string[] = ['alert', 'success', 'warning', 'undefined']
  const form: string[] = ['round', 'square']
  const space: string[] = ['m', 'xs', 's', 'l', 'xl', '2xl', '3xl', '4xl', '5xl']
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
        props: selectedElementProps,
        type: 'Card',
      }
      newProps.props.constaProps = { ...newProps.props.constaProps }
      // @ts-ignore
      newProps.props.constaProps[propsName] = value
      onDispatch(selectedElement, newProps)
    }

  const onChangeCardSwitch =
    (propsName: keyof CardElementProps) =>
    ({ checked }: { checked: boolean }) => {
      const newProps: BrandCardElementPropsStyles = {
        props: selectedElementProps,
        type: 'Card',
      }
      newProps.props.constaProps = { ...newProps.props.constaProps }
      // @ts-ignore
      newProps.props.constaProps[propsName] = checked
      onDispatch(selectedElement, newProps)
    }

  const onChangeWidth = (value: string | null) => {
    const newProps: BrandCardElementPropsStyles = {
      props: selectedElementProps,
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
      props: selectedElementProps,
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
          <Select
            getItemKey={key => key}
            label='VerticalSpace'
            getItemLabel={label => label}
            items={space}
            value={`${props.constaProps.verticalSpace}`}
            onChange={onChangeCardField('verticalSpace')}
          />
          <Select
            getItemKey={key => key}
            label='HorizontalSpace'
            getItemLabel={label => label}
            items={space}
            value={`${props.constaProps.horizontalSpace}`}
            onChange={onChangeCardField('horizontalSpace')}
          />
          <Select
            getItemKey={key => key}
            label='Status'
            getItemLabel={label => label}
            items={status}
            value={`${props.constaProps.status}`}
            onChange={onChangeCardField('status')}
          />
          <Select
            getItemKey={key => key}
            label='Form'
            getItemLabel={label => label}
            items={form}
            value={`${props.constaProps.form}`}
            onChange={onChangeCardField('form')}
          />
          <Switch
            checked={props.constaProps.shadow ?? true}
            label='shadow'
            onChange={onChangeCardSwitch('shadow')}
          />
          <Switch
            checked={props.constaProps.border ?? false}
            label='border'
            onChange={onChangeCardSwitch('border')}
          />
          <TextField
            onChange={({ value }: { value: string | null }) => onChangeWidth(value)}
            value={widthValue}
            type='number'
            label='Width'
            min='0'
          />
          <TextField
            onChange={({ value }: { value: string | null }) => onChangeHeight(value)}
            value={heightValue}
            type='number'
            label='Height'
            min='0'
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
