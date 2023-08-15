import {
  LayoutPropDirection,
  LayoutPropHorizontalAlign,
  LayoutPropVerticalAlign,
} from '@consta/uikit/Layout'
import {
  AlignItems,
  BorderColor,
  BorderSide,
  BorderStyle,
  BorderWidth,
  ISelectedElement,
  JustifyContentProps,
  LayoutElementPropsStyles,
} from '../../../../coreTypes'
import { ConstaColor } from '../../../../../ConstaPalette'
import {
  setSelectedElement,
  useAppDispatch,
  useAppFormConstructorSelector,
} from '../../../../store'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } =
    useAppFormConstructorSelector<LayoutElementPropsStyles>()
  const dispatch = useAppDispatch()

  const onDispatch = (selectedElement: ISelectedElement, newProps: LayoutElementPropsStyles) => {
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
      if (selectedElement) {
        const newProps = { ...selectedElementProps }
        newProps.constaProps = { ...newProps.constaProps }

        const newValue = Number(value)

        newProps.constaProps['flex'] = value != null ? newValue : 1
        onDispatch(selectedElement, newProps)
      }
    }

  const onChangeDirection = (value: string | null) => {
    if (selectedElement) {
      const newProps = { ...selectedElementProps }

      newProps.constaProps = { ...newProps.constaProps }

      newProps.constaProps['direction'] = value as LayoutPropDirection
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeVerticalAligment = (value: string | null) => {
    if (selectedElement) {
      const newProps = { ...selectedElementProps }

      newProps.constaProps = { ...newProps.constaProps }

      newProps.constaProps['verticalAlign'] = value as LayoutPropVerticalAlign
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeHorizontalAligment = (value: string | null) => {
    if (selectedElement) {
      const newProps = { ...selectedElementProps }

      newProps.constaProps = { ...newProps.constaProps }

      newProps.constaProps['horizontalAlign'] = value as LayoutPropHorizontalAlign
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeJustifyContent = (value: string | null) => {
    if (selectedElement) {
      const newProps = { ...selectedElementProps }

      newProps.styles = { ...newProps.styles }

      newProps.styles.justifyContent = value as JustifyContentProps
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeAlignItems = (value: string | null) => {
    if (selectedElement) {
      const newProps = { ...selectedElementProps }

      newProps.styles = { ...newProps.styles }

      newProps.styles.alignItems = value as AlignItems
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeWidth = (value: string | null) => {
    const newProps = { ...selectedElementProps }

    newProps.styles = { ...newProps.styles }

    if (selectedElement) {
      if (value && value !== '0') {
        let newValue = value
        if (value.startsWith('0')) {
          newValue = newValue.replace('0', '')
        }
        newProps.styles.maxWidth = `${newValue}px`
        newProps.styles.minWidth = `${newValue}px`
        onDispatch(selectedElement, newProps)
      } else {
        newProps.styles.maxWidth = undefined
        newProps.styles.minWidth = undefined
        onDispatch(selectedElement, newProps)
      }
    }
  }

  const onChangeHeight = (value: string | null) => {
    const newProps = { ...selectedElementProps }

    newProps.styles = { ...newProps.styles }

    if (selectedElement) {
      if (value && value !== '0') {
        let newValue = value
        if (value.startsWith('0')) {
          newValue = newValue.replace('0', '')
        }
        newProps.styles.maxHeight = `${newValue}px`
        newProps.styles.minHeight = `${newValue}px`
        onDispatch(selectedElement, newProps)
      } else {
        newProps.styles.maxHeight = undefined
        newProps.styles.minHeight = undefined
        onDispatch(selectedElement, newProps)
      }
    }
  }

  const onChangeBorderWidth = (value: string | null) => {
    if (selectedElement) {
      const newProps = { ...selectedElementProps }

      newProps.styles = { ...newProps.styles }

      newProps.styles.borderWidth = value as BorderWidth
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeBorderStyle = (value: string | null) => {
    if (selectedElement) {
      const newProps = { ...selectedElementProps }

      newProps.styles = { ...newProps.styles }
      newProps.styles.borderStyle = value as BorderStyle
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeBorderSide = (value: string | null) => {
    if (selectedElement) {
      const newProps = { ...selectedElementProps }

      newProps.styles = { ...newProps.styles }
      newProps.styles.borderSide = value as BorderSide
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeBorderColor = (value: string | null) => {
    if (selectedElement) {
      const newProps = { ...selectedElementProps }

      newProps.styles = { ...newProps.styles }

      newProps.styles.borderColor = value as BorderColor
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeBackroundColor = (color: ConstaColor) => {
    if (selectedElement) {
      const newProps = { ...selectedElementProps }

      newProps.styles = { ...newProps.styles }

      newProps.styles.backgroundColor = color
      onDispatch(selectedElement, newProps)
    }
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
