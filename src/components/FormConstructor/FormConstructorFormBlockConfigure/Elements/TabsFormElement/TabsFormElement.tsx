import type { FC } from 'react'
import { Tabs } from '@consta/uikit/Tabs'

import type { TabItemType } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes, Icons } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { ITabsFormElement } from './types'

export const TabsFormElement: FC<ITabsFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  const uiLibProps = props?.uiLibProps
  const className = props?.className
  const styles = props?.styles

  if (!uiLibProps) {
    return null
  }

  const getItemLeftIcon = (item: TabItemType) => (item.leftIcon ? Icons[item.leftIcon] : undefined)

  const getItemRightIcon = (item: TabItemType) =>
    item.rightIcon ? Icons[item.rightIcon] : undefined

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Tabs}>
      {props ? (
        <Tabs
          {...uiLibProps}
          className={className}
          style={styles}
          getItemLeftIcon={getItemLeftIcon}
          getItemRightIcon={getItemRightIcon}
          onChange={() => {}}
        />
      ) : null}
    </SelectableLayer>
  )
}
