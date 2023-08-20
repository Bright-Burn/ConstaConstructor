import {
  BrandDatePickerProps,
  DatePickerElement,
  DatePickerProps,
  ISelectedElement,
} from '../../../../coreTypes'
import {
  DatePickerPropDateTimeView,
  DatePickerPropDropdownForm,
  DatePickerPropType,
} from '@consta/uikit/DatePicker'
import { TextFieldPropSize, TextFieldPropStatus, TextFieldPropView } from '@consta/uikit/TextField'
import { PropForm } from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (
  selectedElementProps: DatePickerProps,
  selectedElement: DatePickerElement,
) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandDatePickerProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }
  const onChangeType = (value: DatePickerPropType | null) => {
    if (value) {
      const newProps: BrandDatePickerProps = {
        props: { ...selectedElementProps },
        type: 'DatePicker',
      }
      newProps.props.type = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeForm = (value: PropForm | null) => {
    if (value) {
      const newProps: BrandDatePickerProps = {
        props: { ...selectedElementProps },
        type: 'DatePicker',
      }
      newProps.props.form = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeStatus = (value: TextFieldPropStatus | null) => {
    if (value) {
      const newProps: BrandDatePickerProps = {
        props: { ...selectedElementProps },
        type: 'DatePicker',
      }
      newProps.props.status = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeLabelPosition = (value: 'top' | 'left' | null) => {
    if (value) {
      const newProps: BrandDatePickerProps = {
        props: { ...selectedElementProps },
        type: 'DatePicker',
      }
      newProps.props.labelPosition = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeSize = (value: TextFieldPropSize | null) => {
    if (value) {
      const newProps: BrandDatePickerProps = {
        props: { ...selectedElementProps },
        type: 'DatePicker',
      }
      newProps.props.size = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeView = (value: TextFieldPropView | null) => {
    if (value) {
      const newProps: BrandDatePickerProps = {
        props: { ...selectedElementProps },
        type: 'DatePicker',
      }
      newProps.props.view = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeMinDate = ({ value }: { value: Date | null }) => {
    if (value) {
      const newProps: BrandDatePickerProps = {
        props: { ...selectedElementProps },
        type: 'DatePicker',
      }
      newProps.props.minDate = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeMaxDate = ({ value }: { value: Date | null }) => {
    if (value) {
      const newProps: BrandDatePickerProps = {
        props: { ...selectedElementProps },
        type: 'DatePicker',
      }
      newProps.props.maxDate = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeDateTimeView = (value: DatePickerPropDateTimeView | null) => {
    if (value) {
      const newProps: BrandDatePickerProps = {
        props: { ...selectedElementProps },
        type: 'DatePicker',
      }
      newProps.props.dateTimeView = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeDropdownForm = (value: DatePickerPropDropdownForm | null) => {
    if (value) {
      const newProps: BrandDatePickerProps = {
        props: { ...selectedElementProps },
        type: 'DatePicker',
      }
      newProps.props.dropdownForm = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeField =
    (propsName: keyof DatePickerProps) =>
    ({ value }: { value: string | null }) => {
      const newProps: BrandDatePickerProps = {
        props: { ...selectedElementProps },
        type: 'DatePicker',
      }
      // @ts-ignore
      newProps.props[propsName] = value || ''
      onDispatch(selectedElement, newProps)
    }
  const onChangeSwitch =
    (propsName: keyof DatePickerProps) =>
    ({ checked }: { checked: boolean }) => {
      const newProps: BrandDatePickerProps = {
        props: { ...selectedElementProps },
        type: 'DatePicker',
      }
      // @ts-ignore
      newProps.props[propsName] = checked
      onDispatch(selectedElement, newProps)
    }
  return {
    onChangeType,
    onChangeForm,
    onChangeStatus,
    onChangeLabelPosition,
    onChangeSize,
    onChangeView,
    onChangeMinDate,
    onChangeMaxDate,
    onChangeDateTimeView,
    onChangeDropdownForm,
    onChangeField,
    onChangeSwitch,
    itemsProps: {
      type: selectedElementProps.type,
      form: selectedElementProps.form,
      status: selectedElementProps.status,
      withClearButton: selectedElementProps.withClearButton,
      withAdditionalControls: selectedElementProps.withAdditionalControls,
      label: selectedElementProps.label,
      labelPosition: selectedElementProps.labelPosition,
      required: selectedElementProps.required,
      caption: selectedElementProps.caption,
      size: selectedElementProps.size,
      view: selectedElementProps.view,
      disabled: selectedElementProps.disabled,
      minDate: selectedElementProps.minDate,
      maxDate: selectedElementProps.maxDate,
      dateTimeView: selectedElementProps.dateTimeView,
      dropdownForm: selectedElementProps.dropdownForm,
    },
  }
}
