import { constaCards } from '../ComponentItems/content'
import { ComponentGrid } from './ComponentGrid'
import styles from './styles.module.css'

export const ComponentsGrid = () => {
  return (
    <div className={styles.componentItems}>
      {constaCards.map(cc => {
        return (
          <ComponentGrid
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
