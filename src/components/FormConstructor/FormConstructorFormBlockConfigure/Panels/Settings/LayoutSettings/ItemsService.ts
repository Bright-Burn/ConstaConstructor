import type { LayoutPropHorizontalAlign, LayoutPropVerticalAlign } from '@consta/uikit/Layout'

import type { ConstaColor } from '../../../../../ConstaPalette'
import type {
  AlignItems,
  BorderSide,
  BorderStyle,
  BorderWidth,
  BrandLayoutElementPropsStyles,
  ISelectedElement,
  JustifyContentProps,
  LayoutElement,
  LayoutElementPropsStyles,
  LayoutPropDirection,
} from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (
  selectedElementProps: LayoutElementPropsStyles,
  selectedElement: LayoutElement,
) => {
  const dispatch = useAppDispatch()
  const onDispatch = (
    selectedElement: ISelectedElement,
    newProps: BrandLayoutElementPropsStyles,
  ) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps,
      }),
    )
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

  const onChangeJustifyContent = (value: JustifyContentProps) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }

    newProps.props.styles = { ...newProps.props.styles }

    newProps.props.styles.justifyContent = value

    onDispatch(selectedElement, newProps)
  }

  const onChangeAlignItems = (value: AlignItems) => {
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

  const onChangeBorderWidth = (value: BorderWidth | null) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }

    newProps.props.styles = { ...newProps.props.styles }
    newProps.props.styles.borderWidth = value ? value : undefined
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

  return {
    onChangeFlex,
    onChangeWidth,
    onChangeJustifyContent,
    onChangeAlignItems,
    onChangeHeight,
    onChangeHorizontalAligment,
    onChangeBorderWidth,
    onChangeBorderStyle,
    onChangeBorderSide,
    onChangeBorderColor,
    onChangeVerticalAligment,
    onChangeDirection,
    onChangeBackroundColor,
    itemsProps: {
      constaProps: selectedElementProps.constaProps,
      styles: selectedElementProps.styles,
      selectedElementProps,
    },
  }
}
