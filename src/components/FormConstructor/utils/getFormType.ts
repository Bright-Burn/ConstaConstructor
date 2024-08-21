import type { ElementTypes, FormElementTypes, FormGroupsTypes } from '../coreTypes'
import { FormGroupsDictTypes } from '../coreTypes'

export const getFormType = (type: FormGroupsTypes | FormElementTypes): ElementTypes => {
  const allGroupTypes: string[] = Object.values(FormGroupsDictTypes)
  return new Set(allGroupTypes).has(type) ? 'FormGroups' : 'FormElement'
}
