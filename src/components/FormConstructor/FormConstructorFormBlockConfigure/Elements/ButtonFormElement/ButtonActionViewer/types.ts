import { IButtonGroup } from '../../../../store/formElements'

export interface IButtonActionViewer {
  onCloseViewer: () => void
  buttonGroup: IButtonGroup
  openViewer: boolean
}

