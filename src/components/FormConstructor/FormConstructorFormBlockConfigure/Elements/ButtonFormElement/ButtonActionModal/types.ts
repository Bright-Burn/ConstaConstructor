import { IButtonModalElement } from '../../../../coreTypes'

export interface IButtonActionViewer {
  onCloseViewer: () => void
  buttonGroup: IButtonModalElement
  openViewer: boolean
}
