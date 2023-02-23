import React, { FC, useLayoutEffect } from 'react'
import { useAppSelector } from '../../../store/formElements'
import styles from './styles.module.css'

export const Settings: FC = () => {
  const { selectedElement } = useAppSelector(state => state.formConstructor)

  useLayoutEffect(() => {
    /// В зависимости от типа и id selected element применяем пропсы
    console.log(selectedElement)
  }, [selectedElement])

  return <div className={`${styles.settingsBlock} borderCard`}></div>
}
