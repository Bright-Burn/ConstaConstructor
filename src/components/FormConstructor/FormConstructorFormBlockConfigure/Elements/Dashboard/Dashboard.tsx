import { FC, useLayoutEffect, useState } from 'react'

import { Text } from '@consta/uikit/Text'

import { IPlaceholderFormElement } from './types'
import {
  IFormElementPlaceholder,
  PlaceholderProps,
  ElementTypes,
  FormElementTypes,
} from '../../../coreTypes'

import style from './styles.module.css'
import { SelectableLayerFitSpace } from '../../SelectableLayer/SelectableLayerFitSpace'
import { Layout } from '@consta/uikit/Layout'
import { Stats } from '@consta/stats/Stats'
import { Pie } from '@consta/charts/Pie'
import { Bar } from '@consta/charts/Bar'
import {
  barChart1Data,
  barChart2Data,
  barChart3Data,
  pieChart1Data,
  pieChart2Data,
  pieChart3Data,
  pieChart4Data,
  selectIdleStepData,
  selectIdleTypeData,
} from './mocks'
import { Select } from '@consta/uikit/Select'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'

export const Dashboard: FC<IPlaceholderFormElement> = ({ element }) => {
  const [placeholderProps, setPlaceholderProps] = useState<PlaceholderProps | undefined>()

  useLayoutEffect(() => {
    const placeholderFormElement = element as IFormElementPlaceholder
    setPlaceholderProps(placeholderFormElement.props)
  }, [element])

  type IPieItem = { type: string; value: number }

  type ISmallPieProps = {
    data: IPieItem[]
    title?: string
    withStatistic: boolean
    color?: string[]
    css?: React.CSSProperties
  }

  const PieWithLabel = ({ data, title, withStatistic, color, css }: ISmallPieProps) => (
    <div className={style.pie}>
      <Pie
        style={{
          width: '110px',
          height: '110px',
          ...(css || {}),
        }}
        data={data}
        label={false}
        legend={false}
        angleField='value'
        colorField='type'
        color={color || ['#56b9f2', '#eb5757']}
        innerRadius={0.6}
        statistic={{
          title: false,
          content: withStatistic
            ? {
                customHtml: (v, v2, v3, v4) => {
                  const sum = (v4 || []).reduce((acc, value) => acc + value.value, 0)
                  return (
                    <Text size='xl'>
                      {v3?.value || (Math.round(sum * 100) / 100).toLocaleString()}
                    </Text>
                  )
                },
              }
            : false,
        }}
      />
      {title && (
        <div
          style={{
            height: '42px',
          }}
        >
          <Text size='xs' align='center'>
            {title}
          </Text>
        </div>
      )}
    </div>
  )

  const Cell = ({
    children,
    grow,
    direction,
    css,
  }: {
    direction: 'row' | 'column'
    grow?: string
    css?: React.CSSProperties
    children: React.ReactNode
  }) => (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        flexGrow: grow || '1',
        flexShrink: '1',
        flexBasis: '1px',
        overflow: grow === '0' ? 'visible' : 'hidden',
        ...(css || {}),
      }}
    >
      {children}
    </div>
  )

  return (
    <SelectableLayerFitSpace
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Placeholder}
    >
      <div
        style={{
          minWidth: '830px',
          minHeight: '1010px',
          display: 'flex',
        }}
      >
        <Layout direction='column' className={style.root}>
          <Cell direction='row'>
            <Cell direction='column'>
              <div className={style.pane}>
                <div style={{ marginBottom: '10px' }}>
                  <Text view='primary' weight='bold' size='2xl'>
                    КПЭ
                  </Text>
                </div>
                <Layout direction='column' flex={1}>
                  <Cell direction='row' grow='1'>
                    <Cell direction='column' grow='6'>
                      <PieWithLabel
                        data={pieChart1Data}
                        withStatistic={true}
                        title='Коэф. достижения целевого'
                      />
                    </Cell>
                    <Cell direction='column' grow='6'>
                      <PieWithLabel data={pieChart2Data} withStatistic={true} title='Qn т./сут.' />
                    </Cell>
                    <Cell direction='column' grow='5'>
                      <Stats
                        value={-5}
                        title='Отставание'
                        unit='т./сут.'
                        status='error'
                        layout='reversed'
                        size='xs'
                      />
                    </Cell>
                  </Cell>
                  <Cell direction='row' grow='0'>
                    <Cell direction='column'>
                      <Stats
                        value={64.1}
                        rate='71%'
                        title='ПВ'
                        unit='сут.'
                        status='system'
                        layout='default'
                        size='xs'
                      />
                    </Cell>
                    <Cell direction='column'>
                      <Stats
                        value={12.1}
                        rate='11%'
                        title='НПВ'
                        unit='сут.'
                        status='system'
                        layout='default'
                        size='xs'
                      />
                    </Cell>
                    <Cell direction='column'>
                      <Stats
                        value={23.2}
                        rate='18%'
                        title='Ожидания'
                        unit='сут.'
                        status='system'
                        layout='default'
                        size='xs'
                      />
                    </Cell>
                  </Cell>
                  <Cell direction='row' grow='1'>
                    <Bar
                      style={{ width: '100%', height: '100%' }}
                      data={barChart1Data}
                      color={['#56b9f2', '#f2c94c', '#eb5757']}
                      xField='value'
                      yField='group'
                      seriesField='name'
                      legend={{
                        position: 'bottom',
                      }}
                      isStack
                    />
                  </Cell>
                </Layout>
              </div>
            </Cell>
            <Cell direction='column'>
              <div className={style.pane}>
                <Cell direction='column'>
                  <Cell direction='row' grow='0' css={{ alignItems: 'center' }}>
                    <div style={{ marginBottom: '10px' }}>
                      <Text view='primary' weight='bold' size='2xl'>
                        Простои
                      </Text>
                    </div>
                    <div
                      style={{
                        width: '180px',
                        marginLeft: '20px',
                      }}
                    >
                      <Select
                        size='xs'
                        items={selectIdleStepData}
                        value={selectIdleStepData[0]}
                        onChange={() => {}}
                      />
                    </div>
                  </Cell>
                  <Cell direction='row' grow='1'>
                    <Cell direction='row' grow='1'>
                      <PieWithLabel
                        data={pieChart3Data}
                        withStatistic={false}
                        color={['#56b9f2', '#33b4ff80', '#eb5757']}
                      />
                    </Cell>
                    <Cell direction='row' grow='2'>
                      <Stats
                        value={1342.5}
                        rate=' '
                        unit='часов'
                        status='system'
                        layout='default'
                        size='s'
                      />
                    </Cell>
                  </Cell>
                  <div>
                    <Cell direction='row'>
                      <Cell direction='column' grow='1'>
                        <Select
                          size='xs'
                          items={selectIdleTypeData}
                          value={selectIdleTypeData[0]}
                          onChange={() => {}}
                        />
                      </Cell>
                      <Cell direction='column' grow='2'>
                        <ChoiceGroup
                          size='xs'
                          value='Заказчик'
                          onChange={() => {}}
                          items={['Заказчик', 'Подрядчик', 'Метео']}
                          getItemLabel={item => item}
                          multiple={false}
                          name='ChoiceGroup1'
                        />
                      </Cell>
                    </Cell>
                  </div>
                  <Cell direction='row' grow='2'>
                    <Bar
                      style={{ width: '100%', height: '100%' }}
                      data={barChart2Data}
                      color={['#33b4ff', '#eb5757', '#33b4ff80']}
                      xField='value'
                      yField='group'
                      seriesField='name'
                      legend={{
                        position: 'bottom',
                      }}
                      isStack
                    />
                  </Cell>
                </Cell>
              </div>
            </Cell>
          </Cell>
          <Cell direction='row'>
            <div className={style.pane}>
              <div style={{ marginBottom: '10px' }}>
                <Text view='primary' weight='bold' size='2xl'>
                  Затраты
                </Text>
              </div>
              <Cell direction='row'>
                <Cell direction='column' grow='1'>
                  <PieWithLabel
                    data={pieChart4Data}
                    title=''
                    withStatistic={false}
                    css={{
                      width: '125px',
                      height: '125px',
                    }}
                  />
                  <Stats
                    value={23.2}
                    rate='2.1%'
                    title='Общие'
                    unit='млн. ₽'
                    status='error'
                    layout='default'
                    size='xs'
                  />
                </Cell>
                <Cell direction='column' grow='3'>
                  <Bar
                    style={{ width: '100%', height: '100%' }}
                    data={barChart3Data}
                    color={['#33b4ff', '#eb5757', '#33b4ff80']}
                    xField='value'
                    yField='group'
                    seriesField='name'
                    legend={{
                      position: 'bottom',
                    }}
                    isStack
                  />
                </Cell>
              </Cell>
            </div>
          </Cell>
        </Layout>
      </div>
    </SelectableLayerFitSpace>
  )
}
