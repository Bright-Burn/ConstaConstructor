import { Header } from '@consta/uikit/Header'
import { IconRing } from '@consta/uikit/IconRing'
import { IconSun } from '@consta/uikit/IconSun'
import { IconSelect } from '@consta/uikit/IconSelect'
import { User } from '@consta/uikit/User'
import { FC } from 'react'
import { ElementTypes, FormElementTypes } from '../../../coreTypes'
import { SelectableLayerFullWidth } from '../../SelectableLayer/SelectableLayerFullWidth'
import { IHeaderCognitiveGeologist } from './types'
import style from './styles.module.css'
import { IconHamburger } from '@consta/uikit/IconHamburger'
import { Text } from '@consta/uikit/Text'

export const HeaderCognitiveGeologist: FC<IHeaderCognitiveGeologist> = ({ element }) => {
  return (
    <SelectableLayerFullWidth
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Badge}
    >
      <Header
        className={`container-row flex-grow-1 ${style.container}`}
        leftSide={
          <>
            <div className={style.headerLeft}>
              <IconHamburger view='secondary' />
              <Text size='m' weight='bold' className={style.headerLeftText}>
                Когнитивный геолог
              </Text>
            </div>
          </>
        }
        rightSide={
          <>
            <div className='container-row align-center'>
              <IconSun size='m' view='secondary' />
              <IconRing size='m' view='secondary' className={style.userContainer} />
              <User
                name='Михаил Петров'
                info='Геолог'
                status='available'
                view='clear'
                iconRight={IconSelect}
                className={style.userContainer}
              />
            </div>
          </>
        }
      />
    </SelectableLayerFullWidth>
  )
}
