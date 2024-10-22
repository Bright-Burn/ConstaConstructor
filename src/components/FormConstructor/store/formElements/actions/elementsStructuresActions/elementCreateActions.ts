import uuid from 'react-uuid'

import type {
  AllElementTypes,
  FormInstance,
  IFormElement,
  IGroupElement,
} from '../../../../coreTypes'
import {
  copyInstances,
  deepCopyElements,
  getAllChildrenElements,
  getFormType,
} from '../../../../utils'
import { pushHistoryElement } from '../../../history'
import type { AppDispatch, RootState } from '../../../setupStore'
import { selectViewAll } from '../../adapters'
import { isDragFormElement, isDragGroupElement } from '../../dragElemGuards'
import { formConstructorSlice } from '../../formElementsSlice'
import type { ChangeElementLinkCountPayload } from '../../reducers'
import {
  elementToCopyIdSelector,
  formInstancesSelector,
  getElementById,
  getSiblingsCount,
} from '../../selectors'
import type { AddElementsWithInstancesPayload, AddNewElementPayload } from '../payloads'
import { clearSameInstanceIds } from '../viewSelectionActions'

import { copyViewInfos } from './copyViewInfos'
import { deleteViewRollback } from './deleteViewActions'

/**
 * Функция добавляет новые view и instnce
 * @param addPayloads Полезные данные
 * @returns
 */
export const addNewView =
  (addPayloads: AddNewElementPayload[]) => (dispatch: AppDispatch, getState: () => RootState) => {
    //Список элементов для добавления(отображение)
    const viewsToAdd: (IFormElement | IGroupElement)[] = []
    // Массив для хранения изменений количества ссылок на элементы
    const changeLinksCountPayloads: ChangeElementLinkCountPayload[] = []
    // Массив для хранения новых инстансов
    const formInstances: FormInstance<AllElementTypes>[] = []
    addPayloads.forEach(payload => {
      //Новый порядковый номер - количество всех дочерних элементов в слое + 1
      const order = getSiblingsCount(getState(), payload.newParentElementId) + 1
      const payloadElement = payload.element
      const instanceId = uuid()

      // Добавляем новый инстанс
      formInstances.push({
        id: instanceId,
        props: payload.element.props,
      })
      // Добавляем изменение количества ссылок
      changeLinksCountPayloads.push({ id: instanceId, type: 'INC' })
      // Если элемент является группирующим
      if (isDragGroupElement(payloadElement)) {
        const elementType = payloadElement.type
        viewsToAdd.push({
          id: payloadElement.id,
          isOuter: payloadElement.isOuter,
          instanceId,
          order,
          parentId: payload.newParentElementId,
          type: elementType,
        })
        // Если элемент является обычным
      } else if (isDragFormElement(payloadElement)) {
        const elementType = payloadElement.type
        viewsToAdd.push({
          id: payloadElement.id,
          instanceId,
          parentId: payload.newParentElementId,
          order,
          type: elementType,
        })
      }
    })
    // Диспатчем в стор подготовленный данные
    // Диспатчим действия для добавления новых элементов
    dispatch(formConstructorSlice.actions.addNewView(viewsToAdd))
    // Диспатчим действия для изменения количества ссылок
    dispatch(formConstructorSlice.actions.changeElementLinkCount(changeLinksCountPayloads))
    // Диспатчим действия для добавления новых инстансов
    dispatch(formConstructorSlice.actions.addNewFormInstance(formInstances))
    // Диспатчем в стор коллбек на отмену изменений
    dispatch(
      pushHistoryElement(() => {
        dispatch(clearSameInstanceIds())
        viewsToAdd.forEach(elem => {
          dispatch(deleteViewRollback(elem.id))
        })
      }),
    )
  }

/**
 * Добаляет новый элемент, использует существующий инстанс - Функционал копирования с наследованием
 * @param elementId Идентификатиор view
 * @param elementType Тип view
 * @returns
 */
export const copyFormElementLink =
  (elementId: string, elementType: AllElementTypes) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()

    const elementToCopyId = elementToCopyIdSelector(state)

    if (!elementToCopyId) {
      return
    }

    let insertionParentId = null
    // Вставка разрешена только в группирующие элементы
    if (getFormType(elementType) === 'FormGroups') {
      insertionParentId = elementId
    } else {
      return
    }

    //Верхнеуровневый элемент для копирования, может быть как группирующим, так и обычным
    const upperElementToCopy = getElementById(elementToCopyId)(state)

    // Получаем все элементы из состояния
    const allElements = selectViewAll(state)
    // Массив для хранения копируемых элементов
    const treeElements: (IFormElement | IGroupElement)[] = []

    if (upperElementToCopy && insertionParentId) {
      //Новый порядковый номер - количество всех дочерних элементов в слое + 1
      const orderForInsertionElem = getSiblingsCount(getState(), insertionParentId || '') + 1
      // Получаем дочерние элементы элемента, который нужно скопировать
      const elements = getAllChildrenElements(upperElementToCopy, allElements)
      // Добавляем элемент и его дочерние элементы в массив
      treeElements.push(
        { ...upperElementToCopy, order: orderForInsertionElem, parentId: insertionParentId },
        ...elements,
      )
      //Производит глубокое копирование ветви с установкой новых id, сохраняя взаимосвязи типа родитель - ребенок
      const { newViews, prevIdNewIdDict } = deepCopyElements(treeElements)
      // Диспатчим действия для изменения количества ссылок
      dispatch(
        formConstructorSlice.actions.changeElementLinkCount(
          newViews.map(element => {
            return { id: element.instanceId, type: 'INC' }
          }),
        ),
      )
      const existedViewsIds = treeElements.map(view => view.id)
      dispatch(copyViewInfos(existedViewsIds, prevIdNewIdDict))
      // Диспатчим действия для добавления новых элементов
      dispatch(formConstructorSlice.actions.addNewView(newViews))
      //Диспатчем в стор коллбек на отмену изменений
      dispatch(
        pushHistoryElement(() => {
          dispatch(clearSameInstanceIds())
          newViews.forEach(elem => {
            dispatch(deleteViewRollback(elem.id))
          })
        }),
      )
    }
  }

