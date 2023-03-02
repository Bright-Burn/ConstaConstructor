export interface ISaveModalCard {
  showSaveModal: boolean
  onSaveProject: (name: string, description: string) => void
  onCloseModalCard: () => void
}
