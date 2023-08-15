import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormElementDictTypes, IFormElementCheckbox } from '../../../../../../coreTypes'
import { IComponetCardElement } from '../types'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import CheckboxImage from '@consta/uikit/__internal__/src/uiKit/components/ComponentsGridWithData/data/images/CheckboxImage'
import styles from '../styles.module.css'

export const ComponentCardCheckbox: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newCheckbox: IFormElementCheckbox = {
      id: uuid(),
      type: FormElementDictTypes.Checkbox,
      props: {
        props: {
          checked: false,
          size: 's',
          view: 'primary',
          align: 'center',
          disabled: false,
          label: 'Checkbox',
          className: '',
          baseProps: {},
        },
        type: 'Checkbox',
      },
    }
    dispatch(setDraggableElement({ element: newCheckbox }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <CheckboxImage />
    </div>
  )
}
