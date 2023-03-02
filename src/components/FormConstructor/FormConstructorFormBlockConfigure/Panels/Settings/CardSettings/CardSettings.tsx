import { useLayoutEffect, useState } from 'react'
import { CardElementPropsStyles, formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { CardElementProps } from '../../../../store/formElements/cardTypes'
import { TextField } from '@consta/uikit/TextField'
import { ISelectedElement } from '../../../../store/formElements/types'

export const CardSettings = () => {
  const [props, setProps] = useState<CardElementPropsStyles | undefined>()
  const status:string[] = ['alert', 'success', 'warning', 'undefined']
  const form:string[] = ['round', 'square',]
  const space:string[] = ['m', 'xs', 's', 'l', 'xl', '2xl', '3xl', '4xl', '5xl']
  const [widthValue, setWidthValue] = useState<string>('0')
  const [heightValue, setHeightValue] = useState<string>('0')
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)

  useLayoutEffect(() => {
    if (selectedElementProps) {
      const cardProps = selectedElementProps as CardElementPropsStyles

      setHeightValue(cardProps.styles?.height?.replaceAll('px', '') || '')
      setWidthValue(cardProps.styles?.width?.replaceAll('px', '') || '')
      setProps(cardProps)
    }
  }, [selectedElementProps])

  const dispatch = useDispatch()

  useLayoutEffect(() => {
    if (selectedElementProps) {
      setProps(selectedElementProps as CardElementPropsStyles)
    }
  }, [selectedElementProps])

    const onChangeCardField=
    (propsName: keyof CardElementProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        const newProps: CardElementPropsStyles = {
          ...(selectedElementProps as CardElementPropsStyles),
        }
        // @ts-ignore
        newProps.constaProps = { ...newProps.constaProps }
        newProps.constaProps[propsName] = value
        onDispatch(selectedElement, newProps)
      }
    }

    const onChangeCardSwitch =
    (propsName: keyof CardElementProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        const newProps: CardElementPropsStyles = {
          ...(selectedElementProps as CardElementPropsStyles),
        }
        // @ts-ignore
        newProps.constaProps = { ...newProps.constaProps }
        newProps.constaProps[propsName] = checked
        onDispatch(selectedElement, newProps)
      }
    }

    const onChangeWidth = (value: string | null) => {
      const newProps: CardElementPropsStyles = {
        ...(selectedElementProps as CardElementPropsStyles),
      }
      newProps.styles = { ...newProps.styles }
  console.log(value)
      if (selectedElement) {
        if (value && value !== '0') {
          newProps.styles.width = `${value}px`
          onDispatch(selectedElement, newProps)
        } else {
          newProps.styles.width = undefined
          onDispatch(selectedElement, newProps)
        }
      }
    }
  
    const onChangeHeight = (value: string | null) => {
      const newProps: CardElementPropsStyles = {
        ...(selectedElementProps as CardElementPropsStyles),
      }
      newProps.styles = { ...newProps.styles }
      if (selectedElement) {
        if (value && value !== '0') {
          newProps.styles.height = `${value}px`
          onDispatch(selectedElement, newProps)
        } else {
          newProps.styles.height = undefined
          onDispatch(selectedElement, newProps)
        }
      }
    }

  const onDispatch = (selectedElement: ISelectedElement, newProps: CardElementPropsStyles) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
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
          <Switch checked={props.constaProps.shadow ?? true} label='shadow' 
            onChange={onChangeCardSwitch('shadow')}/>
          <Switch checked={props.constaProps.border ?? false} label='border' onChange={onChangeCardSwitch('border')}/>
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