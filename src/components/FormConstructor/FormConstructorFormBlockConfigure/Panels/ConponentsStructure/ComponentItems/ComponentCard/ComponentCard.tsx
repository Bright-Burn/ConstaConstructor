import React, { FC } from 'react'
import { IComponentCard } from './types'
import styles from './styles.module.css'
import { ComponentCardBadge } from './ComponentCardBadge'
import { ComponentCardCheckbox } from './ComponentCardCheckbox'
import { SwitchComponent } from '../../../../SwitchComponent'
import { FormElementTypes, FormGroupsTypes } from '../../../../../store/formElements'
import { ComponentCardLayout } from './ComponentCardLayout'
import { ComponentCardTabs } from './ComponentCardTabs'
import { ComponentCardText } from './ComponentCardText'
import { ComponentCardTextField } from './ComponentCardTextField'
import { ComponentCardInformer } from './ComponentCardInformer'
import { ComponentCardButton } from './ComponentCardButton'

export const ComponentCard: FC<IComponentCard> = ({ name, formElementType, groupElementType }) => {
  return (
    <div className={`${styles.componentCard}`}>
      <SwitchComponent testValue={formElementType || groupElementType || ''}>
        <ComponentCardBadge name={name} value={FormElementTypes.Badge} />
        <ComponentCardCheckbox name={name} value={FormElementTypes.Checkbox} />
        <ComponentCardLayout name={name} value={FormGroupsTypes.Layout} />
        <ComponentCardText name={name} value={FormGroupsTypes.Card} />
        <ComponentCardTabs name={name} value={FormElementTypes.Tabs} />
        <ComponentCardTextField name={name} value={FormElementTypes.TextField} />
        <ComponentCardText name={name} value={FormElementTypes.Text} />
        <ComponentCardButton name={name} value={FormElementTypes.Button} />
        <ComponentCardInformer name={name} value={FormElementTypes.Informer} />
      </SwitchComponent>
    </div>
  )
}
