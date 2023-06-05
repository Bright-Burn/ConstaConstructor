import { FC, useState } from 'react'
import { IBaseComponentGroupCard } from './types'
import styles from './styles.module.css'
import { BaseComponentsCard } from '../BaseComponentsCard'

export const BaseComponentGroupCard: FC<IBaseComponentGroupCard> = ({ name, baseComponents }) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <>
      <div className={`${styles.componentGroupCardName}`}>{name}</div>
      <div className={`${styles.componentGroupCard}`}>
        {baseComponents.map(bc => {
          return <BaseComponentsCard key={bc.id} {...bc} />
        })}
      </div>
    </>
  )
}
