import type { FC } from 'react'
import uuid from 'react-uuid'

import type { ILayoutElement } from '../../../../../../coreTypes'
import { FormGroupsDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

export const ComponentCardLayout: FC<IComponetCardElement> = ({ name, isOuter }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const layoutElement: ILayoutElement = {
      id: uuid(),
      type: FormGroupsDictTypes.Layout,
      isOuter: isOuter || false,
      order: 1,
      props: {
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
            borderStyle: 'hidden',
            borderWidth: 'thin',
          },
          className: '',
          baseProps: {},
        },
        type: 'Layout',
      },
    }
    dispatch(setDraggableElement({ element: layoutElement }))
  }
  const fullName = isOuter ? `${name} out` : `${name} in`
  return (
    <CardLabel
      label={fullName}
      isGroupIcon={true}
      onStartDragComponentCard={onStartDragComponentCard}
    />
  )
}
