import type { DateTimePropType, DateTimePropView } from '@consta/uikit/DateTime'

import type { BrandDataTimeProps, DataTimeElement, DataTimeProps } from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (
  selectedViewProps: DataTimeProps,
  selectedView: DataTimeElement,
) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedView: DataTimeElement, newProps: BrandDataTimeProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  const onChangeItemsCount = (value: string | null) => {
    const newProps: BrandDataTimeProps = {
      props: { ...selectedViewProps },
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
    onDispatch(selectedView, newProps)
  }

  const onChangeField = (
    value: DateTimePropView | DateTimePropType | Date | null | number | Date[],
    field: keyof DataTimeProps,
  ) => {
    const newProps: BrandDataTimeProps = {
      props: { ...selectedViewProps, [field]: value },
      type: 'DataTime',
    }
    onDispatch(selectedView, newProps)
  }

  return {
    onChangeItemsCount,
    onChangeField,
    itemsProps: {
      type: selectedViewProps.type,
      view: selectedViewProps.view,
      minDate: selectedViewProps.minDate,
      maxDate: selectedViewProps.maxDate,
      multiplicityHours: selectedViewProps.multiplicityHours,
      multiplicityMinutes: selectedViewProps.multiplicityMinutes,
      multiplicitySeconds: selectedViewProps.multiplicitySeconds,
      events: selectedViewProps.events,
    },
  }
}
