import React, { FC } from 'react'
import { SwitchComponent } from '../../../SwitchComponent'
import { ComponentCardLayout } from '../ComponentItems/ComponentCard/ComponentCardLayout'
import { IComponentCard } from '../ComponentItems/ComponentCard'
import { FormGroupsTypes } from '../../../../coreTypes'
import styles from './styles.module.css'

export const ComponentGrid: FC<IComponentCard> = ({ name, formElementType, groupElementType }) => {
  return (
    <div className={styles.componentGrid}>
      <SwitchComponent testValue={formElementType || groupElementType || ''}>
        <ComponentCardLayout name={name} value={FormGroupsTypes.Layout} isOuter={false} />
        <></>
      </SwitchComponent>
      <SwitchComponent testValue={formElementType || groupElementType || ''}>
        <></>
        <ComponentCardLayout name={name} value={FormGroupsTypes.Layout} isOuter={true} />
      </SwitchComponent>
    </div>
  )
}
