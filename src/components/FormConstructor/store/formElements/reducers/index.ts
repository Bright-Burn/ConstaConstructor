export type { ChangeElementLinkCountPayload, LinkCountType } from './instance'
export {
  addNewFormInstance,
  changeElementLinkCount,
  setSameInstanceElementsIds,
  updateFormInstance,
} from './instance'
export type { ChangeActivePage, ChangeNamePage, DeletePage } from './pages'
export { addNewPage, changeActivePage, changePageName, deletePage } from './pages'
export { repalceState } from './repalceState'
export type { SetNewElementDraggableElem, SetNewSelectedView } from './view'
export {
  addNewView,
  deleteFormElement,
  deselectView,
  reorderView,
  setDraggableElement,
  setSelectedView,
  setViewToCopyId,
  updateOrders,
  updateView,
} from './view'
export { addViewInfos, deleteViewInfos, updateViewInfo } from './viewInfo'
