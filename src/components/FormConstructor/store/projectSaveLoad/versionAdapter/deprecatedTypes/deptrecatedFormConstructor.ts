import type {
  AllElementTypes,
  FormInstance,
  IFormConstructor,
  IFormElement,
  IGroupElement,
  ViewInfo,
} from '../../../../coreTypes'

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
