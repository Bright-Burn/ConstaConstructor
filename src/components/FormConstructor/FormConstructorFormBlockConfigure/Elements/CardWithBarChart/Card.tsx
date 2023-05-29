import { ICardWithBarChart } from './types'
import { FC, useLayoutEffect, useState } from 'react'
import {
  cardWithChartProps,
  IFormElementCardWithChart,
} from '../../../store/formElements/cardWithBarChartTypes'
import { ElementTypes, FormElementTypes } from '../../../store/formElements'
import { Card } from '@consta/uikit/Card'
import { Bar } from '@consta/charts/Bar'
import { barDataMocks, choiceGroupMocks } from './mocks'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import css from './styles.module.css'
import { SelectableLayerFullWidth } from '../../SelectableLayer/SelectableLayerFullWidth'

export const CardWithBarChart: FC<ICardWithBarChart> = ({ element }) => {
  const [cardProps, setCardProps] = useState<cardWithChartProps>()

  useLayoutEffect(() => {
    const cardFormElement = element as IFormElementCardWithChart
    setCardProps(cardFormElement.props)
  }, [element])

  const PATTERN_MAP: any = {
    ПВ: {
      type: 'line',
      cfg: {
        backgroundColor: '#0BA5FF',
        stroke: '#0BA5FF',
        strokeOpacity: 0.7,
        opacity: 0.3,
        spacing: 0,
        lineWidth: 10,
        rotation: 0,
      },
    },
    Ожидания: {
      type: 'line',
      cfg: {
        backgroundColor: '#0BA5FF',
        stroke: '#F2C94C',
        strokeOpacity: 1,
        opacity: 0.3,
        spacing: 0,
        lineWidth: 10,
        rotation: 0,
      },
    },
    НПВ: {
      type: 'line',
      cfg: {
        backgroundColor: '#0BA5FF',
        stroke: '#F54D4D',
        strokeOpacity: 1,
        opacity: 0.3,
        spacing: 0,
        lineWidth: 10,
        rotation: 0,
      },
    },
  }

  const DISABLED_PATTERN_MAP: any = {
    ПВ: {
      type: 'line',
      cfg: {
        backgroundColor: '#0BA5FF',
        stroke: '#0BA5FF',
        strokeOpacity: 0.7,
        opacity: 0.3,
        lineWidth: 5,
        spacing: 2,
      },
    },
    Ожидания: {
      type: 'line',
      cfg: {
        backgroundColor: '#0BA5FF',
        stroke: '#F2C94C',
        strokeOpacity: 1,
        opacity: 0.3,
        lineWidth: 5,
        spacing: 2,
      },
    },
    НПВ: {
      type: 'line',
      cfg: {
        backgroundColor: '#0BA5FF',
        stroke: '#F54D4D',
        strokeOpacity: 1,
        opacity: 0.3,
        lineWidth: 5,
        spacing: 2,
      },
    },
  }

  return (
    <SelectableLayerFullWidth
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.CardWithBarChart}
      className={`${css.fullScreen}`}>
      <Card className={css.cardStyle}>
        <div className={'m-b-l'}>Детализация ввода в эксплуатацию</div>
        <ChoiceGroup
          items={choiceGroupMocks}
          name='ChoiceGroup'
          getItemLabel={item => item}
          size='xs'
          className={'m-b-l'}
        />
        <Bar
          data={barDataMocks}
          xField='number'
          yField='parameter'
          seriesField='action'
          isStack
          legend={{
            layout: 'horizontal',
            position: 'bottom',
          }}
          pattern={({ action, parameter }) => {
            switch (parameter) {
              case 'ГНКТ':
              case 'Ожидание КРС (ЗР к ГРП)':
              case 'КРС (ЗР к ГРП)':
              case 'Ожидание ВНР':
              case 'ВНР':
                return (
                  DISABLED_PATTERN_MAP[action] || {
                    type: 'line',
                    cfg: {
                      backgroundColor: '#0BA5FF',
                      stroke: '#0BA5FF',
                      strokeOpacity: 0.01,
                      opacity: 0.15,
                      spacing: 4,
                      lineWidth: 5,
                      rotation: 0,
                    },
                  }
                )
              default:
                return (
                  PATTERN_MAP[action] || {
                    type: 'line',
                    cfg: {
                      backgroundColor: '#0BA5FF',
                      stroke: '#0BA5FF',
                      strokeOpacity: 0.01,
                      opacity: 0.3,
                      spacing: 4,
                      lineWidth: 5,
                      rotation: 0,
                    },
                  }
                )
            }
          }}
        />
      </Card>
    </SelectableLayerFullWidth>
  )
}
