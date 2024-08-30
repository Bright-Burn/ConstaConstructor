import type {
  IselectedView,
  paddingsBottom,
  paddingsLeft,
  paddingsRight,
  paddingsTop,
  UnionProps,
} from '../../../../coreTypes'
import {
  getSelectedView,
  getselectedViewPropsSelector,
  setInstanceProps,
  useAppDispatch,
  useAppSelector,
} from '../../../../store'

export const usePaddingHandlers = () => {
  const selectedView = useAppSelector(getSelectedView)
  const selectedViewProps = useAppSelector(getselectedViewPropsSelector)

  const dispatch = useAppDispatch()

  if (!selectedViewProps) {
    return {
      paddingProps: null,
      onChangePaddingBottom: () => {},
      onChangePaddingLeft: () => {},
      onChangePaddingRight: () => {},
      onChangePaddingTop: () => {},
    }
  }

  const onDispatch = (selectedView: IselectedView, newProps: UnionProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }
  const onChangePaddingLeft = (value: (typeof paddingsLeft)[number] | null) => {
    if (selectedView && value != null) {
      const newProps: UnionProps = structuredClone(selectedViewProps)
      if ('constaProps' in newProps.props) {
        newProps.props.constaProps = { ...newProps.props.constaProps }
      }
      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        padding: { ...(newProps.props.baseProps.padding ?? {}), paddingLeft: value },
      }
      const prevMargin = newProps.props.baseProps.margin
        ? Object.values(newProps.props.baseProps.margin).join(' ')
        : ''
      const prevPadding = newProps.props.baseProps.padding
        ? Object.values({ ...newProps.props.baseProps.padding, paddingLeft: '' }).join(' ')
        : ''
      newProps.props.className = `${prevPadding} ${prevMargin} ${value}`

      onDispatch(selectedView, newProps)
    }
  }
  const onChangePaddingRight = (value: (typeof paddingsRight)[number] | null) => {
    if (selectedView && value != null) {
      const newProps: UnionProps = structuredClone(selectedViewProps)
      if ('constaProps' in newProps.props) {
        newProps.props.constaProps = { ...newProps.props.constaProps }
      }
      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        padding: { ...(newProps.props.baseProps.padding ?? {}), paddingRight: value },
      }
      const prevMargin = newProps.props.baseProps.margin
        ? Object.values(newProps.props.baseProps.margin).join(' ')
        : ''
      const prevPadding = newProps.props.baseProps.padding
        ? Object.values({ ...newProps.props.baseProps.padding, paddingRight: '' }).join(' ')
        : ''
      newProps.props.className = `${prevPadding} ${prevMargin} ${value}`

      onDispatch(selectedView, newProps)
    }
  }
  const onChangePaddingTop = (value: (typeof paddingsTop)[number] | null) => {
    if (selectedView && value != null) {
      const newProps: UnionProps = structuredClone(selectedViewProps)
      if ('constaProps' in newProps.props) {
        newProps.props.constaProps = { ...newProps.props.constaProps }
      }
      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        padding: { ...(newProps.props.baseProps.padding ?? {}), paddingTop: value },
      }
      const prevMargin = newProps.props.baseProps.margin
        ? Object.values(newProps.props.baseProps.margin).join(' ')
        : ''
      const prevPadding = newProps.props.baseProps.padding
        ? Object.values({ ...newProps.props.baseProps.padding, paddingTop: '' }).join(' ')
        : ''
      newProps.props.className = `${prevPadding} ${prevMargin} ${value}`

      onDispatch(selectedView, newProps)
    }
  }
  const onChangePaddingBottom = (value: (typeof paddingsBottom)[number] | null) => {
    if (selectedView && value != null) {
      const newProps: UnionProps = structuredClone(selectedViewProps)
      if ('constaProps' in newProps.props) {
        newProps.props.constaProps = { ...newProps.props.constaProps }
      }
      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        padding: { ...(newProps.props.baseProps.padding ?? {}), paddingBottom: value },
      }
      const prevMargin = newProps.props.baseProps.margin
        ? Object.values(newProps.props.baseProps.margin).join(' ')
        : ''
      const prevPadding = newProps.props.baseProps.padding
        ? Object.values({ ...newProps.props.baseProps.padding, paddingBottom: '' }).join(' ')
        : ''
      newProps.props.className = `${prevPadding} ${prevMargin} ${value}`
      onDispatch(selectedView, newProps)
    }
  }
  return {
    onChangePaddingBottom,
    onChangePaddingLeft,
    onChangePaddingRight,
    onChangePaddingTop,
    paddingProps: selectedViewProps.props.baseProps.padding,
  }
}
