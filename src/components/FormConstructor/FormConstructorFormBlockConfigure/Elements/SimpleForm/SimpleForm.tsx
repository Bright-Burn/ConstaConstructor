import { TextField } from '@consta/uikit/TextField'
import { DatePicker } from '@consta/uikit/DatePicker'
import { Text } from '@consta/uikit/Text'
import { DragNDropField } from '@consta/uikit/DragNDropField'
import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements'
import {
  IFormElementSimpleForm,
  simpleFormProps,
} from '../../../store/formElements/simpleFormTypes'
import { SelectableLayerFullWidth } from '../../SelectableLayer/SelectableLayerFullWidth'
import { ISimpleForm } from './types'
import { IconLock } from '@consta/icons/IconLock'
import { IconCalendar } from '@consta/icons/IconCalendar'
import { IconAttach } from '@consta/icons/IconAttach'
import css from './styles.module.css'
import { Button } from '@consta/uikit/Button'

export const SimpleForm: FC<ISimpleForm> = ({ element }) => {
  const [formProps, setFormProps] = useState<simpleFormProps>()

  useLayoutEffect(() => {
    const simpleFormElement = element as IFormElementSimpleForm
    setFormProps(simpleFormElement.props)
  }, [element])

  return (
    <SelectableLayerFullWidth
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.CardWithBarChart}
      className={'container-row'}
    >
      <div className={`${css.flexCenter} m-t-2xl`}>
        <div className={`${css.simpleForm}`}>
          <TextField
            placeholder='НСИ'
            label='Система'
            labelPosition='top'
            size='m'
            disabled
            width='full'
          />
          <TextField
            placeholder='Ivanov.AI'
            label='Логин'
            labelPosition='top'
            size='m'
            disabled
            width='full'
            className='m-t-xl'
          />
          <TextField
            value='Пароль'
            label='Новый пароль'
            labelPosition='top'
            type='password'
            size='m'
            leftSide={IconLock}
            width='full'
            className='m-t-s'
          />
          <TextField
            value='Иванов'
            label='Фамилия'
            labelPosition='top'
            size='m'
            width='full'
            className='m-t-xl'
          />
          <div className='m-t-s'>
            <TextField
              value='Александр'
              label='Имя'
              labelPosition='top'
              size='m'
              className='m-r-xs'
            />
            <TextField
              placeholder='Введите отчество'
              label='Отчество'
              labelPosition='top'
              size='m'
            />
          </div>
          <TextField
            value='ivanov@site.ru'
            label='Email'
            labelPosition='top'
            size='m'
            required
            width='full'
            className='m-t-xl'
          />
          <div className='m-t-s'>
            <TextField
              value='+7 (800) 000 00 00'
              label='Рабочий телефон'
              labelPosition='top'
              size='m'
              className='m-r-xs'
            />
            <TextField
              placeholder='+7 (_ _ _) _ _ _  _ _  _ _'
              label='Личный телефон'
              labelPosition='top'
              size='m'
            />
          </div>
          <DatePicker
            className='m-t-s'
            type='date'
            label='Дата рождения'
            labelPosition='top'
            rightSide={IconCalendar}
          />
          <div className='m-t-l container'>
            <Text>Файл</Text>
            <Button view='ghost' iconLeft={IconAttach} label='Выбрать' className='m-t-xs' />
            <Text className='m-t-s'>Группа файлов</Text>
            <DragNDropField className='m-t-xs m-b-2xl' onDropFiles={() => {}}>
              <div className='container-row'>
                <Text view='secondary' className='m-r-xs'>
                  Перетащите файлы или
                </Text>
                <Text view='link'>загрузите</Text>
              </div>
              <Text view='ghost'>Поддерживаемые форматы: PNG, TIFF, JPG</Text>
            </DragNDropField>
          </div>
        </div>
      </div>
    </SelectableLayerFullWidth>
  )
}
