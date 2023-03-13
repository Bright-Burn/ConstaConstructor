import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormElementTypes, IFormElementBadge } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'

export const ComponentCardBadge: FC<IComponetCardElement> = ({ name }) => {
  const onStartDragComponentCard = (event: React.DragEvent) => {
    /// Устанвливаем базовые настройки для badgeElement

    const newBadge: IFormElementBadge = {
      id: uuid(),
      type: FormElementTypes.Badge,
      props: {
        label: 'Badge',
        form: 'default',
        size: 's',
        status: 'success',
        view: 'filled',
        className: '',
        baseProps: {},
      },
    }

    event.dataTransfer.setData('element', JSON.stringify(newBadge))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
