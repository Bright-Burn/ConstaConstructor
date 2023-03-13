import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { SelectableLayer } from '../../SelectableLayer'
import { IHeaderWithBreadcrumbs } from './types'
import { Text } from '@consta/uikit/Text'
import { IconRing } from '@consta/uikit/IconRing'
import { Breadcrumbs } from '@consta/uikit/Breadcrumbs'
import {
  headerWithBreadcrumbsProps,
  IFormElementHeaderWithBreadcrumbs,
} from '../../../store/formElements'
import { Header } from '@consta/uikit/Header'
import { User } from '@consta/uikit/User'
import style from './styles.module.css'
import { pages } from './mocks'

export const HeaderWithBreadcrumbs: FC<IHeaderWithBreadcrumbs> = ({ element }) => {
  const [headerProps, setHeaderProps] = useState<headerWithBreadcrumbsProps | undefined>()

  useLayoutEffect(() => {
    const badgeFormElement = element as IFormElementHeaderWithBreadcrumbs
    setHeaderProps(badgeFormElement.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Badge}
    >
      <Header
        className={`container-row flex-grow-1 ${style.container}`}
        leftSide={
          <>
            <div className={`container-row delimeter ${style.delimeter}`}>
              <Text size='l' weight='bold'>
                Литология
              </Text>
            </div>
            <Breadcrumbs items={pages} />
          </>
        }
        rightSide={
          <>
            <div className='container-row align-center'>
              <IconRing size='m' />
              <User
                name='Михаил Петров'
                info='Главный специалист'
                view='clear'
                className={style.userContainer}
              />
            </div>
          </>
        }
      />
    </SelectableLayer>
  )
}
