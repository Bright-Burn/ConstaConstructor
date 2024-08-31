import { pushHistoryElement } from '../../../../history'
import type { AppDispatch, RootState } from '../../../../setupStore'
import { formConstructorSlice } from '../../../formElementsSlice'
import { formInstancesSelector } from '../../../selectors'
import { deleteViews } from '../combinedViewActions'

import { getViewConnectionsToDelete } from './getViewConnectionsToDelete'

/**
 * Действие пользователя - удалить элемент
 * @param id Идентифкатор элемента
 */
export const deleteView = (id: string) => (dispatch: AppDispatch, getState: () => RootState) => {
  const state = getState()
  const { instanceReferencesToDelete, viewsToDelete, viewInfos } = getViewConnectionsToDelete(
    id,
    state,
  )
  const instances = formInstancesSelector(viewsToDelete.map(elem => elem.instanceId))(state)
  const idsForDelete = viewsToDelete.map(el => el.id)

  dispatch(formConstructorSlice.actions.changeElementLinkCount(instanceReferencesToDelete))
  dispatch(deleteViews(idsForDelete))
  dispatch(
    pushHistoryElement(() => {
      dispatch(formConstructorSlice.actions.addNewView(viewsToDelete))
      dispatch(formConstructorSlice.actions.addViewInfos(viewInfos))
      dispatch(formConstructorSlice.actions.addNewFormInstance(instances))
      dispatch(
        formConstructorSlice.actions.changeElementLinkCount(
          instanceReferencesToDelete.map(ref => {
            return { ...ref, type: 'INC' }
          }),
        ),
      )
    }),
  )
}

/**
 * Обратное действие на добавление элемента - удалить элемент
 * @param id Идентифкатор элемента
 */
export const deleteViewRollback =
  (id: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const { instanceReferencesToDelete, viewsToDelete } = getViewConnectionsToDelete(id, state)
    dispatch(formConstructorSlice.actions.changeElementLinkCount(instanceReferencesToDelete))
    const idsForDelete = viewsToDelete.map(view => view.id)
    dispatch(deleteViews(idsForDelete))
  }