/**
 * Добавляет новый базовый элемент на форму ввода - добавляет view и связанные instance
 * @param payload Полезные данные
 * @returns
 */
export const addBaseComponent =
  (payload: AddElementsWithInstancesPayload) => (dispatch: AppDispatch) => {
    //Список элементов - отображение
    const elements = payload.views
    //Список инстансов
    const instances = payload.instances
    //Идентифкатор слоя, куда происходит вставка
    const insertionParentId = payload.parentId
    // Информация о вью элементах
    const viewInfos = payload.viewInfos

    dispatch(addBaseElement(elements, instances, insertionParentId))
    dispatch(formConstructorSlice.actions.addViewInfos(viewInfos))
  }

/**
 * Создает скопированный базовый элемент (группу элементов) - функционал копирования без наследования
 */
export const insertNewElements =
  (elementId: string, elementType: AllElementTypes) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()

    const elementToCopyId = elementToCopyIdSelector(state)

    if (!elementToCopyId) {
      return
    }

    let insertionParentId = null

    // Вставка разрешена только в группирующие элементы
    if (getFormType(elementType) === 'FormGroups') {
      insertionParentId = elementId
    } else {
      return
    }

    //Верхнеуровневый элемент для копирования, может быть как группирующим, так и обычным
    const upperElementToCopy = getElementById(elementToCopyId)(state)

    if (upperElementToCopy && insertionParentId) {
      // Получаем все элементы из состояния
      const allViews = selectViewAll(state)
      const treeElements: (IFormElement | IGroupElement)[] = []

      // Получаем дочерние элементы элемента, который нужно скопировать
      const elements = getAllChildrenElements(upperElementToCopy, allViews)
      // Добавляем элемент, предварительно обнулив его родителя и его дочерние элементы в массив
      treeElements.push({ ...upperElementToCopy, parentId: undefined }, ...elements)
      const instances = formInstancesSelector(treeElements.map(el => el.instanceId))(state)

      // Копируем инстансы
      const { newInstances, newInstancesIdsDict } = copyInstances(instances)

      // Создаем копию всех элементов с обновленными идентификаторами экземпляров
      const { newViews, prevIdNewIdDict } = deepCopyElements(treeElements)
      const elementsCopy = newViews.map(elem => {
        return { ...elem, instanceId: newInstancesIdsDict[elem.instanceId] }
      })

      dispatch(addBaseElement(elementsCopy, newInstances, insertionParentId))

      const existedViewsIds = treeElements.map(view => view.id)
      dispatch(copyViewInfos(existedViewsIds, prevIdNewIdDict))
    }
  }

/**
 * Добавляет элементы на указанную позицию
 * @param elements Список view для добалвения
 * @param instances Список instance
 * @param insertionParentId Идентификатор для вставки
 */
const addBaseElement =
  (
    elements: (IFormElement | IGroupElement)[],
    instances: FormInstance<AllElementTypes>[],
    insertionParentId: string,
  ) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const changeLinksCountPayloads: ChangeElementLinkCountPayload[] = []
    //Новый порядковый номер - количество всех дочерних элементов в слое + 1
    const orderForInsertionElem = getSiblingsCount(getState(), insertionParentId) + 1
    //Добавляем порядковые номера и правильный parentId  к каждому элементу
    const newViewsToAdd = elements.map(elem => {
      return {
        ...elem,
        parentId: !elem.parentId ? insertionParentId : elem.parentId,
        order: !elem.parentId ? orderForInsertionElem : elem.order,
      }
    })

    newViewsToAdd.forEach(elem => {
      changeLinksCountPayloads.push({
        id: elem.instanceId,
        type: 'INC',
      })
    })
    //Диспатчем в стор подготовленный данные
    dispatch(formConstructorSlice.actions.changeElementLinkCount(changeLinksCountPayloads))
    dispatch(formConstructorSlice.actions.addNewFormInstance(instances))
    dispatch(formConstructorSlice.actions.addNewView(newViewsToAdd))

    //Диспатчем в стор коллбек на отмену изменений
    dispatch(
      pushHistoryElement(() => {
        dispatch(clearSameInstanceIds())
        newViewsToAdd.forEach(elem => {
          dispatch(deleteViewRollback(elem.id))
        })
      }),
    )
  }
