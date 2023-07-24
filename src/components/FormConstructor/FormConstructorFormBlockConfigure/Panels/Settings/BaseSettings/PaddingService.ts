import {
  LayoutElementPropsStyles,
  useAppSelector,
} from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import { paddingsBottom, paddingsLeft, paddingsRight, paddingsTop } from './types'
import { setSelectedElement, useAppDispatch } from '../../../../store'

export const usePaddingHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
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
  const onChangePaddingLeft = ({ value }: { value: typeof paddingsLeft[number] | null }) => {
    if (selectedElement && value != null) {
      const newProps: LayoutElementPropsStyles = {
        ...(selectedElementProps as LayoutElementPropsStyles),
      }
      newProps.constaProps = { ...newProps.constaProps }
      newProps.baseProps = {
        ...newProps.baseProps,
        padding: { ...(newProps.baseProps?.padding ?? {}), paddingLeft: value },
      }
      const prevMargin = newProps.baseProps?.margin
        ? Object.values(newProps.baseProps.margin).join(' ')
        : ''
      const prevPadding = newProps.baseProps?.padding
        ? Object.values({ ...newProps.baseProps.padding, paddingLeft: '' }).join(' ')
        : ''
      newProps.className = `${prevPadding} ${prevMargin} ${value}`

      onDispatch(selectedElement, newProps)
    }
  }
  const onChangePaddingRight = ({ value }: { value: typeof paddingsRight[number] | null }) => {
    if (selectedElement && value != null) {
      const newProps: LayoutElementPropsStyles = {
        ...(selectedElementProps as LayoutElementPropsStyles),
      }
      newProps.constaProps = { ...newProps.constaProps }
      newProps.baseProps = {
        ...newProps.baseProps,
        padding: { ...(newProps.baseProps?.padding ?? {}), paddingRight: value },
      }
      const prevMargin = newProps.baseProps?.margin
        ? Object.values(newProps.baseProps.margin).join(' ')
        : ''
      const prevPadding = newProps.baseProps?.padding
        ? Object.values({ ...newProps.baseProps.padding, paddingRight: '' }).join(' ')
        : ''
      newProps.className = `${prevPadding} ${prevMargin} ${value}`

      onDispatch(selectedElement, newProps)
    }
  }
  const onChangePaddingTop = ({ value }: { value: typeof paddingsTop[number] | null }) => {
    if (selectedElement && value != null) {
      const newProps: LayoutElementPropsStyles = {
        ...(selectedElementProps as LayoutElementPropsStyles),
      }
      newProps.constaProps = { ...newProps.constaProps }
      newProps.baseProps = {
        ...newProps.baseProps,
        padding: { ...(newProps.baseProps?.padding ?? {}), paddingTop: value },
      }
      const prevMargin = newProps.baseProps?.margin
        ? Object.values(newProps.baseProps.margin).join(' ')
        : ''
      const prevPadding = newProps.baseProps?.padding
        ? Object.values({ ...newProps.baseProps.padding, paddingTop: '' }).join(' ')
        : ''
      newProps.className = `${prevPadding} ${prevMargin} ${value}`

      onDispatch(selectedElement, newProps)
    }
  }
  const onChangePaddingBottom = ({ value }: { value: typeof paddingsBottom[number] | null }) => {
    if (selectedElement && value != null) {
      const newProps: LayoutElementPropsStyles = {
        ...(selectedElementProps as LayoutElementPropsStyles),
      }
      newProps.constaProps = { ...newProps.constaProps }
      newProps.baseProps = {
        ...newProps.baseProps,
        padding: { ...(newProps.baseProps?.padding ?? {}), paddingBottom: value },
      }
      const prevMargin = newProps.baseProps?.margin
        ? Object.values(newProps.baseProps.margin).join(' ')
        : ''
      const prevPadding = newProps.baseProps?.padding
        ? Object.values({ ...newProps.baseProps.padding, paddingBottom: '' }).join(' ')
        : ''
      newProps.className = `${prevPadding} ${prevMargin} ${value}`
      onDispatch(selectedElement, newProps)
    }
  }
  return {
    onChangePaddingBottom,
    onChangePaddingLeft,
    onChangePaddingRight,
    onChangePaddingTop,
    paddingProps: selectedElementProps?.baseProps?.padding,
  }
}
