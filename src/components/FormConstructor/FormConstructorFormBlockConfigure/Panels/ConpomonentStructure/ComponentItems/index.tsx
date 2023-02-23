import { useState } from 'react'
import uuid from 'react-uuid'
import { ElementTypes, FormElementTypes } from '../../../../store/formElements/types'
import { ComponentCard } from './ComponentCard'
import { IComponentCard } from './ComponentCard/types'
import styles from './styles.module.css'

export const ComponentItems = () => {
  const [componentCards] = useState<IComponentCard[]>([
    {
      id: uuid(),
      name: 'Панель',
      elemType: ElementTypes.Layout,
    },
    {
      id: uuid(),
      name: 'Кнопка',
      formElementType: FormElementTypes.Button,
      elemType: ElementTypes.FormElement,
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
            elemType={cc.elemType}
          />
        )
      })}
    </div>
  )
}
