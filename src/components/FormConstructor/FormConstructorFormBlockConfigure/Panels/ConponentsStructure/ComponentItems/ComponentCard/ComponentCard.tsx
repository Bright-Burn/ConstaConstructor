import React, { FC } from 'react'
import { IComponentCard } from './types'
import styles from './styles.module.css'
import { ComponentCardBadge } from './ComponentCardBadge'
import { ComponentCardCheckbox } from './ComponentCardCheckbox'
import { SwitchComponent } from '../../../../SwitchComponent'
import { FormElementTypes } from '../../../../../store/formElements'

export const ComponentCard: FC<IComponentCard> = ({ name, formElementType, groupElementType }) => {
  return (
    <div className={`${styles.componentCard}`}>
      <SwitchComponent testValue={formElementType || groupElementType || ''}>
        <ComponentCardBadge name={name} value={FormElementTypes.Badge} />
        <ComponentCardCheckbox name={name} value={FormElementTypes.Checkbox} />
      </SwitchComponent>
    </div>
  )
}
