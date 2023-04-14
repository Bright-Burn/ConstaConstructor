import { FC, useState } from 'react'
import { IBaseComponentGroupCard } from './types'
import styles from './styles.module.css'
import { Collapse } from '@consta/uikit/Collapse'
import { BaseComponentsCard } from '../BaseComponentsCard'
import { Text } from '@consta/uikit/Text'

export const BaseComponentGroupCard: FC<IBaseComponentGroupCard> = ({ name, baseComponents }) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <div className={`${styles.componentGroupCard} borderCard`}>
      <Collapse
        className={styles.componentGroupCardCollapse}
        size={'xs'}
        label={<Text size='m'>{name}</Text>}
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
      >
        {baseComponents.map(bc => {
          return <BaseComponentsCard key={bc.id} {...bc} />
        })}
      </Collapse>
    </div>
  )
}
