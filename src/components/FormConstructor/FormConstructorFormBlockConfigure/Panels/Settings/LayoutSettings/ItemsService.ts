import {
  LayoutPropDirection,
  LayoutPropVerticalAlign,
  LayoutPropHorizontalAlign,
} from '@consta/uikit/Layout'
import {
  JustifyContentProps,
  AlignItems,
  BorderWidth,
  BorderStyle,
  BorderColor,
  BorderSide,
  LayoutElementPropsStyles,
  ISelectedElement,
} from '../../../../coreTypes'
import { ConstaColor } from '../../../../../ConstaPalette'
import { setSelectedElement, useAppDispatch } from '../../../../store'
import { BrandLayoutElementPropsStyles, LayoutElement } from '../../../../coreTypes/layoutTypes'

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
        newProps: newProps,
      }),
    )
  }

  const onChangeFlex =
    () =>
    ({ value }: { value: string | null }) => {
      const newProps: BrandLayoutElementPropsStyles = {
        props: { ...selectedElementProps },
        type: 'Layout',
      }
      newProps.props.constaProps = { ...newProps.props.constaProps }

      const newValue = Number(value)

      newProps.props.constaProps['flex'] = value != null ? newValue : 1
      onDispatch(selectedElement, newProps)
    }

  const onChangeDirection = (value: string | null) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }

    newProps.props.constaProps = { ...newProps.props.constaProps }

    newProps.props.constaProps['direction'] = value as LayoutPropDirection
    onDispatch(selectedElement, newProps)
  }

  const onChangeVerticalAligment = (value: string | null) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }
    newProps.props.constaProps = { ...newProps.props.constaProps }

    newProps.props.constaProps['verticalAlign'] = value as LayoutPropVerticalAlign
    onDispatch(selectedElement, newProps)
  }

  const onChangeHorizontalAligment = (value: string | null) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }

    newProps.props.constaProps = { ...newProps.props.constaProps }

    newProps.props.constaProps['horizontalAlign'] = value as LayoutPropHorizontalAlign
    onDispatch(selectedElement, newProps)
  }

  const onChangeJustifyContent = (value: string | null) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }

    newProps.props.styles = { ...newProps.props.styles }

    newProps.props.styles.justifyContent = value as JustifyContentProps
    onDispatch(selectedElement, newProps)
  }

  const onChangeAlignItems = (value: string | null) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }

    newProps.props.styles = { ...newProps.props.styles }

    newProps.props.styles.alignItems = value as AlignItems
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

  const onChangeBorderWidth = (value: string | null) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }

    newProps.props.styles = { ...newProps.props.styles }

    newProps.props.styles.borderWidth = value as BorderWidth
    onDispatch(selectedElement, newProps)
  }

  const onChangeBorderStyle = (value: string | null) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }
    newProps.props.styles = { ...newProps.props.styles }
    newProps.props.styles.borderStyle = value as BorderStyle
    onDispatch(selectedElement, newProps)
  }

  const onChangeBorderSide = (value: string | null) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }
    newProps.props.styles = { ...newProps.props.styles }
    newProps.props.styles.borderSide = value as BorderSide
    onDispatch(selectedElement, newProps)
  }

  const onChangeBorderColor = (value: string | null) => {
    const newProps: BrandLayoutElementPropsStyles = {
      props: { ...selectedElementProps },
      type: 'Layout',
    }

    newProps.props.styles = { ...newProps.props.styles }

    newProps.props.styles.borderColor = value as BorderColor
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
