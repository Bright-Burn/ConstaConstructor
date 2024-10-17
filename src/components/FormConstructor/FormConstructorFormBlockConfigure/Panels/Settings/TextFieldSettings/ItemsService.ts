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

  const onChangeTextField =
    (propsName: keyof TextFieldProps['uiLibProps']) => (value: string | null) => {
      const newProps: BrandTextFieldProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: {
            ...selectedViewProps.uiLibProps,
            [propsName]: value,
          },
        },
        type: 'TextField',
      }

      onDispatch(selectedView, newProps)
    }

  const onChangeSwitch =
    (propsName: keyof TextFieldProps['uiLibProps']) =>
    (check: React.ChangeEvent<HTMLInputElement>) => {
      const checked = check.target.checked
      const newProps: BrandTextFieldProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: {
            ...selectedViewProps.uiLibProps,
            [propsName]: checked,
          },
        },
        type: 'TextField',
      }
      if (propsName === 'label' && checked) {
        newProps.props.uiLibProps.label = 'Заголовок'
      }
      if (propsName === 'caption' && checked) {
        newProps.props.uiLibProps.caption = 'Подпись'
      }
      if (propsName === 'maxLength') {
        if (checked) {
          newProps.props.uiLibProps.maxLength = 1
        } else {
          newProps.props.uiLibProps.maxLength = undefined
        }
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
      caption: selectedViewProps.uiLibProps.caption,
      disabled: selectedViewProps.uiLibProps.disabled,
      form: selectedViewProps.uiLibProps.form,
      incrementButtons: selectedViewProps.uiLibProps.incrementButtons,
      label: selectedViewProps.uiLibProps.label,
      labelPosition: selectedViewProps.uiLibProps.labelPosition,
      max: selectedViewProps.uiLibProps.max,
      maxLength: selectedViewProps.uiLibProps.maxLength,
      maxRows: selectedViewProps.uiLibProps.maxRows,
      min: selectedViewProps.uiLibProps.min,
      minRows: selectedViewProps.uiLibProps.minRows,
      placeholder: selectedViewProps.uiLibProps.placeholder,
      size: selectedViewProps.uiLibProps.size,
      required: selectedViewProps.uiLibProps.required,
      rows: selectedViewProps.uiLibProps.rows,
      status: selectedViewProps.uiLibProps.status,
      step: selectedViewProps.uiLibProps.step,
      type: selectedViewProps.uiLibProps.type,
      value: selectedViewProps.uiLibProps.value,
      view: selectedViewProps.uiLibProps.view,
      withClearButton: selectedViewProps.uiLibProps.withClearButton,
    },
  }
}
