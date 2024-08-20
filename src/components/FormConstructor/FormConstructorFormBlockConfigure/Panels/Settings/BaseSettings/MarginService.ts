import type {
  ISelectedElement,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  UnionProps,
} from '../../../../coreTypes'
import {
  getSelectedElementPropsSelector,
  selectedElementSelector,
  setInstanceProps,
  useAppDispatch,
  useAppSelector,
} from '../../../../store'

export const useMarginHandlers = () => {
  const selectedElement = useAppSelector(selectedElementSelector)
  const dispatch = useAppDispatch()
  const selectedElementProps = useAppSelector(getSelectedElementPropsSelector)

  if (!selectedElementProps) {
    return {
      marginProps: null,
      onChangemarginBottom: () => {},
      onChangemarginLeft: () => {},
      onChangemarginRight: () => {},
      onChangemarginTop: () => {},
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: UnionProps) => {
    dispatch(setInstanceProps(selectedElement.elementId, newProps))
  }
  const onChangemarginLeft = (value: (typeof marginLeft)[number] | null) => {
    if (selectedElement && value != null) {
      const newProps: UnionProps = structuredClone(selectedElementProps)
      if ('constaProps' in newProps.props) {
        newProps.props.constaProps = { ...newProps.props.constaProps }
      }

      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        margin: { ...(newProps.props.baseProps.margin ?? {}), marginLeft: value },
      }
      const prevPadding = newProps.props.baseProps.padding
        ? Object.values(newProps.props.baseProps.padding).join(' ')
        : ''
      const prevMargin = newProps.props.baseProps.margin
        ? Object.values({ ...newProps.props.baseProps.margin, marginLeft: '' }).join(' ')
        : ''
      newProps.props.className = `${prevPadding} ${prevMargin} ${value}`

      onDispatch(selectedElement, newProps)
    }
  }
  const onChangemarginRight = (value: (typeof marginRight)[number] | null) => {
    if (selectedElement && value != null) {
      const newProps: UnionProps = structuredClone(selectedElementProps)
      if ('constaProps' in newProps.props) {
        newProps.props.constaProps = { ...newProps.props.constaProps }
      }

      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        margin: { ...(newProps.props.baseProps.margin ?? {}), marginRight: value },
      }
      const prevPadding = newProps.props.baseProps.padding
        ? Object.values(newProps.props.baseProps.padding).join(' ')
        : ''
      const prevMargin = newProps.props.baseProps.margin
        ? Object.values({ ...newProps.props.baseProps.margin, marginRight: '' }).join(' ')
        : ''
      newProps.props.className = `${prevPadding} ${prevMargin}  ${value}`
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangemarginTop = (value: (typeof marginTop)[number] | null) => {
    if (selectedElement && value != null) {
      const newProps: UnionProps = structuredClone(selectedElementProps)
      if ('constaProps' in newProps.props) {
        newProps.props.constaProps = { ...newProps.props.constaProps }
      }

      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        margin: { ...(newProps.props.baseProps.margin ?? {}), marginTop: value },
      }
      const prevPadding = newProps.props.baseProps.padding
        ? Object.values(newProps.props.baseProps.padding).join(' ')
        : ''
      const prevMargin = newProps.props.baseProps.margin
        ? Object.values({ ...newProps.props.baseProps.margin, marginTop: '' }).join(' ')
        : ''
      newProps.props.className = `${prevPadding} ${prevMargin}  ${value}`
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangemarginBottom = (value: (typeof marginBottom)[number] | null) => {
    if (selectedElement && value != null) {
      const newProps: UnionProps = structuredClone(selectedElementProps)
      if ('constaProps' in newProps.props) {
        newProps.props.constaProps = { ...newProps.props.constaProps }
      }

      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        margin: { ...(newProps.props.baseProps.margin ?? {}), marginBottom: value },
      }
      const prevPadding = newProps.props.baseProps.padding
        ? Object.values(newProps.props.baseProps.padding).join(' ')
        : ''
      const prevMargin = newProps.props.baseProps.margin
        ? Object.values({ ...newProps.props.baseProps.margin, marginBottom: '' }).join(' ')
        : ''
      newProps.props.className = `${prevPadding} ${prevMargin}  ${value}`
      onDispatch(selectedElement, newProps)
    }
  }
  return {
    marginProps: selectedElementProps.props.baseProps.margin,
    onChangemarginBottom,
    onChangemarginLeft,
    onChangemarginRight,
    onChangemarginTop,
  }
}
