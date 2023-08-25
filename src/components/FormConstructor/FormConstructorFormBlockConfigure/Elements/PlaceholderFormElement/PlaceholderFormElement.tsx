import { FC, useLayoutEffect, useState } from 'react'

import { Text } from '@consta/uikit/Text'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { IPlaceholderFormElement } from './types'
import { IFormElementPlaceholder, PlaceholderProps } from '../../../coreTypes'

import style from './styles.module.css'
import ImageSvg from './image.svg'
import { Button } from '@consta/uikit/Button'
import { SelectableLayerFitSpace } from '../../SelectableLayer/SelectableLayerFitSpace'

export const PlaceholderFormElement: FC<IPlaceholderFormElement> = ({ element }) => {
  const [placeholderProps, setPlaceholderProps] = useState<PlaceholderProps>()

  useLayoutEffect(() => {
    const placeholderFormElement = element as IFormElementPlaceholder
    setPlaceholderProps(placeholderFormElement.props)
  }, [element])

  return (
    <SelectableLayerFitSpace
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Placeholder}
    >
      <div className={style.container}>
        <img src={ImageSvg} />

        <Text
          view='primary'
          weight='semibold'
          size='2xl'
          align='center'
          className={style.primaryText}
        >
          Здесь пока ничего нет
        </Text>
        <Text
          view='secondary'
          weight='regular'
          size='m'
          align='center'
          className={style.secondaryText}
        >
          Создайте проект для начала работ
        </Text>

        <Button view='primary' size='m' label='Создать проект' className={style.button} />
      </div>
    </SelectableLayerFitSpace>
  )
}
