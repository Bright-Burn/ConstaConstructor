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
      formElementType: FormElementTypes.Card,
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
