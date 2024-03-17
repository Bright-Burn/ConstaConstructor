import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { Combobox } from '@consta/uikit/Combobox'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'

import type { FormWithTwoColumnsProps, IFormFormWithTwoColumns } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayerFullWidth } from '../../SelectableLayer'

import type { IFormWithTwoColumns } from './types'

import css from './styles.module.css'

type Item = {
  label: string
  id: number
}

const items: Item[] = [
  {
    label: 'Первый',
    id: 1,
  },
  {
    label: 'Второй',
    id: 2,
  },
  {
    label: 'Третий',
    id: 3,
  },
]

export const FormWithTwoColumns: FC<IFormWithTwoColumns> = ({ element }) => {
  const [formProps, setFormProps] = useState<FormWithTwoColumnsProps>()
  const [value, setValue] = useState<Item | null>()

  useLayoutEffect(() => {
    const simpleFormElement = element as IFormFormWithTwoColumns
    setFormProps(simpleFormElement.props)
  }, [element])

  return (
    <SelectableLayerFullWidth
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.CardWithBarChart}
      className={css.fullScreen}>
      <div className={`${css.formFullWidth} m-t-2xl`}>
        <div className={css.simpleForm}>
          <div className={css.infoPlaceCrush}>
            <Text transform="uppercase" weight="bold">
              Данные о месте нарушения
            </Text>
            <div>
              <div>
                <Text className={css.textDecoration}>Работы на месте нарушения остановлены</Text>
              </div>
            </div>
            <Switch view="ghost" className={css.switchDecoration} checked={false} size="m" />
          </div>
          <div className={css.titleText}>
            <Combobox
              required={true}
              items={items}
              value={value}
              placeholder="Введите последовательность для поиска..."
              size="s"
              className={css.borderBottomForText}
              label="Компания"
              onChange={({ value }) => {
                setValue(value)
              }}
            />
          </div>
          <div className={css.flexParent}>
            <div className={css.flexChild}>
              <Combobox
                placeholder="Введите последовательность для поиска..."
                required={true}
                items={items}
                value={value}
                size="s"
                className={css.borderBottomForText}
                label="Месторождение"
                onChange={({ value }) => {
                  setValue(value)
                }}
              />
              <Combobox
                required={true}
                items={items}
                value={value}
                size="s"
                placeholder="Выберите значение из списка..."
                label="Цех"
                onChange={({ value }) => {
                  setValue(value)
                }}
              />
            </div>
            <div className={css.flexChild}>
              <Combobox
                required={true}
                items={items}
                value={value}
                placeholder="Выберите значение из списка..."
                size="s"
                label="Объект"
                onChange={({ value }) => {
                  setValue(value)
                }}
              />
              <Combobox
                required={true}
                items={items}
                value={value}
                placeholder="Выберите значение из списка..."
                size="s"
                label="Место нарушения"
                onChange={({ value }) => {
                  setValue(value)
                }}
              />
            </div>
          </div>
          <div className={css.textSwitch}>
            <div>
              <div>
                <Text className={css.textDecoration}>Указать подрядную организацию</Text>
              </div>
            </div>
            <Switch className={css.switchDecoration} checked={true} size="m" />
          </div>

          <div className={css.flexParent}>
            <div className={css.flexChild}>
              <Combobox
                required={true}
                items={items}
                value={value}
                placeholder="Введите последовательность для поиска..."
                size="s"
                label="Наименование подрядной организации"
                onChange={({ value }) => {
                  setValue(value)
                }}
              />
            </div>
            <div className={css.flexChild}>
              <Combobox
                required={true}
                items={items}
                value={value}
                placeholder="Выберите значение из списка..."
                size="s"
                label="Деятельность"
                onChange={({ value }) => {
                  setValue(value)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </SelectableLayerFullWidth>
  )
}
