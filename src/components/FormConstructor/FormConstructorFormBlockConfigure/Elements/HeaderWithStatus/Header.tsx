import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { Badge } from '@consta/uikit/Badge'
import { Button } from '@consta/uikit/Button'
import { Header } from '@consta/uikit/Header'
import { IconHamburger } from '@consta/uikit/IconHamburger'
import { IconInfo } from '@consta/uikit/IconInfo'
import { IconKebab } from '@consta/uikit/IconKebab'
import { IconRing } from '@consta/uikit/IconRing'
import { Text } from '@consta/uikit/Text'
import { User } from '@consta/uikit/User'

import type { headerWithStatusProps, IFormElementHeaderWithStatus } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayerFullWidth } from '../../SelectableLayer/SelectableLayerFullWidth'

import type { IHeaderWithStatus } from './types'

import style from './styles.module.css'

export const HeaderWithStatus: FC<IHeaderWithStatus> = ({ element }) => {
  const [headerProps, setHeaderProps] = useState<headerWithStatusProps>()

  useLayoutEffect(() => {
    const badgeFormElement = element as IFormElementHeaderWithStatus
    setHeaderProps(badgeFormElement.props)
  }, [element])

  return (
    <SelectableLayerFullWidth
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Badge}>
      <Header
        className={`container-row flex-grow-1 ${style.container}`}
        leftSide={
          <>
            <div className={`container-row delimeter ${style.delimeter}`}>
              <IconHamburger view="brand" className="m-r-l" />
              <Text truncate={true} size="m" className="m-r-xs">
                PEX-файлы /
              </Text>
              <Text truncate={true} spacing="s" size="m" weight="bold">
                {' '}
                Расчёт PEX Зима Фаза 1-2
              </Text>
              <Badge
                status="normal"
                label="В работе"
                view="stroked"
                form="round"
                className="m-l-l"
              />
            </div>
            <div className="container-row m-r-xs">
              <Button size="s" view="ghost" className="m-r-s" iconLeft={IconInfo} onlyIcon={true} />
              <Button size="s" view="ghost" iconLeft={IconKebab} onlyIcon={true} />
            </div>
          </>
        }
        rightSide={
          <div className="container-row align-center m-l-3xl">
            <IconRing size="m" view="secondary" />
            <User
              name="Иванов Иван"
              info="Управляющий портфелем"
              view="clear"
              className={style.userContainer}
            />
          </div>
        }
      />
    </SelectableLayerFullWidth>
  )
}
