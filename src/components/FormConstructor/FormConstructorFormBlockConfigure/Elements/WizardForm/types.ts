import { IconComponent } from '@consta/uikit/Icon'
import { IFormElement } from '../../../store/formElements'

export interface IWizardForm {
  element: IFormElement
}

declare const pointNumbersMap: readonly [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export type progressStepBarItem = {
  label: string
  tooltipContent?: string
  point?: (typeof pointNumbersMap)[number] | IconComponent
  progress?: boolean
  status?: 'normal' | 'success' | 'alert' | 'warning'
  lineStatus?: 'normal' | 'success' | 'alert' | 'warning'
}

export type selectItem = {
  label: string
  id: number
}
