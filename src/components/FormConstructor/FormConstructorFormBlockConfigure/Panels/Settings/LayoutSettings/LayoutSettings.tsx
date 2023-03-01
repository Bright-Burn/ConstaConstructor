import React, { useLayoutEffect, useState } from 'react'
import {
  formConstructorSlice,
  LayoutElementPropsStyles,
  useAppSelector,
} from '../../../../store/formElements'
import { Select } from '@consta/uikit/Select'
import { TextField } from '@consta/uikit/TextField'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { ISelectedElement } from '../../../../store/formElements/types'
import {
  LayoutPropDirection,
  LayoutPropHorizontalAlign,
  LayoutPropVerticalAlign,
} from '@consta/uikit/Layout'
import { JustifyContentProps } from '../../../../store/formElements/layoutTypes'
export const LayoutSettings = () => {
  const [propsStyles, setPropsStyles] = useState<LayoutElementPropsStyles | undefined>()
  const [directions] = useState<LayoutPropDirection[]>(['row', 'column'])
  const [verticalAligns] = useState<LayoutPropVerticalAlign[]>(['top', 'bottom'])
  const [horizontalAligns] = useState<LayoutPropHorizontalAlign[]>(['left', 'right'])
  const [justifyContentProps] = useState<JustifyContentProps[]>([
    'start',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ])
  const [widthValue, setWidthValue] = useState<string>('0')
  const [heightValue, setHeightValue] = useState<string>('0')

  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)

  const dispatch = useDispatch()

  useLayoutEffect(() => {
    if (selectedElementProps) {
      const layoutProps = selectedElementProps as LayoutElementPropsStyles

      setHeightValue(layoutProps.styles?.height?.replaceAll('rem', '') || '0')
      setWidthValue(layoutProps.styles?.width?.replaceAll('rem', '') || '0')
      setPropsStyles(layoutProps)
    }
  }, [selectedElementProps])

  const onChangeFlex =
    () =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        const newProps: LayoutElementPropsStyles = {
          ...(selectedElementProps as LayoutElementPropsStyles),
        }
        newProps.constaProps = { ...newProps.constaProps }

        const newValue = Number(value)

        // @ts-ignore
        newProps.constaProps['flex'] = value != null ? newValue : 1
        onDispatch(selectedElement, newProps)
      }
    }

  const onChangeDirection =
    () =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        const newProps: LayoutElementPropsStyles = {
          ...(selectedElementProps as LayoutElementPropsStyles),
        }
        newProps.constaProps = { ...newProps.constaProps }

        // @ts-ignore
        newProps.constaProps['direction'] = value
        onDispatch(selectedElement, newProps)
      }
    }

  const onChangeVerticalAligment =
    () =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        const newProps: LayoutElementPropsStyles = {
          ...(selectedElementProps as LayoutElementPropsStyles),
        }
        newProps.constaProps = { ...newProps.constaProps }

        // @ts-ignore
        newProps.constaProps['verticalAlign'] = value
        onDispatch(selectedElement, newProps)
      }
    }

  const onChangeHorizontalAligment =
    () =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        const newProps: LayoutElementPropsStyles = {
          ...(selectedElementProps as LayoutElementPropsStyles),
        }

        newProps.constaProps = { ...newProps.constaProps }

        // @ts-ignore
        newProps.constaProps['horizontalAlign'] = value
        onDispatch(selectedElement, newProps)
      }
    }

  const onChangeJustifyContent = ({ value }: { value: string | null }) => {
    if (selectedElement) {
      const newProps: LayoutElementPropsStyles = {
        ...(selectedElementProps as LayoutElementPropsStyles),
      }

      newProps.styles = { ...newProps.styles }

      // @ts-ignore
      newProps.styles.justifyContent = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeWidth = (value: string | null) => {
    const newProps: LayoutElementPropsStyles = {
      ...(selectedElementProps as LayoutElementPropsStyles),
    }
    newProps.styles = { ...newProps.styles }

    if (selectedElement) {
      if (value && value !== '0') {
        // @ts-ignore
        newProps.styles.width = `${value}rem`
        onDispatch(selectedElement, newProps)
      } else {
        // @ts-ignore
        newProps.styles.width = undefined
        onDispatch(selectedElement, newProps)
      }
    }
  }

  const onChangeHeight = (value: string | null) => {
    const newProps: LayoutElementPropsStyles = {
      ...(selectedElementProps as LayoutElementPropsStyles),
    }
    newProps.styles = { ...newProps.styles }

    if (selectedElement) {
      if (value && value !== '0') {
        // @ts-ignore
        newProps.styles.height = `${value}rem`
        onDispatch(selectedElement, newProps)
      } else {
        // @ts-ignore
        newProps.styles.height = undefined
        onDispatch(selectedElement, newProps)
      }
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: LayoutElementPropsStyles) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  return (
    <div className={styles.layoutSettings}>
      {propsStyles ? (
        <>
          <TextField
            onChange={onChangeFlex()}
            value={`${propsStyles.constaProps.flex}`}
            type='number'
            label='Flex'
            min='1'
          />
          <Select
            getItemKey={key => key}
            label='Direction'
            getItemLabel={label => label}
            items={directions}
            value={`${propsStyles.constaProps.direction || 'row'}`}
            onChange={onChangeDirection()}
          />
          <Select
            getItemKey={key => key}
            label='JustifyContent'
            getItemLabel={label => label}
            items={justifyContentProps}
            value={`${propsStyles.styles?.justifyContent || 'flex-start'}`}
            onChange={onChangeJustifyContent}
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
          <Select
            getItemKey={key => key}
            label='Vertical Aligned'
            getItemLabel={label => label}
            items={verticalAligns}
            value={`${propsStyles.constaProps.verticalAlign || 'top'}`}
            onChange={onChangeVerticalAligment()}
          />
          <Select
            getItemKey={key => key}
            label='Horizontal Aligned'
            getItemLabel={label => label}
            items={horizontalAligns}
            value={`${propsStyles.constaProps.horizontalAlign || 'left'}`}
            onChange={onChangeHorizontalAligment()}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
