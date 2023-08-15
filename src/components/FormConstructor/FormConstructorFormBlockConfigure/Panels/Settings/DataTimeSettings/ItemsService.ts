import { DataTimeProps, ISelectedElement } from '../../../../coreTypes'
import { DateTimePropType, DateTimePropView } from '@consta/uikit/DateTime'
import {
  setSelectedElement,
  useAppDispatch,
  useAppFormConstructorSelector,
} from '../../../../store'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppFormConstructorSelector<DataTimeProps>()

  const dispatch = useAppDispatch()

  const onDispatch = (selectedElement: ISelectedElement, newProps: DataTimeProps) => {
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
      onDispatch(selectedElement, { ...selectedElementProps, type: value })
    }
  }
  const onChangeView = ({ value }: { value: DateTimePropView | null }) => {
    if (selectedElement && value) {
      onDispatch(selectedElement, { ...selectedElementProps, view: value })
    }
  }
  const onChangeMinDate = ({ value }: { value: Date | null }) => {
    if (selectedElement && value) {
      onDispatch(selectedElement, { ...selectedElementProps, minDate: value })
    }
  }
  const onChangeMaxDate = ({ value }: { value: Date | null }) => {
    if (selectedElement && value) {
      onDispatch(selectedElement, { ...selectedElementProps, maxDate: value })
    }
  }
  const onChangeMultiplicityHours = ({ value }: { value: string | null }) => {
    if (selectedElement && value) {
      onDispatch(selectedElement, { ...selectedElementProps, multiplicityHours: +value })
    }
  }
  const onChangeMultiplicityMinutes = ({ value }: { value: string | null }) => {
    if (selectedElement && value) {
      onDispatch(selectedElement, { ...selectedElementProps, multiplicityMinutes: +value })
    }
  }
  const onChangeMultiplicitySeconds = ({ value }: { value: string | null }) => {
    if (selectedElement && value) {
      onDispatch(selectedElement, { ...selectedElementProps, multiplicitySeconds: +value })
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
