import type { RadioPropAlign, RadioPropSize, RadioPropView } from '@consta/uikit/Radio'

import type {
  BrandRadioButtonProps,
  IselectedView,
  RadioButtonElement,
  RadioButtonProps,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (
  selectedViewProps: RadioButtonProps,
  selectedView: RadioButtonElement,
) => {
  const dispatch = useAppDispatch()

  const onDispatch = (selectedView: IselectedView, newProps: BrandRadioButtonProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  const onChangeView = (value: RadioPropView | null) => {
    if (value) {
      const newProps: BrandRadioButtonProps = {
        props: { ...selectedViewProps },
        type: 'RadioButton',
      }
      newProps.props.view = value
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeSize = (value: RadioPropSize | null) => {
    if (value) {
      const newProps: BrandRadioButtonProps = {
        props: { ...selectedViewProps },
        type: 'RadioButton',
      }
      newProps.props.size = value
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeAlign = (value: RadioPropAlign | null) => {
    if (value) {
      const newProps: BrandRadioButtonProps = {
        props: { ...selectedViewProps },
        type: 'RadioButton',
      }
      newProps.props.align = value
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeField = (propsName: keyof RadioButtonProps) => (value: string | null) => {
    const newProps: BrandRadioButtonProps = {
      props: {
        ...selectedViewProps,
        [propsName]: value,
      },
      type: 'RadioButton',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof RadioButtonProps) => (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandRadioButtonProps = {
        props: {
          ...selectedViewProps,
          [propsName]: checked,
        },
        type: 'RadioButton',
      }
      onDispatch(selectedView, newProps)
    }
  const onChangeChacked = (checked: boolean) => {
    const newProps: BrandRadioButtonProps = {
      props: { ...selectedViewProps },
      type: 'RadioButton',
    }
    newProps.props.checked = checked
    onDispatch(selectedView, newProps)
  }

  return {
    onChangeView,
    onChangeSize,
    onChangeAlign,
    onChangeField,
    onChangeSwitch,
    onChangeChacked,
    itemsProps: {
      checked: selectedViewProps.checked,
      size: selectedViewProps.size,
      view: selectedViewProps.view,
      align: selectedViewProps.align,
      label: selectedViewProps.label,
      disabled: selectedViewProps.disabled,
    },
  }
}
