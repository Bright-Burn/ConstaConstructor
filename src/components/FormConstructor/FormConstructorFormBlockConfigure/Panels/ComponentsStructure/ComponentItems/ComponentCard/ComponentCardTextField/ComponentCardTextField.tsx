import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormElementDictTypes, IFormElementTextField } from '../../../../../../coreTypes'
import { IComponetCardElement } from '../types'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import TextFieldImage from '@consta/uikit/__internal__/src/uiKit/components/ComponentsGridWithData/data/images/TextFieldImage'
import styles from '../styles.module.css'

export const ComponentCardTextField: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newTextField: IFormElementTextField = {
      id: uuid(),
      type: FormElementDictTypes.TextField,
      props: {
        props: {
          type: 'text',
          width: 'default',
          form: 'default',
          size: 'm',
          view: 'default',
          caption: 'Подпись',
          label: 'Заголовок',
          labelPosition: 'top',
          maxLength: 200,
          placeholder: 'Подсказка в поле',
          step: '1',
          min: '0',
          max: '200',
          className: '',
          baseProps: {},
        },
        type: 'TextField',
      },
    }
    dispatch(setDraggableElement({ element: newTextField }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <TextFieldImage />
    </div>
  )
}
