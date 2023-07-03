import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, FormElementTypes } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementDataTime } from '../../../../../../store/formElements/dataTimeTypes'
import { usePagesSelector } from '../../../../../../store/pagesOfLayout'

export const ComponentCardDataTime: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const pages = usePagesSelector(state => state.pagesOfLayout.pages)

  const activePage = pages.find(active => active.isActive === true)

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newDataTime: IFormElementDataTime = {
      id: uuid(),
      type: FormElementTypes.DataTime,
      page: activePage?.name,
      props: {
        type: 'date',
        view: 'classic',
        className: '',
        baseProps: {},
        multiplicityHours: 1,
        multiplicityMinutes: 1,
        multiplicitySeconds: 1,
      },
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newDataTime }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
