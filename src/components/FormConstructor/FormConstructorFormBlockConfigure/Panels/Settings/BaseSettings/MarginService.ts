import type {
  IselectedView,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  UnionProps,
} from '../../../../coreTypes'
import {
  getSelectedView,
  getSelectedViewPropsSelector,
  setInstanceProps,
  useAppDispatch,
  useAppSelector,
} from '../../../../store'

export const useMarginHandlers = () => {
  const selectedView = useAppSelector(getSelectedView)
  const dispatch = useAppDispatch()
  const selectedViewProps = useAppSelector(getSelectedViewPropsSelector)

  if (!selectedViewProps) {
    return {
      marginProps: null,
      onChangemarginBottom: () => {},
      onChangemarginLeft: () => {},
      onChangemarginRight: () => {},
      onChangemarginTop: () => {},
    }
  }

  const onDispatch = (selectedView: IselectedView, newProps: UnionProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }
  const onChangemarginLeft = (value: (typeof marginLeft)[number] | null) => {
    if (selectedView && value != null) {
      const newProps: UnionProps = structuredClone(selectedViewProps)
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

      onDispatch(selectedView, newProps)
    }
  }
  const onChangemarginRight = (value: (typeof marginRight)[number] | null) => {
    if (selectedView && value != null) {
      const newProps: UnionProps = structuredClone(selectedViewProps)
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
      onDispatch(selectedView, newProps)
    }
  }
  const onChangemarginTop = (value: (typeof marginTop)[number] | null) => {
    if (selectedView && value != null) {
      const newProps: UnionProps = structuredClone(selectedViewProps)
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
      onDispatch(selectedView, newProps)
    }
  }
  const onChangemarginBottom = (value: (typeof marginBottom)[number] | null) => {
    if (selectedView && value != null) {
      const newProps: UnionProps = structuredClone(selectedViewProps)
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
      onDispatch(selectedView, newProps)
    }
  }
  return {
    marginProps: selectedViewProps.props.baseProps.margin,
    onChangemarginBottom,
    onChangemarginLeft,
    onChangemarginRight,
    onChangemarginTop,
  }
}
