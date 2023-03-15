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
import { AlignItems, JustifyContentProps } from '../../../../store/formElements/layoutTypes'
export const LayoutSettings = () => {
  const directions: LayoutPropDirection[] = ['row', 'column']
  const verticalAligns: LayoutPropVerticalAlign[] = ['top', 'bottom']
  const horizontalAligns: LayoutPropHorizontalAlign[] = ['left', 'right']
  const justifyContentProps: JustifyContentProps[] = [
    'start',
    'center',
    'end',
    'space-between',
    'space-around',
    'space-evenly',
  ]
  const alignItems: AlignItems[] = ['center', 'start', 'end', 'flex-end', 'flex-start']

  const [propsStyles, setPropsStyles] = useState<LayoutElementPropsStyles>()
  const [widthValue, setWidthValue] = useState<string>('0')
  const [heightValue, setHeightValue] = useState<string>('0')

  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)

  const dispatch = useDispatch()

  useLayoutEffect(() => {
    if (selectedElementProps) {
      const layoutProps = selectedElementProps as LayoutElementPropsStyles

      setHeightValue(layoutProps.styles?.maxHeight?.replaceAll('px', '') || '0')
      setWidthValue(layoutProps.styles?.maxWidth?.replaceAll('px', '') || '0')
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
  const onChangeAlignItems = ({ value }: { value: string | null }) => {
    if (selectedElement) {
      const newProps: LayoutElementPropsStyles = {
        ...(selectedElementProps as LayoutElementPropsStyles),
      }

      newProps.styles = { ...newProps.styles }

      // @ts-ignore
      newProps.styles.alignItems = value
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
        newProps.styles.maxWidth = `${value}px`
        newProps.styles.minWidth = `${value}px`
        onDispatch(selectedElement, newProps)
      } else {
        newProps.styles.maxWidth = undefined
        newProps.styles.minWidth = undefined
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
        newProps.styles.maxHeight = `${value}px`
        newProps.styles.minHeight = `${value}px`
        onDispatch(selectedElement, newProps)
      } else {
        newProps.styles.maxHeight = undefined
        newProps.styles.minHeight = undefined
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
          <Select
            getItemKey={key => key}
            label='AlignItems'
            getItemLabel={label => label}
            items={alignItems}
            value={`${propsStyles.styles?.alignItems || 'flex-start'}`}
            onChange={onChangeAlignItems}
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
