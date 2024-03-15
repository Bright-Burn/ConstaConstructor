import type { FC } from 'react'

import { FormElementDictTypes, FormGroupsDictTypes } from '../../../../../coreTypes'
import { SwitchComponent } from '../../../../SwitchComponent'

import { ComponentCardBadge } from './ComponentCardBadge'
import { ComponentCardBreadcrumb } from './ComponentCardBreadcrumb'
import { ComponentCardButton } from './ComponentCardButton'
import { ComponentCardCheckbox } from './ComponentCardCheckbox'
import { ComponentCardChoiceGroup } from './ComponentCardChoiceGroup'
import { ComponentCardComboBox } from './ComponentCardComboBox'
import { ComponentCardDataTime } from './ComponentCardDataTime'
import { ComponentCardDatePicker } from './ComponentCardDatePicker'
import { ComponentCardIcon } from './ComponentCardIcon'
import { ComponentCardInformer } from './ComponentCardInformer'
import { ComponentCardInnerCard } from './ComponentCardInnerCard'
import { ComponentCardLayout } from './ComponentCardLayout'
import { ComponentCardList } from './ComponentCardList'
import { ComponentCardRadioButton } from './ComponentCardRadioButton'
import { ComponentCardSelect } from './ComponentCardSelect'
import { ComponentCardSwitch } from './ComponentCardSwitch'
import { ComponentCardTabs } from './ComponentCardTabs'
import { ComponentCardTag } from './ComponentCardTag'
import { ComponentCardText } from './ComponentCardText'
import { ComponentCardTextField } from './ComponentCardTextField'
import { ComponentCardUser } from './ComponentCardUser'
import type { IComponentCard } from './types'

import styles from './styles.module.css'

export const ComponentCard: FC<IComponentCard> = ({ name, formElementType, groupElementType }) => {
  return (
    <div className={`${styles.componentCard}`}>
      <SwitchComponent testValue={formElementType || groupElementType || ''}>
        <ComponentCardBadge name={name} value={FormElementDictTypes.Badge} />
        <ComponentCardCheckbox name={name} value={FormElementDictTypes.Checkbox} />
        <ComponentCardLayout name={name} value={FormGroupsDictTypes.Layout} />
        <ComponentCardInnerCard name={name} value={FormGroupsDictTypes.Card} />
        <ComponentCardTabs name={name} value={FormElementDictTypes.Tabs} />
        <ComponentCardTextField name={name} value={FormElementDictTypes.TextField} />
        <ComponentCardText name={name} value={FormElementDictTypes.Text} />
        <ComponentCardButton name={name} value={FormElementDictTypes.Button} />
        <ComponentCardInformer name={name} value={FormElementDictTypes.Informer} />
        <ComponentCardList name={name} value={FormElementDictTypes.List} />
        <ComponentCardRadioButton name={name} value={FormElementDictTypes.RadioButton} />
        <ComponentCardSwitch name={name} value={FormElementDictTypes.Switch} />
        <ComponentCardDatePicker name={name} value={FormElementDictTypes.DatePicker} />
        <ComponentCardComboBox name={name} value={FormElementDictTypes.ComboBox} />
        <ComponentCardSelect name={name} value={FormElementDictTypes.Select} />
        <ComponentCardDataTime name={name} value={FormElementDictTypes.DataTime} />
        <ComponentCardBreadcrumb name={name} value={FormElementDictTypes.BreadcrumbsForm} />
        <ComponentCardUser name={name} value={FormElementDictTypes.User} />
        <ComponentCardIcon name={name} value={FormElementDictTypes.Icon} />
        <ComponentCardTag name={name} value={FormElementDictTypes.Tag} />
        <ComponentCardChoiceGroup name={name} value={FormElementDictTypes.ChoiceGroup} />
      </SwitchComponent>
    </div>
  )
}
