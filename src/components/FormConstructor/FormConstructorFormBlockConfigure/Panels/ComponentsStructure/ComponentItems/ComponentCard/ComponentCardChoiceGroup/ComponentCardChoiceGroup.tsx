import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormElementTypes, useAppDispatch } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementChoiceGroup } from '../../../../../../store/formElements/ChoiceGroupTypes'
import { Item } from '../../../../Settings/ChoiceGroupSettings/types'

import { setDraggableElement } from '../../../../../../store'
export const ComponentCardChoiceGroup: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const items: Item[] = [
      {
        label: 'Первый',
        disabled: false,
      },
      {
        label: 'Второй',
        disabled: true,
      },
      {
        label: 'Третий',
        disabled: false,
      },
    ]
    const newChoiceGroup: IFormElementChoiceGroup = {
      id: uuid(),
      type: FormElementTypes.ChoiceGroup,
      props: {
        size: 'm',
        name: 'ChoiceGroupExample',
        items: items,
        className: '',
        baseProps: {},
        onChange: () => {},
        getItemLabel: item => item.label,
      },
    }
    dispatch(setDraggableElement({ element: newChoiceGroup }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
