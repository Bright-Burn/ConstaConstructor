import type { IFormElement, IGroupElement } from './types'

type ElementId = (IFormElement | IGroupElement)['id']

export type ViewtInfo = {
  id: ElementId
  label: string | null
}
