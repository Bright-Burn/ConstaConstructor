import { ISelectedElement, LayoutElementPropsStyles } from '../../../../coreTypes'
import { paddingsBottom, paddingsLeft, paddingsRight, paddingsTop } from './types'
import {
  setSelectedElement,
  useAppDispatch,
  useAppFormConstructorSelector,
  useAppSelector,
} from '../../../../store'

const getUpdatedProps = (
  selectedElementProps: LayoutElementPropsStyles,
  value: string | undefined,
  direction: 'paddingLeft' | 'paddingRight' | 'paddingTop' | 'paddingBottom',
): LayoutElementPropsStyles => {
  const props = {
    ...selectedElementProps,
  }
  props.constaProps = { ...props.constaProps }
  props.baseProps = {
    ...props.baseProps,
    padding: { ...(props.baseProps?.padding ?? {}), [direction]: value },
  }
  const prevMargin = props.baseProps?.margin ? Object.values(props.baseProps.margin).join(' ') : ''
  const prevPadding = props.baseProps?.padding
    ? Object.values({ ...props.baseProps.padding, [direction]: '' }).join(' ')
    : ''
  props.className = `${prevPadding} ${prevMargin} ${value}`

  return props
}

export const usePaddingHandlers = () => {
  const { selectedElementProps, selectedElement } =
    useAppFormConstructorSelector<LayoutElementPropsStyles>()

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
      onDispatch(selectedElement, getUpdatedProps(selectedElementProps, value, 'paddingLeft'))
    }
  }
  const onChangePaddingRight = ({ value }: { value: typeof paddingsRight[number] | null }) => {
    if (selectedElement && value != null) {
      onDispatch(selectedElement, getUpdatedProps(selectedElementProps, value, 'paddingRight'))
    }
  }
  const onChangePaddingTop = ({ value }: { value: typeof paddingsTop[number] | null }) => {
    if (selectedElement && value != null) {
      onDispatch(selectedElement, getUpdatedProps(selectedElementProps, value, 'paddingTop'))
    }
  }
  const onChangePaddingBottom = ({ value }: { value: typeof paddingsBottom[number] | null }) => {
    if (selectedElement && value != null) {
      onDispatch(selectedElement, getUpdatedProps(selectedElementProps, value, 'paddingTop'))
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
