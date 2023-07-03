import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'
import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import {
  formConstructorSlice,
  FormGroupsTypes,
  ILayoutElement,
} from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import styles from './styles.module.css'
import { usePagesSelector } from '../../../../../../store/pagesOfLayout'

export const ComponentCardLayout: FC<IComponetCardElement> = ({ name }) => {
  const [isOuter, setIsOuter] = useState<boolean>(false)
  const dispatch = useDispatch()

  const pages = usePagesSelector(state => state.pagesOfLayout.pages)

  const activePage = pages.find(active => active.isActive === true)

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const layoutElement: ILayoutElement = {
      id: uuid(),
      type: FormGroupsTypes.Layout,
      page: activePage?.name,
      isOuter: isOuter,
      props: {
        constaProps: {
          flex: 1,
          direction: 'row',
          horizontalAlign: 'left',
          verticalAlign: 'top',
        },
        styles: {
          alignItems: 'normal',
          justifyContent: 'start',
        },
        className: '',
        baseProps: {},
      },
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: layoutElement }))
  }

  const onChange = () => {
    setIsOuter(!isOuter)
  }

  return (
    <div className={styles.cardLayout} draggable={true} onDragStart={onStartDragComponentCard}>
      <Text>{name}</Text>
      <Switch
        className='m-l-s'
        label={isOuter ? 'Out' : 'In'}
        checked={isOuter}
        view={'ghost'}
        size={'s'}
        onChange={onChange}
      />
    </div>
  )
}
