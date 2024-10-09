import type { FC } from 'react'
import { Tabs } from '@consta/uikit/Tabs'

import type { TabItemType } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes, Icons } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { ITabsFormElement } from './types'
import { getIsFilledClassName } from '../../../utils'

export const TabsFormElement: FC<ITabsFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  const uiLibProps = props?.uiLibProps

  if (!uiLibProps) {
    return null
  }

  const className = props?.className
  const isFilled = props?.styles.filled || false
  const styles = { flexGrow: isFilled ? 1 : 0, ...props?.styles }

  const getItemLeftIcon = (item: TabItemType) => (item.leftIcon ? Icons[item.leftIcon] : undefined)

  const getItemRightIcon = (item: TabItemType) =>
    item.rightIcon ? Icons[item.rightIcon] : undefined

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      className={getIsFilledClassName(isFilled)}
      elementType={FormElementDictTypes.Tabs}>
      <Tabs
        {...uiLibProps}
        className={className}
        style={styles}
        getItemLeftIcon={getItemLeftIcon}
        getItemRightIcon={getItemRightIcon}
        onChange={() => {}}
      />
    </SelectableLayer>
  )
}
