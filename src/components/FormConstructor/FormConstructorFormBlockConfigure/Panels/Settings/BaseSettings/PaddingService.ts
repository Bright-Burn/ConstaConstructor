import { ISelectedElement, LayoutElementPropsStyles } from '../../../../coreTypes'
import { paddingsBottom, paddingsLeft, paddingsRight, paddingsTop } from './types'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'
import { BrandLayoutElementPropsStyles } from '../../../../coreTypes/layoutTypes'
import { isElementProps } from '../../../../utils/quard'

export const usePaddingHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  if (!isElementProps<BrandLayoutElementPropsStyles>(selectedElementProps, 'Layout')) {
    return {
      onChangePaddingBottom: () => {},
      onChangePaddingLeft: () => {},
      onChangePaddingRight: () => {},
      onChangePaddingTop: () => {},
      paddingProps: null,
    }
  }
  const dispatch = useAppDispatch()
  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandLayoutElementPropsStyles) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }
  const onChangePaddingLeft = ({ value }: { value: typeof paddingsLeft[number] | null }) => {
    if (selectedElement && value != null) {
      const newProps: BrandLayoutElementPropsStyles = {
        props: {...selectedElementProps.props},
        type: 'Layout'
      }
      newProps.props.constaProps = { ...newProps.props.constaProps }
      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        padding: { ...(newProps.props.baseProps?.padding ?? {}), paddingLeft: value },
      }
      const prevMargin = newProps.props.baseProps?.margin
        ? Object.values(newProps.props.baseProps.margin).join(' ')
        : ''
      const prevPadding = newProps.props.baseProps?.padding
        ? Object.values({ ...newProps.props.baseProps.padding, paddingLeft: '' }).join(' ')
        : ''
      newProps.props.className = `${prevPadding} ${prevMargin} ${value}`

      onDispatch(selectedElement, newProps)
    }
  }
  const onChangePaddingRight = ({ value }: { value: typeof paddingsRight[number] | null }) => {
    if (selectedElement && value != null) {
      const newProps: BrandLayoutElementPropsStyles = {
        props: {...selectedElementProps.props},
        type: 'Layout'
      }
      newProps.props.constaProps = { ...newProps.props.constaProps }
      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        padding: { ...(newProps.props.baseProps?.padding ?? {}), paddingRight: value },
      }
      const prevMargin = newProps.props.baseProps?.margin
        ? Object.values(newProps.props.baseProps.margin).join(' ')
        : ''
      const prevPadding = newProps.props.baseProps?.padding
        ? Object.values({ ...newProps.props.baseProps.padding, paddingRight: '' }).join(' ')
        : ''
      newProps.props.className = `${prevPadding} ${prevMargin} ${value}`

      onDispatch(selectedElement, newProps)
    }
  }
  const onChangePaddingTop = ({ value }: { value: typeof paddingsTop[number] | null }) => {
    if (selectedElement && value != null) {
      const newProps: BrandLayoutElementPropsStyles = {
        props: {...selectedElementProps.props},
        type: 'Layout'
      }
      newProps.props.constaProps = { ...newProps.props.constaProps }
      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        padding: { ...(newProps.props.baseProps?.padding ?? {}), paddingTop: value },
      }
      const prevMargin = newProps.props.baseProps?.margin
        ? Object.values(newProps.props.baseProps.margin).join(' ')
        : ''
      const prevPadding = newProps.props.baseProps?.padding
        ? Object.values({ ...newProps.props.baseProps.padding, paddingTop: '' }).join(' ')
        : ''
      newProps.props.className = `${prevPadding} ${prevMargin} ${value}`

      onDispatch(selectedElement, newProps)
    }
  }
  const onChangePaddingBottom = ({ value }: { value: typeof paddingsBottom[number] | null }) => {
    if (selectedElement && value != null) {
      const newProps: BrandLayoutElementPropsStyles = {
        props: {...selectedElementProps.props},
        type: 'Layout'
      }
      newProps.props.constaProps = { ...newProps.props.constaProps }
      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        padding: { ...(newProps.props.baseProps?.padding ?? {}), paddingBottom: value },
      }
      const prevMargin = newProps.props.baseProps?.margin
        ? Object.values(newProps.props.baseProps.margin).join(' ')
        : ''
      const prevPadding = newProps.props.baseProps?.padding
        ? Object.values({ ...newProps.props.baseProps.padding, paddingBottom: '' }).join(' ')
        : ''
      newProps.props.className = `${prevPadding} ${prevMargin} ${value}`
      onDispatch(selectedElement, newProps)
    }
  }
  return {
    onChangePaddingBottom,
    onChangePaddingLeft,
    onChangePaddingRight,
    onChangePaddingTop,
    paddingProps: selectedElementProps?.props.baseProps?.padding,
  }
}
