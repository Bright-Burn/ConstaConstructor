export {
  addBaseComponent,
  addNewView,
  copyFormElementLink,
  deleteView,
  insertNewElements,
  setInstanceProps,
  setViewLabel,
  updateBaseComponentAction,
} from './elementsStructuresActions'
export { addNewPage, changeActivePage, changePageName, deletePage } from './pageActions'
export type {
  AddElementsWithInstancesPayload,
  AddNewElementPayload,
  ReorderPayload,
  SaveNewProject,
  UpdateBaseComponentPayload,
} from './payloads'
export {
  loadProjectFromStorage,
  loadProjectFromString,
  saveBaseComponentToFile,
  saveProjectToFile,
  saveProjectToHTML,
} from './saveLoadActions'
export { setDraggableElement } from './setDraggableElement'
export { reorderFormElement, updateOrders } from './viewOrderingActions'
export {
  clearSameInstanceIds,
  setSameElementsIdsById,
  setSelectedView,
  setViewToCopyId,
} from './viewSelectionActions'
