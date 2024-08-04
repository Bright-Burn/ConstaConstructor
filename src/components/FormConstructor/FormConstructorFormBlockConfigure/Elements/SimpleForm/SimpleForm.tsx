import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { IconAttach } from '@consta/icons/IconAttach'
import { IconCalendar } from '@consta/icons/IconCalendar'
import { IconLock } from '@consta/icons/IconLock'
import { Button } from '@consta/uikit/Button'
import { DatePicker } from '@consta/uikit/DatePicker'
import { DragNDropField } from '@consta/uikit/DragNDropField'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayerFullWidth } from '../../SelectableLayer'

import type { ISimpleForm } from './types'

import css from './styles.module.css'

export const SimpleForm: FC<ISimpleForm> = ({ element }) => {
  return (
    <SelectableLayerFullWidth
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.CardWithBarChart}
      className="container-row">
      <div className={`${css.flexCenter} m-t-2xl`}>
        <div className={css.simpleForm}>
          <TextField
            placeholder="НСИ"
            label="Система"
            labelPosition="top"
            size="m"
            disabled={true}
          />
          <TextField
            placeholder="Ivanov.AI"
            label="Логин"
            labelPosition="top"
            size="m"
            disabled={true}
            className="m-t-xl"
          />
          <TextField
            value="Пароль"
            label="Новый пароль"
            labelPosition="top"
            type="password"
            size="m"
            leftSide={IconLock}
            className="m-t-s"
          />
          <TextField
            value="Иванов"
            label="Фамилия"
            labelPosition="top"
            size="m"
            className="m-t-xl"
          />
          <div className="m-t-s">
            <TextField
              value="Александр"
              label="Имя"
              labelPosition="top"
              size="m"
              className="m-r-xs"
            />
            <TextField
              placeholder="Введите отчество"
              label="Отчество"
              labelPosition="top"
              size="m"
            />
          </div>
          <TextField
            value="ivanov@site.ru"
            label="Email"
            labelPosition="top"
            size="m"
            required={true}
            className="m-t-xl"
          />
          <div className="m-t-s">
            <TextField
              value="+7 (800) 000 00 00"
              label="Рабочий телефон"
              labelPosition="top"
              size="m"
              className="m-r-xs"
            />
            <TextField
              placeholder="+7 (_ _ _) _ _ _  _ _  _ _"
              label="Личный телефон"
              labelPosition="top"
              size="m"
            />
          </div>
          <DatePicker
            className="m-t-s"
            type="date"
            label="Дата рождения"
            labelPosition="top"
            rightSide={IconCalendar}
          />
          <div className="m-t-l container">
            <Text>Файл</Text>
            <Button view="ghost" iconLeft={IconAttach} label="Выбрать" className="m-t-xs" />
            <Text className="m-t-s">Группа файлов</Text>
            <DragNDropField className="m-t-xs m-b-2xl" onDropFiles={() => {}}>
              <div className="container-row">
                <Text view="secondary" className="m-r-xs">
                  Перетащите файлы или
                </Text>
                <Text view="link">загрузите</Text>
              </div>
              <Text view="ghost">Поддерживаемые форматы: PNG, TIFF, JPG</Text>
            </DragNDropField>
          </div>
        </div>
      </div>
    </SelectableLayerFullWidth>
  )
}
