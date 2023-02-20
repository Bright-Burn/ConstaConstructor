import { useState } from 'react'
import uuid from 'react-uuid'
import { FormElementTypes } from '../../../../store/formElements/types'
import { ComponentCard } from './ComponentCard'
import { IComponentCard } from './ComponentCard/types'
import styles from './styles.module.css'

export const ComponentItems = () => {
  const [componentCards] = useState<IComponentCard[]>([
    {
      id: uuid(),
      name: 'Кнопка',
      formElementType: FormElementTypes.Button,
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
