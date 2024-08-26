import type { LayoutPropHorizontalAlign, LayoutPropVerticalAlign } from '@consta/uikit/Layout'

import type { ConstaColor } from '../../../../../ConstaPalette'
import type {
  AlignItems,
  BorderSide,
  BorderStyle,
  BrandLayoutElementPropsStyles,
  ISelectedElement,
  JustifyContentProps,
  LayoutElement,
  LayoutElementPropsStyles,
  LayoutPropDirection,
} from '../../../../coreTypes'
import { setInstanceProps, updateGroupFormElementLabel, useAppDispatch } from '../../../../store'

import type { overflowType } from './LayoutConstants'

export const useItemsHandlers = (
  selectedElementProps: LayoutElementPropsStyles,
  selectedElement: LayoutElement,
) => {
  const dispatch = useAppDispatch()
  const onDispatch = (
    selectedElement: ISelectedElement,
    newProps: BrandLayoutElementPropsStyles,
  ) => {
    dispatch(setInstanceProps(selectedElement.elementId, newProps))
  }

  const onChangeFlex = (value: string | null) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }
    newProps.props.constaProps = { ...newProps.props.constaProps }

    const newValue = Number(value)

    newProps.props.constaProps['flex'] = value != null ? newValue : 1
    onDispatch(selectedElement, newProps)
  }

  const onChangeDirection = (value: LayoutPropDirection) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }
    newProps.props.constaProps = { ...newProps.props.constaProps }

    newProps.props.constaProps.direction = value

    onDispatch(selectedElement, newProps)
  }
  const onChangeWrap = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }
    newProps.props.styles = { ...newProps.props.styles }
    newProps.props.styles.flexWrap = checked ? 'wrap' : 'nowrap'
    onDispatch(selectedElement, newProps)
  }
  const onChangeVerticalAligment = (value: LayoutPropVerticalAlign) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }
    newProps.props.constaProps = { ...newProps.props.constaProps }

    newProps.props.constaProps.verticalAlign = value
    onDispatch(selectedElement, newProps)
  }

  const onChangeHorizontalAligment = (value: LayoutPropHorizontalAlign) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }

    newProps.props.constaProps = { ...newProps.props.constaProps }

    newProps.props.constaProps.horizontalAlign = value
    onDispatch(selectedElement, newProps)
  }

  const onChangeJustifyContent = (value: JustifyContentProps | undefined) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }

    newProps.props.styles = { ...newProps.props.styles }

    newProps.props.styles.justifyContent = value

    onDispatch(selectedElement, newProps)
  }

  const onChangeAlignItems = (value: AlignItems | undefined) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }
    newProps.props.styles = { ...newProps.props.styles }

    newProps.props.styles.alignItems = value

    onDispatch(selectedElement, newProps)
  }

  const onChangeWidth = (value: string | null) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }
    newProps.props.styles = { ...newProps.props.styles }

    if (value && value !== '0') {
      let newValue = value
      if (value.startsWith('0')) {
        newValue = newValue.replace('0', '')
      }
      newProps.props.styles.maxWidth = `${newValue}px`
      newProps.props.styles.minWidth = `${newValue}px`
      onDispatch(selectedElement, newProps)
    } else {
      newProps.props.styles.maxWidth = undefined
      newProps.props.styles.minWidth = undefined
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeHeight = (value: string | null) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }
    newProps.props.styles = { ...newProps.props.styles }

    if (value && value !== '0') {
      let newValue = value
      if (value.startsWith('0')) {
        newValue = newValue.replace('0', '')
      }
      newProps.props.styles.maxHeight = `${newValue}px`
      newProps.props.styles.minHeight = `${newValue}px`
      onDispatch(selectedElement, newProps)
    } else {
      newProps.props.styles.maxHeight = undefined
      newProps.props.styles.minHeight = undefined
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeBorderWidth = (value: string | null, direction: 'T' | 'R' | 'B' | 'L') => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }

    newProps.props.styles = { ...newProps.props.styles }
    if (direction === 'T') {
      newProps.props.styles.borderTopWidth = value ? value : undefined
    } else if (direction === 'R') {
      newProps.props.styles.borderRightWidth = value ? value : undefined
    } else if (direction === 'B') {
      newProps.props.styles.borderBottomWidth = value ? value : undefined
    } else {
      newProps.props.styles.borderLeftWidth = value ? value : undefined
    }
    onDispatch(selectedElement, newProps)
  }

  const onChangeBorderStyle = (value: BorderStyle | null | undefined) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }

    newProps.props.styles = { ...newProps.props.styles }
    newProps.props.styles.borderStyle = value ? value : undefined

    onDispatch(selectedElement, newProps)
  }

  const onChangeBorderSide = (value: BorderSide | null) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }

    newProps.props.styles = { ...newProps.props.styles }
    newProps.props.styles.borderSide = value ? value : undefined

    onDispatch(selectedElement, newProps)
  }

  const onChangeBorderColor = (value: ConstaColor) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }

    newProps.props.styles = { ...newProps.props.styles }
    newProps.props.styles.borderColor = value

    onDispatch(selectedElement, newProps)
  }

  const onChangeBackroundColor = (color: ConstaColor) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }

    newProps.props.styles = { ...newProps.props.styles }
    newProps.props.styles.backgroundColor = color

    onDispatch(selectedElement, newProps)
  }
  const onChangeOverflow = (overflow: overflowType | null, type: 'X' | 'Y') => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }

    newProps.props.styles = { ...newProps.props.styles }
    if (type === 'X') {
      newProps.props.styles.overflowX = overflow ?? undefined
    } else {
      newProps.props.styles.overflowY = overflow ?? undefined
    }
    onDispatch(selectedElement, newProps)
  }
  const onChangeBorderRadius = (value: string | null, direction: 'TL' | 'TR' | 'BR' | 'BL') => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }
    newProps.props.styles = { ...newProps.props.styles }
    if (direction === 'TL') {
      newProps.props.styles.borderTopLeftRadius = value ? value : undefined
    } else if (direction === 'TR') {
      newProps.props.styles.borderTopRightRadius = value ? value : undefined
    } else if (direction === 'BR') {
      newProps.props.styles.borderBottomRightRadius = value ? value : undefined
    } else {
      newProps.props.styles.borderBottomLeftRadius = value ? value : undefined
    }
    onDispatch(selectedElement, newProps)
  }
  const onChangeRotate = (value: string | null) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }
    newProps.props.styles = { ...newProps.props.styles }
    newProps.props.styles.transform = value ? value : undefined
    onDispatch(selectedElement, newProps)
  }
  const onChangeLabel = (value: string | null) => {
    const newLabel = value ? value : ''
    dispatch(updateGroupFormElementLabel(newLabel, selectedElement.elementId))
  }

  return {
    onChangeFlex,
    onChangeWidth,
    onChangeJustifyContent,
    onChangeAlignItems,
    onChangeHeight,
    onChangeHorizontalAligment,
    onChangeWrap,
    onChangeBorderWidth,
    onChangeBorderStyle,
    onChangeBorderSide,
    onChangeBorderColor,
    onChangeVerticalAligment,
    onChangeDirection,
    onChangeBackroundColor,
    onChangeOverflow,
    onChangeBorderRadius,
    onChangeRotate,
    onChangeLabel,
    itemsProps: {
      constaProps: selectedElementProps.constaProps,
      styles: selectedElementProps.styles,
      selectedElementProps,
    },
  }
}
