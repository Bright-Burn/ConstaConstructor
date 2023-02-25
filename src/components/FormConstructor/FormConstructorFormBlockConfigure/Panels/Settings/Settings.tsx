import React, { FC, useLayoutEffect, useState } from 'react'
import { UnionProps, useAppSelector } from '../../../store/formElements'
import styles from './styles.module.css'

export const Settings: FC = () => {
  const [props, setProps] = useState<UnionProps | undefined>()
  const { selectedElementProps } = useAppSelector(state => state.formConstructor)

  useLayoutEffect(() => {
    if (selectedElementProps) {
      setProps(selectedElementProps)
    }
  }, [selectedElementProps])

  return <div className={`${styles.settingsBlock} borderCard`}>{JSON.stringify(props)}</div>
}
