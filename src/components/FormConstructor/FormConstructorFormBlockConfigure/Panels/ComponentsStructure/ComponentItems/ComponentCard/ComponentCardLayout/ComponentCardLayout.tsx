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
import { IconDraggable } from '@consta/icons/IconDraggable'
import { IconQuestion } from '@consta/icons/IconQuestion'

export const ComponentCardLayout: FC<IComponetCardElement> = ({ name }) => {
  const [isOuter, setIsOuter] = useState<boolean>(false)
  const dispatch = useDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const layoutElement: ILayoutElement = {
      id: uuid(),
      type: FormGroupsTypes.Layout,
      isOuter: isOuter,
      props: {
        constaProps: {
          flex: 1,
          direction: 'row',
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
      <IconDraggable size='xs' className={`${styles.cardIconDraggable}`} />
      <Text>{name}</Text>
      <Switch
        className='m-l-s'
        label={isOuter ? 'Out' : 'In'}
        checked={isOuter}
        view={'ghost'}
        size={'s'}
        onChange={onChange}
      />
      <IconQuestion size='xs' className={`${styles.cardIconQuest}`} />
    </div>
  )
}
