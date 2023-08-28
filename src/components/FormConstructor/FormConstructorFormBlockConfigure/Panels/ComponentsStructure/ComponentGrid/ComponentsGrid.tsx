import { groupElement } from '../ComponentItems/content'
import { ComponentGrid } from './ComponentGrid'
import styles from './styles.module.css'

export const ComponentsGrid = () => {
  return (
    <div className={styles.componentItems}>
      {groupElement.map(cc => {
        return (
          <ComponentGrid
            id={cc.id}
            key={cc.id}
            name={cc.name}
            groupElementType={cc.groupElementType}
            isOuter={cc.isOuter}
          />
        )
      })}
    </div>
  )
}
