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
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, view: value },
        },
        type: 'RadioButton',
      }
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeSize = (value: RadioPropSize | null) => {
    if (value) {
      const newProps: BrandRadioButtonProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, size: value },
        },
        type: 'RadioButton',
      }
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeAlign = (value: RadioPropAlign | null) => {
    if (value) {
      const newProps: BrandRadioButtonProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, align: value },
        },
        type: 'RadioButton',
      }
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeField =
    (propsName: keyof RadioButtonProps['uiLibProps']) => (value: string | null) => {
      const newProps: BrandRadioButtonProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: {
            ...selectedViewProps.uiLibProps,
            [propsName]: value,
          },
        },
        type: 'RadioButton',
      }
      onDispatch(selectedView, newProps)
    }

  const onChangeSwitch =
    (propsName: keyof RadioButtonProps['uiLibProps']) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const checked = event.target.checked
      const newProps: BrandRadioButtonProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: {
            ...selectedViewProps.uiLibProps,
            [propsName]: checked,
          },
        },
        type: 'RadioButton',
      }
      onDispatch(selectedView, newProps)
    }
  const onChangeChacked = (checked: boolean) => {
    const newProps: BrandRadioButtonProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, checked },
      },
      type: 'RadioButton',
    }
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
      checked: selectedViewProps.uiLibProps.checked,
      size: selectedViewProps.uiLibProps.size,
      view: selectedViewProps.uiLibProps.view,
      align: selectedViewProps.uiLibProps.align,
      label: selectedViewProps.uiLibProps.label,
      disabled: selectedViewProps.uiLibProps.disabled,
    },
  }
}
