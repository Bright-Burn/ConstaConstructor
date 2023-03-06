import { useState } from 'react'
import uuid from 'react-uuid'
import { FormElementTypes, FormGroupsTypes } from '../../../../store/formElements/types'
import { ComponentCard, IComponentCard } from './ComponentCard'
import styles from './styles.module.css'

export const ComponentItems = () => {
  const [componentCards] = useState<IComponentCard[]>([
    {
      id: uuid(),
      name: 'Панель внутренняя',
      groupElementType: FormGroupsTypes.LayoutInner,
    },
    {
      id: uuid(),
      name: 'Панель внешняя',
      groupElementType: FormGroupsTypes.LayoutOuter,
    },
    {
      id: uuid(),
      name: 'Кнопка',
      formElementType: FormElementTypes.Button,
    },
    {
      id: uuid(),
      name: 'Карточка',
      groupElementType: FormGroupsTypes.Card,
    },
    {
      id: uuid(),
      name: 'Badge',
      formElementType: FormElementTypes.Badge,
    },
    {
      id: uuid(),
      name: 'Табы',
      formElementType: FormElementTypes.Tabs,
    },
    {
      id: uuid(),
      name: 'Informer',
      formElementType: FormElementTypes.Informer,
    },
    {
      id: uuid(),
      name: 'Text',
      formElementType: FormElementTypes.Text,
    },
    {
      id: uuid(),
      name: 'Checkbox',
      formElementType: FormElementTypes.Checkbox,
    },
    {
      id: uuid(),
      name: 'Icon',
      formElementType: FormElementTypes.Icon,
    },
  ])

  return (
    <div className={`${styles.componentItems} borderCard`}>
      {componentCards.map(cc => {
        return (
          <ComponentCard
            id={cc.id}
            key={cc.id}
            name={cc.name}
            formElementType={cc.formElementType}
            groupElementType={cc.groupElementType}
          />
        )
      })}
    </div>
  )
}
