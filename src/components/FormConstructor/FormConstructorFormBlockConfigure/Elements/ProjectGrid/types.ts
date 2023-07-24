import { IFormElement } from '../../../coreTypes'

export interface IProjectGrid {
  element: IFormElement
}

export type ProjectTableView = {
  id: string
  name: string
  companyName?: string
  fieldName?: string
  createdBy?: string
  changedAt?: string
  status?: string
  icons?: string
}
