import React from 'react'

import type { AllElementTypes, FormInstance } from '../../../coreTypes'
import { getSelectedElementPropsSelector, useAppSelector } from '../../../store'

import styles from './styles.module.css'
type keyValue = [
  keyof FormInstance<AllElementTypes>['props']['props'],
  FormInstance<AllElementTypes>['props']['props'] | undefined,
][]

export const DevModeSettings = () => {
  const selectedElementProps = useAppSelector(getSelectedElementPropsSelector)
  console.log(selectedElementProps)
  let propsKeyValue: keyValue = []
  const testRes: React.ReactNode[] = []
  const className: React.ReactNode[] = []

  if (selectedElementProps?.props) {
    propsKeyValue = Object.entries(selectedElementProps.props) as keyValue
  }
  propsKeyValue.forEach(props => {
    if (props[1] && props[0] === 'styles') {
      for (const styleProp in props[1]) {
        const classStyles = props[1]
        className.push(
          <div>
            {styleProp}: {classStyles[styleProp]}
          </div>,
        )
      }
    } else if (props[1] && typeof props[1] !== 'object') {
      testRes.push(
        <div>
          {props[0]}: {props[1]}
        </div>,
      )
    }
  })

  return (
    <div className={`${styles.settingsBlock} ${styles.settingsContainer} `}>
      <div>Переданные в компонент пропсы: </div>
      {testRes}
      <div>CSS стили: </div>
      {className}
    </div>
  )
}
