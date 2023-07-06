import { IButtonModalElement } from '../../../../store/formElements'

export interface IButtonActionViewer {
  onCloseViewer: () => void
  buttonGroup: IButtonModalElement
  openViewer: boolean
}
