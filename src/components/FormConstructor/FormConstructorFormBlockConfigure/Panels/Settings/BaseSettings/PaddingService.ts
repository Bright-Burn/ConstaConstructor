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
  getSelectedViewPropsSelector,
  setInstanceProps,
  useAppDispatch,
  useAppSelector,
} from '../../../../store'

import { buildClassName } from './buildClassName'

export const usePaddingHandlers = () => {
  const selectedView = useAppSelector(getSelectedView)
  const selectedViewProps = useAppSelector(getSelectedViewPropsSelector)

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
      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        padding: { ...(newProps.props.baseProps.padding ?? {}), paddingLeft: value },
      }
      newProps.props.className = buildClassName(newProps.props.baseProps)

      onDispatch(selectedView, newProps)
    }
  }
  const onChangePaddingRight = (value: (typeof paddingsRight)[number] | null) => {
    if (selectedView && value != null) {
      const newProps: UnionProps = structuredClone(selectedViewProps)
      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        padding: { ...(newProps.props.baseProps.padding ?? {}), paddingRight: value },
      }
      newProps.props.className = buildClassName(newProps.props.baseProps)

      onDispatch(selectedView, newProps)
    }
  }
  const onChangePaddingTop = (value: (typeof paddingsTop)[number] | null) => {
    if (selectedView && value != null) {
      const newProps: UnionProps = structuredClone(selectedViewProps)
      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        padding: { ...(newProps.props.baseProps.padding ?? {}), paddingTop: value },
      }
      newProps.props.className = buildClassName(newProps.props.baseProps)

      onDispatch(selectedView, newProps)
    }
  }
  const onChangePaddingBottom = (value: (typeof paddingsBottom)[number] | null) => {
    if (selectedView && value != null) {
      const newProps: UnionProps = structuredClone(selectedViewProps)
      newProps.props.baseProps = {
        ...newProps.props.baseProps,
        padding: { ...(newProps.props.baseProps.padding ?? {}), paddingBottom: value },
      }
      newProps.props.className = buildClassName(newProps.props.baseProps)
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
