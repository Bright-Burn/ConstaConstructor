import type {
  BrandTextFieldProps,
  ISelectedElement,
  TextFieldElement,
  TextFieldProps,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (
  selectedElementProps: TextFieldProps,
  selectedElement: TextFieldElement,
) => {
  const dispatch = useAppDispatch()

  const onChangeTextField = (propsName: keyof TextFieldProps) => (value: string | null) => {
    const newProps: BrandTextFieldProps = {
      props: { ...selectedElementProps, [propsName]: value },
      type: 'TextField',
    }

    onDispatch(selectedElement, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof TextFieldProps) => (check: React.ChangeEvent<HTMLInputElement>) => {
      const checked = check.target.checked
      const newProps: BrandTextFieldProps = {
        props: { ...selectedElementProps, [propsName]: checked },
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

      onDispatch(selectedElement, newProps)
    }
  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandTextFieldProps) => {
    dispatch(setInstanceProps(selectedElement.elementId, newProps))
  }
  return {
    onChangeTextField,
    onChangeSwitch,
    itemsProps: {
      caption: selectedElementProps.caption,
      disabled: selectedElementProps.disabled,
      form: selectedElementProps.form,
      incrementButtons: selectedElementProps.incrementButtons,
      label: selectedElementProps.label,
      labelPosition: selectedElementProps.labelPosition,
      max: selectedElementProps.max,
      maxLength: selectedElementProps.maxLength,
      maxRows: selectedElementProps.maxRows,
      min: selectedElementProps.min,
      minRows: selectedElementProps.minRows,
      placeholder: selectedElementProps.placeholder,
      size: selectedElementProps.size,
      required: selectedElementProps.required,
      rows: selectedElementProps.rows,
      status: selectedElementProps.status,
      step: selectedElementProps.step,
      type: selectedElementProps.type,
      value: selectedElementProps.value,
      view: selectedElementProps.view,
      withClearButton: selectedElementProps.withClearButton,
    },
  }
}
