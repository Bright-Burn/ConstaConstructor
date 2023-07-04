export type ITreeItem = {
  key: string
  title: string
  visible: boolean
  children: Array<ITreeItem>
  disableCheckbox: boolean
}

export interface ITree {
  data: ITreeItem[]
}
