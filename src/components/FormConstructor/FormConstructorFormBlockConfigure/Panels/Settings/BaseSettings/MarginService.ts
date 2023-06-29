import { useDispatch } from 'react-redux'
import {
  formConstructorSlice,
  LayoutElementPropsStyles,
  useAppSelector,
} from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import { marginBottom, marginLeft, marginRight, marginTop } from './types'

export const useMarginHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()
  const onDispatch = (selectedElement: ISelectedElement, newProps: LayoutElementPropsStyles) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }
  const onChangemarginLeft = ({ value }: { value: typeof marginLeft[number] | null }) => {
    if (selectedElement && value != null) {
      const newProps: LayoutElementPropsStyles = {
        ...(selectedElementProps as LayoutElementPropsStyles),
      }
      newProps.constaProps = { ...newProps.constaProps }

      newProps.baseProps = {
        ...newProps.baseProps,
        margin: { ...(newProps.baseProps?.margin ?? {}), marginLeft: value },
      }
      const prevPadding = newProps.baseProps?.padding
        ? Object.values(newProps.baseProps.padding).join(' ')
        : ''
      const prevMargin = newProps.baseProps?.margin
        ? Object.values({ ...newProps.baseProps.margin, marginLeft: '' }).join(' ')
        : ''
      newProps.className = `${prevPadding} ${prevMargin} ${value}`

      onDispatch(selectedElement, newProps)
    }
  }
  const onChangemarginRight = ({ value }: { value: typeof marginRight[number] | null }) => {
    if (selectedElement && value != null) {
      const newProps: LayoutElementPropsStyles = {
        ...(selectedElementProps as LayoutElementPropsStyles),
      }
      newProps.constaProps = { ...newProps.constaProps }

      newProps.baseProps = {
        ...newProps.baseProps,
        margin: { ...(newProps.baseProps?.margin ?? {}), marginRight: value },
      }
      const prevPadding = newProps.baseProps?.padding
        ? Object.values(newProps.baseProps.padding).join(' ')
        : ''
      const prevMargin = newProps.baseProps?.margin
        ? Object.values({ ...newProps.baseProps.margin, marginRight: '' }).join(' ')
        : ''
      newProps.className = `${prevPadding} ${prevMargin}  ${value}`
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangemarginTop = ({ value }: { value: typeof marginTop[number] | null }) => {
    if (selectedElement && value != null) {
      const newProps: LayoutElementPropsStyles = {
        ...(selectedElementProps as LayoutElementPropsStyles),
      }
      newProps.constaProps = { ...newProps.constaProps }

      newProps.baseProps = {
        ...newProps.baseProps,
        margin: { ...(newProps.baseProps?.margin ?? {}), marginTop: value },
      }
      const prevPadding = newProps.baseProps?.padding
        ? Object.values(newProps.baseProps.padding).join(' ')
        : ''
      const prevMargin = newProps.baseProps?.margin
        ? Object.values({ ...newProps.baseProps.margin, marginTop: '' }).join(' ')
        : ''
      newProps.className = `${prevPadding} ${prevMargin}  ${value}`
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangemarginBottom = ({ value }: { value: typeof marginBottom[number] | null }) => {
    if (selectedElement && value != null) {
      const newProps: LayoutElementPropsStyles = {
        ...(selectedElementProps as LayoutElementPropsStyles),
      }
      newProps.constaProps = { ...newProps.constaProps }

      newProps.baseProps = {
        ...newProps.baseProps,
        margin: { ...(newProps.baseProps?.margin ?? {}), marginBottom: value },
      }
      const prevPadding = newProps.baseProps?.padding
        ? Object.values(newProps.baseProps.padding).join(' ')
        : ''
      const prevMargin = newProps.baseProps?.margin
        ? Object.values({ ...newProps.baseProps.margin, marginBottom: '' }).join(' ')
        : ''
      newProps.className = `${prevPadding} ${prevMargin}  ${value}`
      onDispatch(selectedElement, newProps)
    }
  }
  return {
    onChangemarginBottom,
    onChangemarginLeft,
    onChangemarginRight,
    onChangemarginTop,
    marginProps: selectedElementProps?.baseProps?.margin,
  }
}
