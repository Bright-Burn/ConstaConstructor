import { useState } from 'react'
import { FormElementEnum } from '../../../../store/formElements/types'
import { ComponentCard } from './ComponentCard'
import { IComponentCard } from './ComponentCard/types'
import styles from './styles.module.css'

export const ComponentItems = () => {
  const [componentCards] = useState<IComponentCard[]>([
    {
      id: '1f698797-9a2d-4b3d-a8bf-63f18fcf5f48',
      name: 'Панель',
      formElementType: FormElementEnum.Layout,
    },
    {
      id: '8750ed88-7d1a-4ab0-9d3a-6671f2cd0634',
      name: 'Кнопка',
      formElementType: FormElementEnum.Button,
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
          />
        )
      })}
    </div>
  )
}
