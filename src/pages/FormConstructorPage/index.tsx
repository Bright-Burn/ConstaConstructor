import React, { useState } from 'react'

import styles from './styles.module.css'
import { ConstaColor, ConstaPalette } from '../../components/ConstaPalette'

export const FormConstructorPage = () => {
  const [constaColor, setConstaColor] = useState<ConstaColor>('color-bg-link')
  return (
    <div className={styles.mainPage}>
      <ConstaPalette
        color={constaColor}
        size='m'
        onChangeColor={color => {
          setConstaColor(color)
        }}
      />
    </div>
  )
}
