import type { FC } from 'react'

import { NotFound } from '../../../../Settings/NotFound'
import { BaseComponentsCard } from '../BaseComponentsCard'

import type { IBaseComponentGroupCard } from './types'

import styles from './styles.module.css'

export const BaseComponentGroupCard: FC<IBaseComponentGroupCard> = ({ name, baseComponents }) => {
  return (
    <div className={styles.componentGroupCard}>
      {baseComponents.map(bc => {
        return <BaseComponentsCard key={bc.id} {...bc} />
      })}
      {baseComponents.length === 0 && <NotFound title="Здесь пока ничего нет" description=" " />}
    </div>
  )
}
