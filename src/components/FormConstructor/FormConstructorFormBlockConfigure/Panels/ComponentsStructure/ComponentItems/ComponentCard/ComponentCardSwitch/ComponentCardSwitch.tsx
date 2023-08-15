import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { useAppDispatch, setDraggableElement } from '../../../../../../store'
import { IComponetCardElement } from '../types'
import { IFormElementSwitch, FormElementDictTypes } from '../../../../../../coreTypes'
import SwitchImage from '@consta/uikit/__internal__/src/uiKit/components/ComponentsGridWithData/data/images/SwitchImage'
import styles from '../styles.module.css'

export const ComponentCardSwitch: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newSwitch: IFormElementSwitch = {
      id: uuid(),
      type: FormElementDictTypes.Switch,
      props: {
        props: {
          size: 'm',
          view: 'primary',
          align: 'center',
          label: 'Это переключатель',
          className: '',
          baseProps: {},
        },
        type: 'Switch',
      },
    }
    dispatch(setDraggableElement({ element: newSwitch }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <SwitchImage />
    </div>
  )
}
