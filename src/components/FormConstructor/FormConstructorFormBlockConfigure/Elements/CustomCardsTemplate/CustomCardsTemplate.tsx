import React, { useEffect, useState } from 'react'
import { Button } from '@consta/uikit/Button'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import type { IconComponent } from '@consta/uikit/Icon'
import { IconAdd } from '@consta/uikit/IconAdd'
import { IconCards } from '@consta/uikit/IconCards'
import { IconHamburger } from '@consta/uikit/IconHamburger'
import { Text } from '@consta/uikit/Text'

import CustomCard from './CustomCard'
import { mockData } from './mockData'

import style from './styles.module.css'

function CustomCardsTemplate() {
  type choiceGroupValueType = {
    name: string
    key: EChoiceGroupKey
    icon?: IconComponent
  }
  enum EChoiceGroupKey {
    last,
    favorite,
    all,
    cards,
    rows,
  }

  const leftChoiceGroupItems: choiceGroupValueType[] = [
    {
      name: 'Последние',
      key: EChoiceGroupKey.last,
    },
    {
      name: 'Избранные',
      key: EChoiceGroupKey.favorite,
    },
    {
      name: 'Все',
      key: EChoiceGroupKey.all,
    },
  ]
  const rightChoiceGroupItems: choiceGroupValueType[] = [
    {
      name: 'cards',
      key: EChoiceGroupKey.cards,
      icon: IconCards,
    },
    {
      name: 'rows',
      key: EChoiceGroupKey.rows,
      icon: IconHamburger,
    },
  ]

  const [showBlocks, setShowBlocks] = useState(true)

  const [leftChoiceGroupValue, setLeftChoiceGroupValue] = useState<choiceGroupValueType>(
    leftChoiceGroupItems[0],
  )
  const [rightChoiceGroupValue, setRightChoiceGroupValue] = useState<choiceGroupValueType>(
    rightChoiceGroupItems[0],
  )

  useEffect(() => {}, [showBlocks])

  const onChangeLeftSelectValue = (value: choiceGroupValueType) => {
    setLeftChoiceGroupValue(value)
  }

  const onChangeRightSelectValue = (value: choiceGroupValueType) => {
    setRightChoiceGroupValue(value)
  }

  const onButtonClick = () => {}

  return (
    <div className="container-column align-center m-l-xl m-r-xl">
      <div className={style.content}>
        <div className={style.topElement}>
          <Text weight="bold">Проекты</Text>
          <Button label="Новый проект" size="s" iconLeft={IconAdd} onClick={onButtonClick} />
        </div>
        <div className={style.middleElement}>
          <ChoiceGroup
            items={leftChoiceGroupItems}
            multiple={false}
            size="s"
            view="ghost"
            getItemLabel={item => item.name}
            name="WorkOrderAttachments__choiceGroup"
            value={leftChoiceGroupValue}
            onChange={({ value }) => {
              value && onChangeLeftSelectValue(value)
            }}
          />
          <ChoiceGroup
            items={rightChoiceGroupItems}
            multiple={false}
            size="s"
            view="ghost"
            getItemLabel={item => item.name}
            getItemIcon={item => item.icon}
            onlyIcon={true}
            name="WorkOrderAttachments__choiceGroup"
            value={rightChoiceGroupValue}
            onChange={({ value }) => {
              value && onChangeRightSelectValue(value)
              setShowBlocks(!showBlocks)
            }}
          />
        </div>

        <div className={style.bottomElement}>
          {!!showBlocks &&
            mockData.map(element => (
              <CustomCard
                title={element.title}
                contractorCompany={element.contractorCompany}
                location={element.location}
                user={element.user}
                tags={element.tags}
                status={element.status}
                lastEditDate={element.lastEditDate}
                avatar={element.avatar}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default CustomCardsTemplate
