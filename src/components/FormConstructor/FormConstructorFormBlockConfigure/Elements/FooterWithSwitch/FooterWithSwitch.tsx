import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { Button } from '@consta/uikit/Button'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'

import type { footerWithSwitchProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayerFullWidth } from '../../SelectableLayer'

import type { IFooterWithSwitch } from './types'

export const FooterWithSwitch: FC<IFooterWithSwitch> = ({ element }) => {
  const [checked, setChecked] = useState<boolean>(false)
  const [, setFooterProps] = useState<footerWithSwitchProps>()

  useLayoutEffect(() => {
    const badgeFormElement = element.props
    setFooterProps(badgeFormElement.props)
  }, [element])

  return (
    <SelectableLayerFullWidth
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Badge}>
      <div className="container-row flex-grow-1 space-between m-t-xs m-b-xs">
        <div className="left-side">
          <Button view="ghost" label="Очистить Поля" className="m-l-xs" />
        </div>
        <div className="right-side container-row space-center">
          <Text view="primary"> Нарушений не выявлено </Text>
          <Switch
            view="primary"
            className="m-l-xs"
            disabled={false}
            checked={checked}
            align="center"
            onChange={event => {
              setChecked(event.target.checked)
            }}
          />
          <Button view="primary" label="Сохранить" className="m-l-xs" />
          <Button view="ghost" label="Отменить" className="m-l-xs m-r-xs" />
        </div>
      </div>
    </SelectableLayerFullWidth>
  )
}
