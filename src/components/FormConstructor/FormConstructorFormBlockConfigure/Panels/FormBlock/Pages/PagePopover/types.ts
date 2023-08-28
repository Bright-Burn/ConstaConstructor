import { RefObject } from 'react'
import { PageOfLayout } from '../types'

export type IPagePopover = {
  isPopoverOpened: boolean
  anchorRef: RefObject<HTMLButtonElement>
  selectedPageId: string
  isNameEdited: boolean
  pageName: string | null
  pages: PageOfLayout[]
  setPopoverOpened: (isPopoverOpened: boolean) => void
  addPage: () => void
  newNamePage: (pageName: string | null) => void
  handleChangePageName: ({ value }: { value: string | null }) => void
  changeValueName: (id: number) => void
  changePage: (pageId: string) => void
}
