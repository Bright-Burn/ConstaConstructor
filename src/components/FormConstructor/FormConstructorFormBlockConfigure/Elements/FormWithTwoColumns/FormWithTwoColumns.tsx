import { Text } from '@consta/uikit/Text'
import { FC, useLayoutEffect, useState } from 'react'
import {
  IFormFormWithTwoColumns,
  FormWithTwoColumnsProps,
  ElementTypes,
  FormElementTypes,
} from '../../../coreTypes'
import { SelectableLayerFullWidth } from '../../SelectableLayer/SelectableLayerFullWidth'
import { IFormWithTwoColumns } from './types'
import css from './styles.module.css'
import { Combobox } from '@consta/uikit/Combobox'
import { Switch } from '@consta/uikit/Switch'

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
      elementType={FormElementTypes.CardWithBarChart}
      className={`${css.fullScreen}`}
    >
      <div className={`${css.formFullWidth} m-t-2xl`}>
        <div className={`${css.simpleForm}`}>
          <div className={`${css.infoPlaceCrush}`}>
            <Text transform='uppercase' weight='bold'>
              Данные о месте нарушения
            </Text>
            <div>
              <div>
                <Text className={`${css.textDecoration}`}>
                  Работы на месте нарушения остановлены
                </Text>
              </div>
            </div>
            <Switch view='ghost' className={`${css.switchDecoration}`} checked={false} size='m' />
          </div>
          <div className={`${css.titleText}`}>
            <Combobox
              required={true}
              items={items}
              value={value}
              onChange={({ value }) => setValue(value)}
              placeholder='Введите последовательность для поиска...'
              size='s'
              className={`${css.borderBottomForText}`}
              label='Компания'
            />
          </div>
          <div className={`${css.flexParent}`}>
            <div className={`${css.flexChild}`}>
              <Combobox
                placeholder='Введите последовательность для поиска...'
                required={true}
                items={items}
                value={value}
                onChange={({ value }) => setValue(value)}
                size='s'
                className={`${css.borderBottomForText}`}
                label='Месторождение'
              />
              <Combobox
                required={true}
                items={items}
                value={value}
                onChange={({ value }) => setValue(value)}
                size='s'
                placeholder='Выберите значение из списка...'
                label='Цех'
              />
            </div>
            <div className={`${css.flexChild}`}>
              <Combobox
                required={true}
                items={items}
                value={value}
                onChange={({ value }) => setValue(value)}
                placeholder='Выберите значение из списка...'
                size='s'
                label='Объект'
              />
              <Combobox
                required={true}
                items={items}
                value={value}
                onChange={({ value }) => setValue(value)}
                placeholder='Выберите значение из списка...'
                size='s'
                label='Место нарушения'
              />
            </div>
          </div>
          <div className={`${css.textSwitch}`}>
            <div>
              <div>
                <Text className={`${css.textDecoration}`}>Указать подрядную организацию</Text>
              </div>
            </div>
            <Switch className={`${css.switchDecoration}`} checked={true} size='m' />
          </div>

          <div className={`${css.flexParent}`}>
            <div className={`${css.flexChild}`}>
              <Combobox
                required={true}
                items={items}
                value={value}
                onChange={({ value }) => setValue(value)}
                placeholder='Введите последовательность для поиска...'
                size='s'
                label='Наименование подрядной организации'
              />
            </div>
            <div className={`${css.flexChild}`}>
              <Combobox
                required={true}
                items={items}
                value={value}
                onChange={({ value }) => setValue(value)}
                placeholder='Выберите значение из списка...'
                size='s'
                label='Деятельность'
              />
            </div>
          </div>
        </div>
      </div>
    </SelectableLayerFullWidth>
  )
}
