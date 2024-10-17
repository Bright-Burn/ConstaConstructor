import type { IFormElement, IGroupElement } from '../../../../coreTypes'
import type { IBaseComponent } from '../../../baseComponentsItems'

export type BaseComponentToSave_Deprecated = Pick<
  IBaseComponent,
  'id' | 'name' | 'description' | 'viewInfos' | 'instances'
> & {
  childrenElementList: (IFormElement | IGroupElement)[]
}
