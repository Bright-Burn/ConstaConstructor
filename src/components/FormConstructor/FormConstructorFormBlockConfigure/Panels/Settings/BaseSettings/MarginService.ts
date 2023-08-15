import { ISelectedElement, LayoutElementPropsStyles } from '../../../../coreTypes'
import { marginBottom, marginLeft, marginRight, marginTop } from './types'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'
import { getSelectedElementProps } from '../../../../store/formElements'

const getUpdatedProps = (
  selectedElementProps: LayoutElementPropsStyles,
  value: string | undefined,
  direction: 'marginLeft' | 'marginRight' | 'marginTop' | 'marginBottom',
): LayoutElementPropsStyles => {
  const props = {
    ...selectedElementProps,
  }
  props.constaProps = { ...props.constaProps }

  props.baseProps = {
    ...props.baseProps,
    margin: { ...(props.baseProps?.margin ?? {}), [direction]: value },
  }
  const prevPadding = props.baseProps?.padding
    ? Object.values(props.baseProps.padding).join(' ')
    : ''
  const prevMargin = props.baseProps?.margin
    ? Object.values({ ...props.baseProps.margin, [direction]: '' }).join(' ')
    : ''
  props.className = `${prevPadding} ${prevMargin} ${value}`

  return props
}

export const useMarginHandlers = () => {
  const { selectedElement } = useAppSelector(state => state.formConstructor)
  const { selectedElementProps } = useAppSelector(getSelectedElementProps<LayoutElementPropsStyles>)
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
  const onChangemarginLeft = ({ value }: { value: typeof marginLeft[number] | null }) => {
    if (selectedElement && value != null) {
      onDispatch(selectedElement, getUpdatedProps(selectedElementProps, value, 'marginLeft'))
    }
  }
  const onChangemarginRight = ({ value }: { value: typeof marginRight[number] | null }) => {
    if (selectedElement && value != null) {
      onDispatch(selectedElement, getUpdatedProps(selectedElementProps, value, 'marginRight'))
    }
  }
  const onChangemarginTop = ({ value }: { value: typeof marginTop[number] | null }) => {
    if (selectedElement && value != null) {
      onDispatch(selectedElement, getUpdatedProps(selectedElementProps, value, 'marginTop'))
    }
  }
  const onChangemarginBottom = ({ value }: { value: typeof marginBottom[number] | null }) => {
    if (selectedElement && value != null) {
      onDispatch(selectedElement, getUpdatedProps(selectedElementProps, value, 'marginBottom'))
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
