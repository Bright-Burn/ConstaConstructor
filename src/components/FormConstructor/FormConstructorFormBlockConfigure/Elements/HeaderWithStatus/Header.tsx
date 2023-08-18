import { FC, useLayoutEffect, useState } from 'react'
import { IHeaderWithStatus } from './types'
import { Text } from '@consta/uikit/Text'
import { IconHamburger } from '@consta/uikit/IconHamburger'
import { IconKebab } from '@consta/uikit/IconKebab'
import { IconInfo } from '@consta/uikit/IconInfo'
import { IconRing } from '@consta/uikit/IconRing'
import { Badge } from '@consta/uikit/Badge'
import {
  headerWithStatusProps,
  IFormElementHeaderWithStatus,
  ElementTypes,
  FormElementDictTypes,
} from '../../../coreTypes'
import { Header } from '@consta/uikit/Header'
import { User } from '@consta/uikit/User'
import { Button } from '@consta/uikit/Button'
import style from './styles.module.css'
import { SelectableLayerFullWidth } from '../../SelectableLayer/SelectableLayerFullWidth'

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
      elementType={FormElementDictTypes.Badge}
    >
      <Header
        className={`container-row flex-grow-1 ${style.container}`}
        leftSide={
          <>
            <div className={`container-row delimeter ${style.delimeter}`}>
              <IconHamburger view='brand' className={`m-r-l`} />
              <Text truncate size='m' className={`m-r-xs`}>
                PEX-файлы /
              </Text>
              <Text truncate spacing='s' size='m' weight='bold'>
                {' '}
                Расчёт PEX Зима Фаза 1-2
              </Text>
              <Badge
                status='normal'
                label='В работе'
                view='stroked'
                form='round'
                className={`m-l-l`}
              />
            </div>
            <div className='container-row m-r-xs'>
              <Button
                size='s'
                view='ghost'
                className={`m-r-s`}
                iconLeft={IconInfo}
                onlyIcon
              ></Button>
              <Button size='s' view='ghost' iconLeft={IconKebab} onlyIcon></Button>
            </div>
          </>
        }
        rightSide={
          <>
            <div className='container-row align-center m-l-3xl'>
              <IconRing size='m' view='secondary' />
              <User
                name='Иванов Иван'
                info='Управляющий портфелем'
                view='clear'
                className={style.userContainer}
              />
            </div>
          </>
        }
      />
    </SelectableLayerFullWidth>
  )
}
