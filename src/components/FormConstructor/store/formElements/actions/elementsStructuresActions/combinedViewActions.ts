import type { IFormElement, IGroupElement } from '../../../../coreTypes'
import type { AppDispatch } from '../../../setupStore'
import { formConstructorSlice } from '../../formElementsSlice'

/**
 * Добавляет view элементы на форму ввода, добалвяет записи ViewInfo для хранения описания
 * @param views Список элементов для добавления
 */
export const addViews = (views: (IFormElement | IGroupElement)[]) => (dispatch: AppDispatch) => {
  dispatch(formConstructorSlice.actions.addNewView(views))
}

export const deleteViews = (ids: string[]) => (dispatch: AppDispatch) => {
  dispatch(formConstructorSlice.actions.deleteFormElement(ids))
  dispatch(formConstructorSlice.actions.deleteViewInfos(ids))
}
