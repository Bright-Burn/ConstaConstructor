import { DatePickerProps, ISelectedElement, PropForm } from '../../../../coreTypes'
import {
  DatePickerPropDateTimeView,
  DatePickerPropDropdownForm,
  DatePickerPropType,
} from '@consta/uikit/DatePicker'
import { TextFieldPropSize, TextFieldPropStatus, TextFieldPropView } from '@consta/uikit/TextField'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'
import { getSelectedElementProps } from '../../../../store/formElements'

export const useItemsHandlers = () => {
  const { selectedElement } = useAppSelector(state => state.formConstructor)
  const { selectedElementProps } = useAppSelector(getSelectedElementProps<DatePickerProps>)
  const dispatch = useAppDispatch()

  const onDispatch = (selectedElement: ISelectedElement, newProps: DatePickerProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }
  const onChangeType = (type: DatePickerPropType | null) => {
    if (selectedElement && type) {
      onDispatch(selectedElement, { ...selectedElementProps, type })
    }
  }
  const onChangeForm = (form: PropForm | null) => {
    if (selectedElement && form) {
      onDispatch(selectedElement, { ...selectedElementProps, form })
    }
  }
  const onChangeStatus = (status: TextFieldPropStatus | null) => {
    if (selectedElement && status) {
      onDispatch(selectedElement, { ...selectedElementProps, status })
    }
  }
  const onChangeLabelPosition = (labelPosition: 'top' | 'left' | null) => {
    if (selectedElement && labelPosition) {
      onDispatch(selectedElement, { ...selectedElementProps, labelPosition })
    }
  }
  const onChangeSize = (size: TextFieldPropSize | null) => {
    if (selectedElement && size) {
      onDispatch(selectedElement, { ...selectedElementProps, size })
    }
  }
  const onChangeView = (view: TextFieldPropView | null) => {
    if (selectedElement && view) {
      onDispatch(selectedElement, { ...selectedElementProps, view })
    }
  }
  const onChangeMinDate = ({ value }: { value: Date | null }) => {
    if (selectedElement && value) {
      onDispatch(selectedElement, { ...selectedElementProps, minDate: value })
    }
  }
  const onChangeMaxDate = ({ value }: { value: Date | null }) => {
    if (selectedElement && value) {
      const newProps: DatePickerProps = {
        ...selectedElementProps,
      }
      newProps.maxDate = value
      onDispatch(selectedElement, { ...selectedElementProps, maxDate: value })
    }
  }
  const onChangeDateTimeView = (dateTimeView: DatePickerPropDateTimeView | null) => {
    if (selectedElement && dateTimeView) {
      onDispatch(selectedElement, { ...selectedElementProps, dateTimeView })
    }
  }
  const onChangeDropdownForm = (dropdownForm: DatePickerPropDropdownForm | null) => {
    if (selectedElement && dropdownForm) {
      onDispatch(selectedElement, { ...selectedElementProps, dropdownForm })
    }
  }
  const onChangeField =
    (propsName: keyof DatePickerProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        onDispatch(selectedElement, { ...selectedElementProps, [propsName]: value || '' })
      }
    }
  const onChangeSwitch =
    (propsName: keyof DatePickerProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        onDispatch(selectedElement, { ...selectedElementProps, [propsName]: checked })
      }
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
