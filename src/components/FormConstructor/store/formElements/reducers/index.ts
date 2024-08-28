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
export type { SetNewElementDraggableElem, SetNewSelectedElement } from './view'
export {
  addNewFormElementAdapter,
  deleteFormElement,
  deselectElement,
  reorderFormElements,
  setDraggableElement,
  setElementToCopyId,
  setSelectedView,
  updateFormElements,
  updateOrders,
} from './view'
export { updateViewInfo, addViewInfos, deleteViewInfos } from './viewInfo'
