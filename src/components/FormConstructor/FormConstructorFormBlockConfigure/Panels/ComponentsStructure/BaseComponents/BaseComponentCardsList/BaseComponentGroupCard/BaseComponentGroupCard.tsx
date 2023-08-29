import { FC } from 'react'
import { IBaseComponentGroupCard } from './types'
import styles from './styles.module.css'
import { BaseComponentsCard } from '../BaseComponentsCard'
import { NotFound } from '../../../../Settings/NotFound'

export const BaseComponentGroupCard: FC<IBaseComponentGroupCard> = ({ name, baseComponents }) => {
  return (
    <div className={`${styles.componentGroupCard}`}>
      {baseComponents.map(bc => {
        return <BaseComponentsCard key={bc.id} {...bc} />
      })}
      {baseComponents.length === 0 && <NotFound title='Здесь пока ничего нет' description=' ' />}
    </div>
  )
}
