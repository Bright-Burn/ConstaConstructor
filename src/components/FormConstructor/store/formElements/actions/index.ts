export {
  addFormElementWithDefaultInstance,
  addNewFormElement,
  copyFormElementLink,
  deleteFormElement,
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
  loadProjectFromFile,
  loadProjectFromStorage,
  saveBaseComponent,
  saveProjectToFile,
  saveProjectToHTML,
} from './saveLoadActions'
export { setDraggableElement } from './setDraggableElement'
export { reorderFormElement, updateOrders } from './viewOrderingActions'
export {
  clearSameInstanceIds,
  setElementToCopyId,
  setSameElementsIdsById,
  setSelectedView,
} from './viewSelectionActions'
