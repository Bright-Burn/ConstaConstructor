import { useState } from 'react'
import { ComponentCard } from './ComponentCard'
import { IComponentCard } from './ComponentCard/types'
import styles from './styles.module.css'

export const ComponentItems = () => {
  const [componentCards] = useState<IComponentCard[]>([{ name: 'Панель' }, { name: 'Кнопка' }])

  return (
    <div className={styles.componentItems}>
      {componentCards.map(cc => {
        return <ComponentCard name={cc.name} />
      })}
    </div>
  )
}
