import type { FC } from 'react'
import React from 'react'

import { FormGroupsDictTypes } from '../../../../coreTypes'
import { SwitchComponent } from '../../../SwitchComponent'
import type { IComponentCard } from '../ComponentItems/ComponentCard'
import { ComponentCardLayout } from '../ComponentItems/ComponentCard/ComponentCardLayout'

import styles from './styles.module.css'

export const ComponentGrid: FC<IComponentCard> = ({ name, groupElementType, isOuter }) => {
  return (
    <div>
      <SwitchComponent testValue={groupElementType || ''}>
        <ComponentCardLayout name={name} value={FormGroupsDictTypes.Layout} isOuter={isOuter} />
        <></>
      </SwitchComponent>
    </div>
  )
}
