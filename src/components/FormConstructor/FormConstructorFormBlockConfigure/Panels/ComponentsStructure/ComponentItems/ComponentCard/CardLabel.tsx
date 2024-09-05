import React from 'react'
import { Text } from '@consta/uikit/Text'

import styles from './styles.module.css'

interface CardLabelType {
  label: string
}

export const CardLabel: React.FC<CardLabelType> = ({ label }) => {
  return (
    <Text className={styles.paddingText} view="primary">
      {label}
    </Text>
  )
}
