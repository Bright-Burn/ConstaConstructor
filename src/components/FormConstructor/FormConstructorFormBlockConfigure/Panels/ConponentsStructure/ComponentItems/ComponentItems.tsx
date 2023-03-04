import { ComponentCard } from '../ComponentCard'
import { constaCards } from './content'
import styles from './styles.module.css'

export const ComponentItems = () => {
  return (
    <div className={`${styles.componentItems} borderCard`}>
      {constaCards.map(cc => {
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
