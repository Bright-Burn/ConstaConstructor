import type { IFormElement, IGroupElement } from './types'

type ElementId = (IFormElement | IGroupElement)['id']

export type ViewInfo = {
  id: ElementId
  label: string | null
}
