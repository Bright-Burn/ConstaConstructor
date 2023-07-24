import { Button } from '@consta/uikit/Button'
import { Switch } from '@consta/uikit/Switch'
import { useLayoutEffect, useState, FC } from 'react'
import { SelectableLayerFullWidth } from '../../SelectableLayer/SelectableLayerFullWidth'
import { IFooterWithSwitch } from './types'
import { Text } from '@consta/uikit/Text'
import {
  IFormElementFooterWithSwitch,
  footerWithSwitchProps,
  ElementTypes,
  FormElementTypes,
} from '../../../coreTypes'

export const FooterWithSwitch: FC<IFooterWithSwitch> = ({ element }) => {
  const [checked, setChecked] = useState<boolean>(false)
  const [, setFooterProps] = useState<footerWithSwitchProps>()

  useLayoutEffect(() => {
    const badgeFormElement = element as IFormElementFooterWithSwitch
    setFooterProps(badgeFormElement.props)
  }, [element])

  return (
    <SelectableLayerFullWidth
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Badge}
    >
      <div className={`container-row flex-grow-1 space-between m-t-xs m-b-xs`}>
        <div className='left-side'>
          <Button view='ghost' label='Очистить Поля' className='m-l-xs' />
        </div>
        <div className='right-side container-row space-center'>
          <Text view='primary'> Нарушений не выявлено </Text>
          <Switch
            view='primary'
            className='m-l-xs'
            disabled={false}
            checked={checked}
            align='center'
            onChange={({ checked }) => setChecked(checked)}
          />
          <Button view='primary' label='Сохранить' className='m-l-xs' />
          <Button view='ghost' label='Отменить' className='m-l-xs m-r-xs' />
        </div>
      </div>
    </SelectableLayerFullWidth>
  )
}
