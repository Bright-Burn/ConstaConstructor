import type { FC } from 'react'
import { Header } from '@consta/uikit/Header'
import { IconHamburger } from '@consta/uikit/IconHamburger'
import { IconRing } from '@consta/uikit/IconRing'
import { IconSelect } from '@consta/uikit/IconSelect'
import { IconSun } from '@consta/uikit/IconSun'
import { Text } from '@consta/uikit/Text'
import { User } from '@consta/uikit/User'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayerFullWidth } from '../../SelectableLayer/SelectableLayerFullWidth'

import type { IHeaderCognitiveGeologist } from './types'

import style from './styles.module.css'

export const HeaderCognitiveGeologist: FC<IHeaderCognitiveGeologist> = ({ element }) => {
  return (
    <SelectableLayerFullWidth
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Badge}>
      <Header
        className={`container-row flex-grow-1 ${style.container}`}
        leftSide={
          <div className={style.headerLeft}>
            <IconHamburger view="secondary" />
            <Text size="m" weight="bold" className={style.headerLeftText}>
              Когнитивный геолог
            </Text>
          </div>
        }
        rightSide={
          <div className="container-row align-center">
            <IconSun size="m" view="secondary" />
            <IconRing size="m" view="secondary" className={style.userContainer} />
            <User
              name="Михаил Петров"
              info="Геолог"
              status="available"
              view="clear"
              iconRight={IconSelect}
              className={style.userContainer}
            />
          </div>
        }
      />
    </SelectableLayerFullWidth>
  )
}
