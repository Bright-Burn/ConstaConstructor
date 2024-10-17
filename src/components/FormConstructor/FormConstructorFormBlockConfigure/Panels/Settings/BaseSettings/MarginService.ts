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

import { buildClassName } from './buildClassName'

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

      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        margin: { ...(newProps.props.baseProps.margin ?? {}), marginLeft: value },
      }

      newProps.props.className = buildClassName(newProps.props.baseProps)

      onDispatch(selectedView, newProps)
    }
  }

  const onChangemarginRight = (value: (typeof marginRight)[number] | null) => {
    if (selectedView && value != null) {
      const newProps: UnionProps = structuredClone(selectedViewProps)

      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        margin: { ...(newProps.props.baseProps.margin ?? {}), marginRight: value },
      }

      newProps.props.className = buildClassName(newProps.props.baseProps)

      onDispatch(selectedView, newProps)
    }
  }
  const onChangemarginTop = (value: (typeof marginTop)[number] | null) => {
    if (selectedView && value != null) {
      const newProps: UnionProps = structuredClone(selectedViewProps)

      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        margin: { ...(newProps.props.baseProps.margin ?? {}), marginTop: value },
      }

      newProps.props.className = buildClassName(newProps.props.baseProps)
      onDispatch(selectedView, newProps)
    }
  }
  const onChangemarginBottom = (value: (typeof marginBottom)[number] | null) => {
    if (selectedView && value != null) {
      const newProps: UnionProps = structuredClone(selectedViewProps)

      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        margin: { ...(newProps.props.baseProps.margin ?? {}), marginBottom: value },
      }

      newProps.props.className = buildClassName(newProps.props.baseProps)
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
