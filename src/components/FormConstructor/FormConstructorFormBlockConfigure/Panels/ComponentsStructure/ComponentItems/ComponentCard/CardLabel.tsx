import React from 'react'
import { Text } from '@consta/uikit/Text'

import { ElementsIcon, LayoutIcon } from '../../ElementIcons'

import styles from './styles.module.css'

interface CardLabelType {
  label: string
  onStartDragComponentCard: () => void
  isGroupIcon?: boolean
}

export const CardLabel: React.FC<CardLabelType> = ({
  label,
  onStartDragComponentCard,
  isGroupIcon = false,
}) => {
  return (
    <div draggable={true} className={styles.labelContainer} onDragStart={onStartDragComponentCard}>
      {isGroupIcon ? <LayoutIcon /> : <ElementsIcon />}

      <Text className={styles.paddingText} view="primary" size="xs">
        {label}
      </Text>
    </div>
  )
}
