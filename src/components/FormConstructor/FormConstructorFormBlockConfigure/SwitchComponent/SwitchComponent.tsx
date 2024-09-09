import type { FC } from 'react'

import type { ISwitchComponent } from './types'

import styles from './styles.module.css'
export const SwitchComponent: FC<ISwitchComponent> = ({ testValue, children }) => {
  return children?.find(child => child.props.value === testValue) || null
}
