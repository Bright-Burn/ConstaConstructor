import type { DateTimePropType, DateTimePropView } from '@consta/uikit/DateTime'

import type { BrandDateTimeProps, DataTimeElement, DateTimeProps } from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (
  selectedViewProps: DateTimeProps,
  selectedView: DataTimeElement,
) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedView: DataTimeElement, newProps: BrandDateTimeProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  const onChangeItemsCount = (value: string | null) => {
    const newProps: BrandDateTimeProps = {
      props: { ...selectedViewProps, uiLibProps: { ...selectedViewProps.uiLibProps } },
      type: 'DataTime',
    }
    let itemsProps: Date[] = newProps.props.uiLibProps.events
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
    newProps.props.uiLibProps.events = itemsProps
    onDispatch(selectedView, newProps)
  }

  const onChangeField = (
    value: DateTimePropView | DateTimePropType | Date | null | number | Date[],
    field: keyof DateTimeProps['uiLibProps'],
  ) => {
    const newProps: BrandDateTimeProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          [field]: value,
        },
      },
      type: 'DataTime',
    }
    onDispatch(selectedView, newProps)
  }

  return {
    onChangeItemsCount,
    onChangeField,
    itemsProps: {
      type: selectedViewProps.uiLibProps.type,
      view: selectedViewProps.uiLibProps.view,
      minDate: selectedViewProps.uiLibProps.minDate,
      maxDate: selectedViewProps.uiLibProps.maxDate,
      multiplicityHours: selectedViewProps.uiLibProps.multiplicityHours,
      multiplicityMinutes: selectedViewProps.uiLibProps.multiplicityMinutes,
      multiplicitySeconds: selectedViewProps.uiLibProps.multiplicitySeconds,
      events: selectedViewProps.uiLibProps.events,
    },
  }
}
