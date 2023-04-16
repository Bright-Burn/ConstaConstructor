import { TextField } from '@consta/uikit/TextField'
import { DatePicker } from '@consta/uikit/DatePicker'
import { Text } from '@consta/uikit/Text'
import { DragNDropField } from '@consta/uikit/DragNDropField'
import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements'
import {
  IFormElementPlaceViolation,
  PlaceViolationProps,
} from '../../../store/formElements/simpleFormTypes2'
import { SelectableLayerFullWidth } from '../../SelectableLayer/SelectableLayerFullWidth'
import { IPlaceViolation } from './types'
import { IconLock } from '@consta/icons/IconLock'
import { IconCalendar } from '@consta/icons/IconCalendar'
import { IconAttach } from '@consta/icons/IconAttach'
import css from './styles.module.css'
import { Button } from '@consta/uikit/Button'
import { Combobox } from '@consta/uikit/Combobox'
import { Switch } from '@consta/uikit/Switch'

export const PlaceViolation: FC<IPlaceViolation> = ({ element }) => {
  const [formProps, setFormProps] = useState<PlaceViolationProps>()

  useLayoutEffect(() => {
    const simpleFormElement = element as IFormElementPlaceViolation
    setFormProps(simpleFormElement.props)
  }, [element])

  return (
    <SelectableLayerFullWidth
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.CardWithBarChart}
      className={'container-row'}>
      <div className={`${css.flexCenter} m-t-2xl`}>
        <div className={`${css.simpleForm}`}>
          <div style={{ paddingLeft: 20, marginBottom: 25, display: 'flex', fontSize: 14 }}>
            <Text transform='uppercase' weight='bold'>
              Данные о месте нарушения
            </Text>
            <div>
              <div>
                <Text
                  style={{
                    marginLeft: 18,
                    paddingTop: 5,
                    fontSize: 12,
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    // fontWeight: 400,
                    lineHeight: '120%',
                    color: '#002033BF',
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: 2,
                  }}>
                  Работы на месте нарушения остановлены
                </Text>
              </div>
            </div>
            <Switch
              view='ghost'
              style={{ paddingTop: 5, paddingLeft: 8 }}
              checked={false}
              size='m'
            />
          </div>
          <div style={{ width: '50%', paddingLeft: 20, paddingRight: 20 }}>
            <Combobox
              required={true}
              items={['123']}
              onChange={() => console.log('123')}
              getItemLabel={() => '123'}
              size='s'
              className={`${css.borderBottomForText}`}
              label='Компания'
              getItemKey={function (item: string): string | number {
                throw new Error('Function not implemented.')
              }}></Combobox>
          </div>
          <div className={`${css.flexParent}`}>
            <div className={`${css.flexChild}`}>
              <Combobox
                style={{ paddingTop: 10 }}
                required={true}
                items={['123']}
                onChange={() => console.log('123')}
                getItemLabel={() => '123'}
                size='s'
                className={`${css.borderBottomForText}`}
                label='Месторождение'
                getItemKey={function (item: string): string | number {
                  throw new Error('Function not implemented.')
                }}
              />
              <Combobox
                style={{ paddingTop: 10 }}
                required={true}
                items={['123']}
                onChange={() => console.log('123')}
                getItemLabel={() => '123'}
                size='s'
                label='Цех'
                getItemKey={function (item: string): string | number {
                  throw new Error('Function not implemented.')
                }}></Combobox>
            </div>
            <div className={`${css.flexChild}`}>
              <div className={`${css.Elem}`}>{''}</div>
              <Combobox
                style={{ paddingTop: 10 }}
                required={true}
                items={['123']}
                onChange={() => console.log('123')}
                getItemLabel={() => '123'}
                size='s'
                label='Объект'
                getItemKey={function (item: string): string | number {
                  throw new Error('Function not implemented.')
                }}></Combobox>
              <Combobox
                style={{ paddingTop: 10 }}
                required={true}
                items={['123']}
                onChange={() => console.log('123')}
                getItemLabel={() => '123'}
                size='s'
                label='Место нарушения'
                getItemKey={function (item: string): string | number {
                  throw new Error('Function not implemented.')
                }}></Combobox>
            </div>
          </div>
          <div style={{ display: 'flex', fontSize: 14 }}>
            <div>
              <div>
                <Text
                  style={{
                    marginLeft: 20,
                    paddingTop: 5,
                    fontSize: 12,
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '120%',
                    color: '#002033BF',
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: 2,
                  }}>
                  Указать подрядную организацию
                </Text>
              </div>
            </div>
            <Switch style={{ paddingTop: 5, paddingLeft: 8 }} checked={true} size='m' />
          </div>

          <div className={`${css.flexParent}`}>
            <div className={`${css.flexChild}`}>
              <Combobox
                style={{ paddingTop: 10 }}
                required={true}
                items={['123']}
                onChange={() => console.log('123')}
                getItemLabel={() => '123'}
                size='s'
                label='Наименование подрядной организации'
                getItemKey={function (item: string): string | number {
                  throw new Error('Function not implemented.')
                }}></Combobox>
            </div>
            <div className={`${css.flexChild}`}>
              <Combobox
                style={{ paddingTop: 10 }}
                required={true}
                items={['123']}
                onChange={() => console.log('123')}
                getItemLabel={() => '123'}
                size='s'
                label='Деятельность'
                getItemKey={function (item: string): string | number {
                  throw new Error('Function not implemented.')
                }}></Combobox>
            </div>
          </div>
        </div>
      </div>
    </SelectableLayerFullWidth>
  )
}

