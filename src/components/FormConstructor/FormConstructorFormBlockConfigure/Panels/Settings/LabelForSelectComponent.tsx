import type { ReactNode } from 'react'
import { Text } from '@consta/uikit/Text'

import styles from './styles.module.css'

interface LabelForSelectComponentType<T extends ReactNode> {
  item: T
  label: string
}
type componentType = <T extends ReactNode>(item: LabelForSelectComponentType<T>) => JSX.Element
export const getValueForSelect: componentType = props => {
  return (
    <div className={styles.rowSettings}>
      <Text size="xs" view="secondary">
        {props.label}
      </Text>{' '}
      <Text size="xs">{props.item}</Text>
    </div>
  )
}
