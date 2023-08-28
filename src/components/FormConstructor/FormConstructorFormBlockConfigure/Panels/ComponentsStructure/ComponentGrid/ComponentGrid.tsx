import React, { FC } from 'react'
import { SwitchComponent } from '../../../SwitchComponent'
import { ComponentCardLayout } from '../ComponentItems/ComponentCard/ComponentCardLayout'
import { IComponentCard } from '../ComponentItems/ComponentCard'
import { FormGroupsDictTypes } from '../../../../coreTypes'
import styles from './styles.module.css'

export const ComponentGrid: FC<IComponentCard> = ({ name, groupElementType, isOuter }) => {
  return (
    <div className={styles.componentGrid}>
      <SwitchComponent testValue={groupElementType || ''}>
        <ComponentCardLayout name={name} value={FormGroupsDictTypes.Layout} isOuter={isOuter} />
        <></>
      </SwitchComponent>
    </div>
  )
}
