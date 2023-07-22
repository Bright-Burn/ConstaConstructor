import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import {
  FormElementTypes,
  IFormElementCheckbox,
  useAppDispatch,
} from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { setDraggableElement } from '../../../../../../store'
export const ComponentCardCheckbox: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newCheckbox: IFormElementCheckbox = {
      id: uuid(),
      type: FormElementTypes.Checkbox,
      props: {
        checked: false,
        size: 's',
        view: 'primary',
        align: 'center',
        disabled: false,
        label: 'Checkbox',
        className: '',
        baseProps: {},
      },
    }
    dispatch(setDraggableElement({ element: newCheckbox }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
