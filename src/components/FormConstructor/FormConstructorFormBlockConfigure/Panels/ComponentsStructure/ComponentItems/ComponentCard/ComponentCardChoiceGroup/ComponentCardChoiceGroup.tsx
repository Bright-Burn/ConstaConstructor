import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, FormElementTypes } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementChoiceGroup } from '../../../../../../store/formElements/ChoiceGroupTypes'
import { Item } from '../../../../Settings/ChoiceGroupSettings/types'
import { IconCamera } from '@consta/icons/IconCamera'
import { IconCopy } from '@consta/icons/IconCopy'

export const ComponentCardChoiceGroup: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const items: Item[] = [
      {
        label: 'fdsffsdf',
        icon: IconCamera,
        disabled: false,
      },
      {
        label: '133323',
        icon: IconCamera,
        disabled: true,
      },
      {
        label: '55555',
        icon: IconCopy,
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
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newChoiceGroup }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
