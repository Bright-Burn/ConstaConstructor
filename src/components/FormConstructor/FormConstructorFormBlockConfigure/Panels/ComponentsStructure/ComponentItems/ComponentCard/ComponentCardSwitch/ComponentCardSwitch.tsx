import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, FormElementTypes } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementSwitch } from '../../../../../../store/formElements/SwitchTypes'
import { usePagesSelector } from '../../../../../../store/pagesOfLayout'

export const ComponentCardSwitch: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const pages = usePagesSelector(state => state.pagesOfLayout.pages)

  const activePage = pages.find(active => active.isActive === true)

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newSwitch: IFormElementSwitch = {
      id: uuid(),
      type: FormElementTypes.Switch,
      page: activePage?.name,
      props: {
        size: 'm',
        view: 'primary',
        align: 'center',
        label: 'Это переключатель',
        className: '',
        baseProps: {},
      },
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newSwitch }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
