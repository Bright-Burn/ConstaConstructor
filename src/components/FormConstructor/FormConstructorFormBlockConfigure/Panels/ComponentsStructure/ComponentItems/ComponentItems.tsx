import { ComponentCard } from './ComponentCard'
import { constaCards } from './content'

import styles from './styles.module.css'

export const ComponentItems = () => {
  return (
    <div className={`${styles.componentItems}`}>
      {constaCards.map(cc => {
        return (
          <ComponentCard
            key={cc.id}
            id={cc.id}
            name={cc.name}
            formElementType={cc.formElementType}
            groupElementType={cc.groupElementType}
          />
        )
      })}
    </div>
  )
}
