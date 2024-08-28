import type { IFormElement, IGroupElement } from '../../../../coreTypes'
import { pushHistoryElement } from '../../../history'
import type { AppDispatch, RootState } from '../../../setupStore'
import { selectViewAll, selectViewById } from '../../adapters'
import { formConstructorSlice } from '../../formElementsSlice'
import type { ReorderPayload } from '../payloads'

export const reorderFormElement =
  (payload: ReorderPayload) => (dispatch: AppDispatch, getState: () => RootState) => {
    // Элемент, который перетаскивают
    const element = selectViewById(getState(), payload.elementId)
    // Элемент на который дропнули
    const targetElement = selectViewById(getState(), payload.parentId)
    // Выбранный элемент (если есть)
    const selectedElId = payload.selectedElId

    const allElems = selectViewAll(getState())

    if (element && targetElement) {
      let parentId = targetElement.parentId
      const order = payload.left
        ? (targetElement.order + getMaxSiblingOrder(allElems, targetElement)) / 2
        : (targetElement.order + getMinSiblingOrder(allElems, targetElement)) / 2
      // Если мы перетаскиваем в выбранный элемент и он является лэйаутом то parentId = выбранному элементу
      // т.е. мы сбрасываем перетаскиваемый элемент внутрь выбранного
      if (selectedElId === targetElement.id && targetElement.type === 'Layout') {
        //TODO нужно правильно определять order для перетаскиваемого элемента внутри лэйаута. Сейчас есть баг
        parentId = payload.selectedElId
      }

      const newEl: IFormElement | IGroupElement = { ...element, parentId, order }
      dispatch(formConstructorSlice.actions.reorderView(newEl))

      dispatch(
        pushHistoryElement(() => dispatch(formConstructorSlice.actions.reorderView(element))),
      )
    }
  }

const getMinSiblingOrder = (
  allElems: (IFormElement | IGroupElement)[],
  targetElement: IFormElement | IGroupElement,
) => {
  const siblings = allElems.filter(el => el.parentId === targetElement.parentId)
  const nextSiblings = siblings.filter(el => el.order > targetElement.order)
  let minOrder: number = nextSiblings[0] ? nextSiblings[0].order : 0
  for (let i = 1; i < nextSiblings.length; i++) {
    if (nextSiblings[i].order < minOrder) {
      minOrder = nextSiblings[i].order
    }
  }

  return minOrder !== 0 ? minOrder : targetElement.order + 1
}
const getMaxSiblingOrder = (
  allElems: (IFormElement | IGroupElement)[],
  targetElement: IFormElement | IGroupElement,
) => {
  const siblings = allElems.filter(el => el.parentId === targetElement.parentId)
  const nextSiblings = siblings.filter(el => el.order < targetElement.order)
  let maxOrder: number = nextSiblings[0] ? nextSiblings[0].order : 0
  for (let i = 1; i < nextSiblings.length; i++) {
    if (nextSiblings[i].order > maxOrder) {
      maxOrder = nextSiblings[i].order
    }
  }
  return maxOrder
}
