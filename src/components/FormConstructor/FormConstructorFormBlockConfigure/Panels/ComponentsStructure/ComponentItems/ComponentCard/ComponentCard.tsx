import { FC } from 'react'
import { IComponentCard } from './types'
import styles from './styles.module.css'
import { ComponentCardBadge } from './ComponentCardBadge'
import { ComponentCardCheckbox } from './ComponentCardCheckbox'
import { SwitchComponent } from '../../../../SwitchComponent'
import { FormElementDictTypes, FormGroupsDictTypes } from '../../../../../coreTypes'
import { ComponentCardLayout } from './ComponentCardLayout'
import { ComponentCardTabs } from './ComponentCardTabs'
import { ComponentCardText } from './ComponentCardText'
import { ComponentCardTextField } from './ComponentCardTextField'
import { ComponentCardInformer } from './ComponentCardInformer'
import { ComponentCardButton } from './ComponentCardButton'
import { ComponentCardInnerCard } from './ComponentCardInnerCard'
import { ComponentCardList } from './ComponentCardList'
import { ComponentCardRadioButton } from './ComponentCardRadioButton'
import { ComponentCardSwitch } from './ComponentCardSwitch'
import { ComponentCardDatePicker } from './ComponentCardDatePicker'
import { ComponentCardComboBox } from './ComponentCardComboBox'
import { ComponentCardSelect } from './ComponentCardSelect'
import { ComponentCardDataTime } from './ComponentCardDataTime'
import { ComponentCardBreadcrumb } from './ComponentCardBreadcrumb'
import { ComponentCardUser } from './ComponentCardUser'
import { ComponentCardIcon } from './ComponentCardIcon'
import { ComponentCardTag } from './ComponentCardTag'
import { ComponentCardChoiceGroup } from './ComponentCardChoiceGroup'

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
