import { DataTimeProps, ISelectedElement, BrandDataTimeProps, DataTimeElement } from '../../../../coreTypes'
import { DateTimePropType, DateTimePropView } from '@consta/uikit/DateTime'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'

export const useItemsHandlers = (selectedElementProps: DataTimeProps, selectedElement: DataTimeElement) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedElement: DataTimeElement, newProps: BrandDataTimeProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }
  const onChangeType = ({ value }: { value: DateTimePropType | null }) => {
    if (selectedElement && value) {
      const newProps: BrandDataTimeProps = {
        props: selectedElementProps,
        type: 'DataTime',
      }
      newProps.props.type = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeView = ({ value }: { value: DateTimePropView | null }) => {
    if (selectedElement && value) {
      const newProps: BrandDataTimeProps = {
        props: selectedElementProps,
        type: 'DataTime',
      }
      newProps.props.view = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeMinDate = ({ value }: { value: Date | null }) => {
    if (selectedElement && value) {
      const newProps: BrandDataTimeProps = {
        props: selectedElementProps,
        type: 'DataTime',
      }
      newProps.props.minDate = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeMaxDate = ({ value }: { value: Date | null }) => {
    if (selectedElement && value) {
      const newProps: BrandDataTimeProps = {
        props: selectedElementProps,
        type: 'DataTime',
      }
      newProps.props.maxDate = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeMultiplicityHours = ({ value }: { value: string | null }) => {
    if (selectedElement && value) {
      const newProps: BrandDataTimeProps = {
        props: selectedElementProps,
        type: 'DataTime',
      }
      newProps.props.multiplicityHours = +value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeMultiplicityMinutes = ({ value }: { value: string | null }) => {
    if (selectedElement && value) {
      const newProps: BrandDataTimeProps = {
        props: selectedElementProps,
        type: 'DataTime',
      }
      newProps.props.multiplicityMinutes = +value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeMultiplicitySeconds = ({ value }: { value: string | null }) => {
    if (selectedElement && value) {
      const newProps: BrandDataTimeProps = {
        props: selectedElementProps,
        type: 'DataTime',
      }
      newProps.props.multiplicitySeconds = +value
      onDispatch(selectedElement, newProps)
    }
  }
  return {
    onChangeMultiplicityHours,
    onChangeMultiplicityMinutes,
    onChangeMultiplicitySeconds,
    onChangeType,
    onChangeView,
    onChangeMinDate,
    onChangeMaxDate,
    itemsProps: {
      type: selectedElementProps.type,
      view: selectedElementProps.view,
      minDate: selectedElementProps.minDate,
      maxDate: selectedElementProps.maxDate,
      multiplicityHours: selectedElementProps.multiplicityHours,
      multiplicityMinutes: selectedElementProps.multiplicityMinutes,
      multiplicitySeconds: selectedElementProps.multiplicitySeconds,
    },
  }
}
