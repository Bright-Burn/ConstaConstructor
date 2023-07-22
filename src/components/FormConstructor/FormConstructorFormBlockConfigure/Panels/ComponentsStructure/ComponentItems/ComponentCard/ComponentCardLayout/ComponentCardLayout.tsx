import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'
import { FC, useState } from 'react'
import uuid from 'react-uuid'
import {
  FormGroupsTypes,
  ILayoutElement,
  useAppDispatch,
} from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import styles from './styles.module.css'
import { setDraggableElement } from '../../../../../../store'

export const ComponentCardLayout: FC<IComponetCardElement> = ({ name }) => {
  const [isOuter, setIsOuter] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const layoutElement: ILayoutElement = {
      id: uuid(),
      type: FormGroupsTypes.Layout,
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
    dispatch(setDraggableElement({ element: layoutElement }))
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
