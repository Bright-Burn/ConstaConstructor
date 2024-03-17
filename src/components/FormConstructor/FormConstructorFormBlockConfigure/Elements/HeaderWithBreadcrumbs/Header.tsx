import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { Breadcrumbs } from '@consta/uikit/Breadcrumbs'
import { Header } from '@consta/uikit/Header'
import { IconRing } from '@consta/uikit/IconRing'
import { Text } from '@consta/uikit/Text'
import { User } from '@consta/uikit/User'

import type {
  headerWithBreadcrumbsProps,
  IFormElementHeaderWithBreadcrumbs,
} from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayerFullWidth } from '../../SelectableLayer'

import { pages } from './mocks'
import type { IHeaderWithBreadcrumbs } from './types'

import style from './styles.module.css'

export const HeaderWithBreadcrumbs: FC<IHeaderWithBreadcrumbs> = ({ element }) => {
  const [headerProps, setHeaderProps] = useState<headerWithBreadcrumbsProps>()

  useLayoutEffect(() => {
    const badgeFormElement = element as IFormElementHeaderWithBreadcrumbs
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
              <Text size="l" weight="bold">
                Литология
              </Text>
            </div>
            <Breadcrumbs items={pages} />
          </>
        }
        rightSide={
          <div className="container-row align-center">
            <IconRing size="m" />
            <User
              name="Михаил Петров"
              info="Главный специалист"
              view="clear"
              className={style.userContainer}
            />
          </div>
        }
      />
    </SelectableLayerFullWidth>
  )
}
