import type { DateTimePropType, DateTimePropView } from '@consta/uikit/DateTime'

import type { BrandDataTimeProps, DataTimeElement, DataTimeProps } from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (
  selectedElementProps: DataTimeProps,
  selectedElement: DataTimeElement,
) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedElement: DataTimeElement, newProps: BrandDataTimeProps) => {
    dispatch(setInstanceProps(selectedElement.elementId, newProps))
  }

  const onChangeItemsCount = (value: string | null) => {
    const newProps: BrandDataTimeProps = {
      props: { ...selectedElementProps },
      type: 'DataTime',
    }
    let itemsProps: Date[] = newProps.props.events
    const currentLength = itemsProps.length
    if (currentLength && Number(value) > currentLength) {
      for (let i = currentLength; i < Number(value); i++) {
        itemsProps = [...itemsProps, new Date()]
      }
    } else {
      for (let i = 0; i < currentLength - Number(value); i++) {
        itemsProps = [...itemsProps.slice(0, Number(value))]
      }
    }
    if (Number(value) === 1 && itemsProps.length === 0) {
      itemsProps = [...itemsProps, new Date()]
    }
    newProps.props.events = itemsProps
    onDispatch(selectedElement, newProps)
  }

  const onChangeField = (
    value: DateTimePropView | DateTimePropType | Date | null | number | Date[],
    field: keyof DataTimeProps,
  ) => {
    const newProps: BrandDataTimeProps = {
      props: { ...selectedElementProps, [field]: value },
      type: 'DataTime',
    }
    onDispatch(selectedElement, newProps)
  }

  return {
    onChangeItemsCount,
    onChangeField,
    itemsProps: {
      type: selectedElementProps.type,
      view: selectedElementProps.view,
      minDate: selectedElementProps.minDate,
      maxDate: selectedElementProps.maxDate,
      multiplicityHours: selectedElementProps.multiplicityHours,
      multiplicityMinutes: selectedElementProps.multiplicityMinutes,
      multiplicitySeconds: selectedElementProps.multiplicitySeconds,
      events: selectedElementProps.events,
    },
  }
}
