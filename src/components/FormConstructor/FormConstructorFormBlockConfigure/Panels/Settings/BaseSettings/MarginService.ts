import { ISelectedElement, LayoutElementPropsStyles } from '../../../../coreTypes'
import { marginBottom, marginLeft, marginRight, marginTop } from './types'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'
import { BrandLayoutElementPropsStyles } from '../../../../coreTypes/layoutTypes'
import { isElementProps } from '../../../../utils/quard'

export const useMarginHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  if (!isElementProps<BrandLayoutElementPropsStyles>(selectedElementProps, 'Layout')) {
    return {
      marginProps: null,
      onChangemarginBottom: () => {},
      onChangemarginLeft: () => {},
      onChangemarginRight: () => {},
      onChangemarginTop: () => {}
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
  const onChangemarginLeft = ({ value }: { value: typeof marginLeft[number] | null }) => {
    if (selectedElement && value != null) {
      const newProps: BrandLayoutElementPropsStyles = {
        type: selectedElementProps.type,
        props: {...selectedElementProps.props},
      }
      newProps.props.constaProps = { ...newProps.props.constaProps }

      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        margin: { ...(newProps.props.baseProps?.margin ?? {}), marginLeft: value },
      }
      const prevPadding = newProps.props.baseProps?.padding
        ? Object.values(newProps.props.baseProps.padding).join(' ')
        : ''
      const prevMargin = newProps.props.baseProps?.margin
        ? Object.values({ ...newProps.props.baseProps.margin, marginLeft: '' }).join(' ')
        : ''
      newProps.props.className = `${prevPadding} ${prevMargin} ${value}`

      onDispatch(selectedElement, newProps)
    }
  }
  const onChangemarginRight = ({ value }: { value: typeof marginRight[number] | null }) => {
    if (selectedElement && value != null) {
      const newProps: BrandLayoutElementPropsStyles = {
        type: selectedElementProps.type,
        props: {...selectedElementProps.props},
      }
      newProps.props.constaProps = { ...newProps.props.constaProps }

      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        margin: { ...(newProps.props.baseProps?.margin ?? {}), marginRight: value },
      }
      const prevPadding = newProps.props.baseProps?.padding
        ? Object.values(newProps.props.baseProps.padding).join(' ')
        : ''
      const prevMargin = newProps.props.baseProps?.margin
        ? Object.values({ ...newProps.props.baseProps.margin, marginRight: '' }).join(' ')
        : ''
      newProps.props.className = `${prevPadding} ${prevMargin}  ${value}`
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangemarginTop = ({ value }: { value: typeof marginTop[number] | null }) => {
    if (selectedElement && value != null) {
      const newProps: BrandLayoutElementPropsStyles = {
        type: selectedElementProps.type,
        props: {...selectedElementProps.props},
      }
      newProps.props.constaProps = { ...newProps.props.constaProps }

      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        margin: { ...(newProps.props.baseProps?.margin ?? {}), marginTop: value },
      }
      const prevPadding = newProps.props.baseProps?.padding
        ? Object.values(newProps.props.baseProps.padding).join(' ')
        : ''
      const prevMargin = newProps.props.baseProps?.margin
        ? Object.values({ ...newProps.props.baseProps.margin, marginTop: '' }).join(' ')
        : ''
      newProps.props.className = `${prevPadding} ${prevMargin}  ${value}`
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangemarginBottom = ({ value }: { value: typeof marginBottom[number] | null }) => {
    if (selectedElement && value != null) {
      const newProps: BrandLayoutElementPropsStyles = {
        type: selectedElementProps.type,
        props: {...selectedElementProps.props},
      }
      newProps.props.constaProps = { ...newProps.props.constaProps }

      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        margin: { ...(newProps.props.baseProps?.margin ?? {}), marginBottom: value },
      }
      const prevPadding = newProps.props.baseProps?.padding
        ? Object.values(newProps.props.baseProps.padding).join(' ')
        : ''
      const prevMargin = newProps.props.baseProps?.margin
        ? Object.values({ ...newProps.props.baseProps.margin, marginBottom: '' }).join(' ')
        : ''
      newProps.props.className = `${prevPadding} ${prevMargin}  ${value}`
      onDispatch(selectedElement, newProps)
    }
  }
  return {
    marginProps: selectedElementProps?.props.baseProps?.margin,
    onChangemarginBottom,
    onChangemarginLeft,
    onChangemarginRight,
    onChangemarginTop
  }
}
