import type {
  BrandTextFieldProps,
  IselectedView,
  TextFieldElement,
  TextFieldProps,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (
  selectedViewProps: TextFieldProps,
  selectedView: TextFieldElement,
) => {
  const dispatch = useAppDispatch()

  const onChangeTextField = (propsName: keyof TextFieldProps) => (value: string | null) => {
    const newProps: BrandTextFieldProps = {
      props: { ...selectedViewProps, [propsName]: value },
      type: 'TextField',
    }

    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof TextFieldProps) => (check: React.ChangeEvent<HTMLInputElement>) => {
      const checked = check.target.checked
      const newProps: BrandTextFieldProps = {
        props: { ...selectedViewProps, [propsName]: checked },
        type: 'TextField',
      }
      if (propsName === 'label' && checked) {
        newProps.props.label = 'Заголовок'
      }
      if (propsName === 'caption' && checked) {
        newProps.props.caption = 'Подпись'
      }
      if (propsName === 'maxLength' && checked) {
        newProps.props.maxLength = 1
      }

      onDispatch(selectedView, newProps)
    }
  const onDispatch = (selectedView: IselectedView, newProps: BrandTextFieldProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }
  return {
    onChangeTextField,
    onChangeSwitch,
    itemsProps: {
      caption: selectedViewProps.caption,
      disabled: selectedViewProps.disabled,
      form: selectedViewProps.form,
      incrementButtons: selectedViewProps.incrementButtons,
      label: selectedViewProps.label,
      labelPosition: selectedViewProps.labelPosition,
      max: selectedViewProps.max,
      maxLength: selectedViewProps.maxLength,
      maxRows: selectedViewProps.maxRows,
      min: selectedViewProps.min,
      minRows: selectedViewProps.minRows,
      placeholder: selectedViewProps.placeholder,
      size: selectedViewProps.size,
      required: selectedViewProps.required,
      rows: selectedViewProps.rows,
      status: selectedViewProps.status,
      step: selectedViewProps.step,
      type: selectedViewProps.type,
      value: selectedViewProps.value,
      view: selectedViewProps.view,
      withClearButton: selectedViewProps.withClearButton,
    },
  }
}
