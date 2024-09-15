import type { LayoutPropHorizontalAlign, LayoutPropVerticalAlign } from '@consta/uikit/Layout'

import type { ConstaColor } from '../../../../../ConstaPalette'
import type {
  AlignItems,
  BorderStyle,
  BrandLayoutElementPropsStyles,
  IselectedView,
  JustifyContentProps,
  LayoutElement,
  LayoutElementPropsStyles,
  LayoutPropDirection,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

import type { overflowType } from './LayoutConstants'

export const useItemsHandlers = (
  selectedViewProps: LayoutElementPropsStyles,
  selectedView: LayoutElement,
) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedView: IselectedView, newProps: BrandLayoutElementPropsStyles) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  const onChangeFlex = (value: string | null) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedViewProps },
      type: 'Layout',
    }
    newProps.props.constaProps = { ...newProps.props.constaProps }

    const newValue = Number(value)

    newProps.props.constaProps['flex'] = value != null ? newValue : 1
    onDispatch(selectedView, newProps)
  }

  const onChangeDirection = (value: LayoutPropDirection) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedViewProps },
      type: 'Layout',
    }
    newProps.props.constaProps = { ...newProps.props.constaProps }

    newProps.props.constaProps.direction = value

    onDispatch(selectedView, newProps)
  }
  const onChangeWrap = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedViewProps },
      type: 'Layout',
    }
    newProps.props.styles = { ...newProps.props.styles }
    newProps.props.styles.flexWrap = checked ? 'wrap' : 'nowrap'
    onDispatch(selectedView, newProps)
  }
  const onChangeVerticalAligment = (value: LayoutPropVerticalAlign) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedViewProps },
      type: 'Layout',
    }
    newProps.props.constaProps = { ...newProps.props.constaProps }

    newProps.props.constaProps.verticalAlign = value
    onDispatch(selectedView, newProps)
  }

  const onChangeHorizontalAligment = (value: LayoutPropHorizontalAlign) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedViewProps },
      type: 'Layout',
    }

    newProps.props.constaProps = { ...newProps.props.constaProps }

    newProps.props.constaProps.horizontalAlign = value
    onDispatch(selectedView, newProps)
  }

  const onChangeJustifyContent = (value: JustifyContentProps | undefined) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedViewProps },
      type: 'Layout',
    }

    newProps.props.styles = { ...newProps.props.styles }

    newProps.props.styles.justifyContent = value

    onDispatch(selectedView, newProps)
  }

  const onChangeAlignItems = (value: AlignItems | undefined) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedViewProps },
      type: 'Layout',
    }
    newProps.props.styles = { ...newProps.props.styles }

    newProps.props.styles.alignItems = value

    onDispatch(selectedView, newProps)
  }

  const onChangeWidth = (value: string | null) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedViewProps },
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
      onDispatch(selectedView, newProps)
    } else {
      newProps.props.styles.maxWidth = undefined
      newProps.props.styles.minWidth = undefined
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeHeight = (value: string | null) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedViewProps },
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
      onDispatch(selectedView, newProps)
    } else {
      newProps.props.styles.maxHeight = undefined
      newProps.props.styles.minHeight = undefined
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeBorderWidth = (value: string | null, direction: 'T' | 'R' | 'B' | 'L') => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedViewProps },
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
    onDispatch(selectedView, newProps)
  }

  const onChangeBorderStyle = (value: BorderStyle | null | undefined) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedViewProps },
      type: 'Layout',
    }

    newProps.props.styles = { ...newProps.props.styles }
    newProps.props.styles.borderStyle = value ? value : undefined

    onDispatch(selectedView, newProps)
  }

  const onChangeBorderColor = (value: ConstaColor) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedViewProps },
      type: 'Layout',
    }

    newProps.props.styles = { ...newProps.props.styles }
    newProps.props.styles.borderColor = value

    onDispatch(selectedView, newProps)
  }

  const onChangeBackroundColor = (color: ConstaColor) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedViewProps },
      type: 'Layout',
    }

    newProps.props.styles = { ...newProps.props.styles }
    newProps.props.styles.backgroundColor = color

    onDispatch(selectedView, newProps)
  }
  const onChangeOverflow = (overflow: overflowType | null, type: 'X' | 'Y') => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedViewProps },
      type: 'Layout',
    }

    newProps.props.styles = { ...newProps.props.styles }
    if (type === 'X') {
      newProps.props.styles.overflowX = overflow ?? undefined
    } else {
      newProps.props.styles.overflowY = overflow ?? undefined
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeBorderRadius = (value: string | null, direction: 'TL' | 'TR' | 'BR' | 'BL') => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedViewProps },
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
    onDispatch(selectedView, newProps)
  }
  const onChangeRotate = (value: string | null) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedViewProps },
      type: 'Layout',
    }
    newProps.props.styles = { ...newProps.props.styles }
    newProps.props.styles.transform = value ? value : undefined
    onDispatch(selectedView, newProps)
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
    onChangeBorderColor,
    onChangeVerticalAligment,
    onChangeDirection,
    onChangeBackroundColor,
    onChangeOverflow,
    onChangeBorderRadius,
    onChangeRotate,
    itemsProps: {
      constaProps: selectedViewProps.constaProps,
      styles: selectedViewProps.styles,
      selectedViewProps,
    },
  }
}
