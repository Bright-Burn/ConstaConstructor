import React, { FC } from 'react'
import { IComponentCard } from './types'
import styles from './styles.module.css'
import { ComponentCardBadge } from './ComponentCardBadge'
import { ComponentCardCheckbox } from './ComponentCardCheckbox'
import { SwitchComponent } from '../../../../SwitchComponent'
import { FormElementTypes } from '../../../../../store/formElements'

export const ComponentCard: FC<IComponentCard> = ({
  id,
  name,
  formElementType,
  groupElementType,
}) => {
  const onDragFormElementStart = (event: React.DragEvent) => {
    if (formElementType) {
      event.dataTransfer.setData('FormElementType', formElementType)
    } else if (groupElementType) {
      event.dataTransfer.setData('FormGroupsType', groupElementType)
    }
    event.stopPropagation()
  }

  return (
    <div
      className={`${styles.componentCard}`}
      draggable={true}
      onDragStart={onDragFormElementStart}
    >
      <SwitchComponent testValue={formElementType || groupElementType || ''}>
        <ComponentCardBadge name={name} value={FormElementTypes.Badge} />
        <ComponentCardCheckbox name={name} value={FormElementTypes.Checkbox} />
      </SwitchComponent>
    </div>
  )
}
