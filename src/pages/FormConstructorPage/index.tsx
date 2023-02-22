import React from 'react'
import { FormConstructor } from '../../components/FormConstructor'
import styles from './styles.module.css'

export const FormConstructorPage = () => {
  return (
    <div className={styles.mainPage}>
      <FormConstructor />
    </div>
  )
}
