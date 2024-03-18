import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { IconForward } from '@consta/icons/IconForward'
import { Badge } from '@consta/uikit/Badge'
import { Button } from '@consta/uikit/Button'
import { ProgressStepBar } from '@consta/uikit/ProgressStepBar'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import type { IFormElementWizardForm, wizardFormProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayerFullWidth } from '../../SelectableLayer'

import { steps, wizardFromCompanyBlock } from './mocks'
import type { IWizardForm } from './types'

import css from './styles.module.css'

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
      elementType={FormElementDictTypes.CardWithBarChart}
      className={css.fullScreen}>
      <div className={`${css.wizardFomr__Screen} m-t-m m-l-2xl m-r-2xl m-b-2xl`}>
        <div className="m-b-6xl">
          <div className="container-row space-center m-b-2xl">
            <Text size="l" className="m-r-m">
              Акт нарушения №22 от 19.02.2023
            </Text>
            <Badge size="s" status="system" label="черновик" />
          </div>
          <div className={`${css.flexCenter} m-b-2xl`}>
            <ProgressStepBar
              steps={steps}
              getItemLabel={step => step.label}
              activeStepIndex={0}
              size="s"
            />
          </div>
          <div className={css.wizardForm__Info}>
            {wizardFromCompanyBlock.map((field, index) => (
              <div key={index} className="container-row space-center space-between m-b-xs">
                <Text size="s">{field.label}</Text>
                <Select
                  className={css.selectWidth}
                  items={field.items}
                  value={field.items[0]}
                  size="s"
                  onChange={() => null}
                />
              </div>
            ))}
            <div className="container-row space-center m-b-xs">
              <Text size="s" className={`${css.textWidth} m-r-xs`}>
                Подрядная организация
              </Text>
              <Switch checked={true} />
            </div>
            <div className="container-row space-center space-between m-b-xs">
              <Text size="s">Компания</Text>
              <TextField
                className={css.selectWidth}
                value="ООО «Нефть-Ямал»"
                width="full"
                size="s"
              />
            </div>
          </div>
        </div>
        <div className={css.buttonPosition}>
          <Button label="Далее" iconRight={IconForward} />
        </div>
      </div>
    </SelectableLayerFullWidth>
  )
}
