export interface ISaveModalCard {
  showSaveModal: boolean
  onSave: (name: string, description: string) => void
  onCloseModalCard: () => void
}
