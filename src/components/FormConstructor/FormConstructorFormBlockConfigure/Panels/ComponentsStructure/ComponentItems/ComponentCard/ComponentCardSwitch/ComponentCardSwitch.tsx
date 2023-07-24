import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { useAppDispatch, setDraggableElement } from '../../../../../../store'
import { IComponetCardElement } from '../types'
import { IFormElementSwitch, FormElementTypes } from '../../../../../../coreTypes'
export const ComponentCardSwitch: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newSwitch: IFormElementSwitch = {
      id: uuid(),
      type: FormElementTypes.Switch,
      props: {
        size: 'm',
        view: 'primary',
        align: 'center',
        label: 'Это переключатель',
        className: '',
        baseProps: {},
      },
    }
    dispatch(setDraggableElement({ element: newSwitch }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
