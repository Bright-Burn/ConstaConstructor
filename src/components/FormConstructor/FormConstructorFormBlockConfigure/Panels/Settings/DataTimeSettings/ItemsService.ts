import { useDispatch } from 'react-redux'
import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import { DataTimeProps } from '../../../../store/formElements/dataTimeTypes'
import { DateTimePropType, DateTimePropView } from '@consta/uikit/DateTime'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()
  const onDispatch = (selectedElement: ISelectedElement, newProps: DataTimeProps) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }
  const onChangeType = ({ value }: { value: DateTimePropType | null }) => {
    if (selectedElement && value) {
      const newProps: DataTimeProps = {
        ...(selectedElementProps as DataTimeProps),
      }
      newProps.type = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeView = ({ value }: { value: DateTimePropView | null }) => {
    if (selectedElement && value) {
      const newProps: DataTimeProps = {
        ...(selectedElementProps as DataTimeProps),
      }
      newProps.view = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeMinDate = ({ value }: { value: Date | null }) => {
    if (selectedElement && value) {
      const newProps: DataTimeProps = {
        ...(selectedElementProps as DataTimeProps),
      }
      newProps.minDate = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeMaxDate = ({ value }: { value: Date | null }) => {
    if (selectedElement && value) {
      const newProps: DataTimeProps = {
        ...(selectedElementProps as DataTimeProps),
      }
      newProps.maxDate = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeMultiplicityHours = ({ value }: { value: string | null }) => {
    if (selectedElement && value) {
      const newProps: DataTimeProps = {
        ...(selectedElementProps as DataTimeProps),
      }
      newProps.multiplicityHours = +value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeMultiplicityMinutes = ({ value }: { value: string | null }) => {
    if (selectedElement && value) {
      const newProps: DataTimeProps = {
        ...(selectedElementProps as DataTimeProps),
      }
      newProps.multiplicityMinutes = +value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeMultiplicitySeconds = ({ value }: { value: string | null }) => {
    if (selectedElement && value) {
      const newProps: DataTimeProps = {
        ...(selectedElementProps as DataTimeProps),
      }
      newProps.multiplicitySeconds = +value
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
      type: (selectedElementProps as DataTimeProps).type,
      view: (selectedElementProps as DataTimeProps).view,
      minDate: (selectedElementProps as DataTimeProps).minDate,
      maxDate: (selectedElementProps as DataTimeProps).maxDate,
      multiplicityHours: (selectedElementProps as DataTimeProps).multiplicityHours,
      multiplicityMinutes: (selectedElementProps as DataTimeProps).multiplicityMinutes,
      multiplicitySeconds: (selectedElementProps as DataTimeProps).multiplicitySeconds,
    },
  }
}
