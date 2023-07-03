import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import {
  formConstructorSlice,
  FormElementTypes,
  IFormElementCheckbox,
} from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { usePagesSelector } from '../../../../../../store/pagesOfLayout'

export const ComponentCardCheckbox: FC<IComponetCardElement> = ({ name }) => {
  const pages = usePagesSelector(state => state.pagesOfLayout.pages)

  const activePage = pages.find(active => active.isActive === true)

  const dispatch = useDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newCheckbox: IFormElementCheckbox = {
      id: uuid(),
      type: FormElementTypes.Checkbox,
      page: activePage?.name,
      props: {
        checked: undefined,
        size: 's',
        view: 'primary',
        align: 'center',
        disabled: false,
        label: 'Checkbox',
        className: '',
        baseProps: {},
      },
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newCheckbox }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
