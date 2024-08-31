import { getAllChildrenElements } from '../../../../../utils'
import type { RootState } from '../../../../setupStore'
import { selectViewAll, selectViewById } from '../../../adapters'
import type { ChangeElementLinkCountPayload } from '../../../reducers'
import { getViewInfosByIds } from '../../../selectors'

export const getViewConnectionsToDelete = (id: string, state: RootState) => {
  // Получаем элемент для удаления по id
  const views = selectViewById(state, id)
  // Если элемент для удаления не найден, возвращаем пустые массивы
  if (!views) {
    return {
      viewInfos: [],
      viewsToDelete: [],
      instanceReferencesToDelete: [],
    }
  }
  // Получаем все элементы из состояния
  const allViews = selectViewAll(state)
  // Формируем список элементов для удаления
  const viewsToDelete = [views, ...getAllChildrenElements(views, allViews)]
  // Формируем список viewInfo, которые будут удалены
  const viewInfos = getViewInfosByIds(viewsToDelete.map(view => view.id))(state)

  // Формируем список ссылок на инстансы для удаления
  const instanceReferencesToDelete: ChangeElementLinkCountPayload[] = viewsToDelete.map(element => {
    return {
      id: element.instanceId,
      type: 'DEC',
    }
  })

  return {
    viewsToDelete,
    instanceReferencesToDelete,
    viewInfos,
  }
}
