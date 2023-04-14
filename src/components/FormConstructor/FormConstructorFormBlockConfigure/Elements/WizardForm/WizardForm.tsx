import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements'
import {
  IFormElementWizardForm,
  wizardFormProps,
} from '../../../store/formElements/wizardFormTypes'
import { SelectableLayerFullWidth } from '../../SelectableLayer/SelectableLayerFullWidth'
import { IWizardForm } from './types'
import css from './styles.module.css'
import { Button } from '@consta/uikit/Button'
import { Text } from '@consta/uikit/Text'
import { ProgressStepBar } from '@consta/uikit/ProgressStepBar'
import { IconForward } from '@consta/icons/IconForward'
import { Badge } from '@consta/uikit/Badge'
import { steps, wizardFromCompanyBlock } from './mocks'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { TextField } from '@consta/uikit/TextField'

export const WizardForm: FC<IWizardForm> = ({ element }) => {
  const [formProps, setFormProps] = useState<wizardFormProps>()

  useLayoutEffect(() => {
    const simpleFormElement = element as IFormElementWizardForm
    setFormProps(simpleFormElement.props)
  }, [element])

  return (
    <SelectableLayerFullWidth
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.CardWithBarChart}
      className={'container-row'}
    >
      <div className='m-t-m m-l-2xl m-r-2xl m-b-2xl'>
        <div className='m-b-6xl'>
          <div className='container-row space-center m-b-2xl'>
            <Text size='l' className='m-r-m'>
              Акт нарушения №22 от 19.02.2023
            </Text>
            <Badge size='s' status='system' label='черновик' />
          </div>
          <div className={`${css.flexCenter} m-b-2xl`}>
            <ProgressStepBar
              steps={steps}
              getItemLabel={step => step.label}
              activeStepIndex={0}
              size='s'
            />
          </div>
          <div className={css.wizardForm__Info}>
            {wizardFromCompanyBlock.map(field => (
              <div className='container-row space-center space-between m-b-xs'>
                <Text size='s'>{field.label}</Text>
                <Select
                  className={css.selectWidth}
                  items={field.items}
                  value={field.items[0]}
                  onChange={() => null}
                  size='s'
                />
              </div>
            ))}
            <div className='container-row space-center m-b-xs'>
              <Text size='s' className={`${css.textWidth} m-r-xs`}>
                Подрядная организация
              </Text>
              <Switch checked={true} />
            </div>
            <div className='container-row space-center space-between m-b-xs'>
              <Text size='s'>Компания</Text>
              <TextField
                className={css.selectWidth}
                value='ООО «Нефть-Ямал»'
                width='full'
                size='s'
              />
            </div>
          </div>
        </div>
        <div className={css.buttonPosition}>
          <Button label='Далее' iconRight={IconForward} />
        </div>
      </div>
    </SelectableLayerFullWidth>
  )
}
