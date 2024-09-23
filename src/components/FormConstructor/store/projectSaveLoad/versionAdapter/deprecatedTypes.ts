import type { Props } from '@consta/uikit/Button'

import type {
  AllElementTypes,
  BaseProps,
  FormInstance,
  IconNames,
  IFormConstructor,
  IFormElement,
  IGroupElement,
  ViewInfo,
} from '../../../coreTypes'

// Устарелывый тип макетов
export type FormConstructorToSave_Deprecated = Pick<
  IFormConstructor,
  'instanceManager' | 'numberOfPages' | 'pages' | 'selectedPageId'
> & {
  /*Сохраняем списком*/
  allElements: (IFormElement | IGroupElement)[]
  /*Сохраняем списком*/
  elementInstances: FormInstance<AllElementTypes>[]
  /*Сохраняем списом*/
  viewInfos: ViewInfo[]
}

// Устарелывый тип для кнопки
export interface ButtonProps_Deprecated extends BaseProps, Props {
  icon?: IconNames
  iconR?: IconNames
  filled?: boolean
}
