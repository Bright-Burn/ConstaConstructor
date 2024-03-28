import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { Bar } from '@consta/charts/Bar'
import { Card } from '@consta/uikit/Card'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'

import type { cardWithChartProps, IFormElementCardWithChart } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayerFullWidth } from '../../SelectableLayer/'

import { barDataMocks, choiceGroupMocks } from './mocks'
import type { ICardWithBarChart } from './types'

import css from './styles.module.css'

export const CardWithBarChart: FC<ICardWithBarChart> = ({ element }) => {
  const [cardProps, setCardProps] = useState<cardWithChartProps>()

  useLayoutEffect(() => {
    const cardFormElement = element.props
    setCardProps(cardFormElement.props)
  }, [element])

  const PATTERN_MAP = {
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

  const DISABLED_PATTERN_MAP = {
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
      elementType={FormElementDictTypes.CardWithBarChart}
      className={css.fullScreen}>
      <Card className={css.cardStyle}>
        <div className="m-b-l">Детализация ввода в эксплуатацию</div>
        <ChoiceGroup
          items={choiceGroupMocks}
          name="ChoiceGroup"
          getItemLabel={item => item}
          size="xs"
          className="m-b-l"
        />
        <Bar
          data={barDataMocks}
          xField="number"
          yField="parameter"
          seriesField="action"
          isStack={true}
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
                  // @ts-expect-error
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
                  // @ts-expect-error
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
