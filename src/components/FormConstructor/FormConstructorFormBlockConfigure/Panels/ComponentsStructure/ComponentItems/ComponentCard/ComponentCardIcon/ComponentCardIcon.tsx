import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, FormElementTypes } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementIcon } from '../../../../../../store/formElements/iconTypes'
import { usePagesSelector } from '../../../../../../store/pagesOfLayout'

export const ComponentCardIcon: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const pages = usePagesSelector(state => state.pagesOfLayout.pages)

  const activePage = pages.find(active => active.isActive === true)

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newIcon: IFormElementIcon = {
      id: uuid(),
      type: FormElementTypes.Icon,
      page: activePage?.name,
      props: {
        view: 'primary',
        size: 'm',
        className: '',
        icons: 'IconAlert',
        baseProps: {},
      },
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newIcon }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
