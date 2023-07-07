import { FC } from 'react'
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
import { ComponentCardChoiceGroup } from './ComponentCardChoiceGroup'
import { ComponentCardTag } from './ComponentCardTag'

export const ComponentCard: FC<IComponentCard> = ({ name, formElementType, groupElementType }) => {
  return (
    <div className={`${styles.componentCard}`}>
      <SwitchComponent testValue={formElementType || groupElementType || ''}>
        <ComponentCardBadge name={name} value={FormElementTypes.Badge} />
        <ComponentCardCheckbox name={name} value={FormElementTypes.Checkbox} />
        <ComponentCardLayout name={name} value={FormGroupsTypes.Layout} />
        <ComponentCardInnerCard name={name} value={FormGroupsTypes.Card} />
        <ComponentCardTabs name={name} value={FormElementTypes.Tabs} />
        <ComponentCardTextField name={name} value={FormElementTypes.TextField} />
        <ComponentCardText name={name} value={FormElementTypes.Text} />
        <ComponentCardButton name={name} value={FormElementTypes.Button} />
        <ComponentCardInformer name={name} value={FormElementTypes.Informer} />
        <ComponentCardList name={name} value={FormElementTypes.List} />
        <ComponentCardRadioButton name={name} value={FormElementTypes.RadioButton} />
        <ComponentCardSwitch name={name} value={FormElementTypes.Switch} />
        <ComponentCardDatePicker name={name} value={FormElementTypes.DatePicker} />
        <ComponentCardComboBox name={name} value={FormElementTypes.ComboBox} />
        <ComponentCardSelect name={name} value={FormElementTypes.Select} />
        <ComponentCardDataTime name={name} value={FormElementTypes.DataTime} />
        <ComponentCardBreadcrumb name={name} value={FormElementTypes.BreadcrumbsForm} />
        <ComponentCardUser name={name} value={FormElementTypes.User} />
        <ComponentCardIcon name={name} value={FormElementTypes.Icon} />
        <ComponentCardChoiceGroup name={name} value={FormElementTypes.ChoiceGroup} />
        <ComponentCardTag name={name} value={FormElementTypes.Tag} />
      </SwitchComponent>
    </div>
  )
}
