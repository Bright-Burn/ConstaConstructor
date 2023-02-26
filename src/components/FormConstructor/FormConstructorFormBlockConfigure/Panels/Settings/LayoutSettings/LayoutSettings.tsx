import React, { useLayoutEffect, useState } from 'react'
import { LayoutElementProps, useAppSelector } from '../../../../store/formElements'
import styles from './styles.module.css'

export const LayoutSettings = () => {
  const [props, setProps] = useState<LayoutElementProps | undefined>()

  const { selectedElementProps } = useAppSelector(state => state.formConstructor)

  useLayoutEffect(() => {
    if (selectedElementProps) {
      setProps(selectedElementProps as LayoutElementProps)
      console.log(selectedElementProps)
    }
  }, [selectedElementProps])

  return <div className={styles.layoutSettings}></div>
}
