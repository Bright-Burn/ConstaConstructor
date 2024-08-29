import type { IFormElement, IGroupElement, ViewInfo } from '../coreTypes'

/**
 * Формирует label для view
 * @param view Отображаемый элемент формы ввода
 * @param viewsInfoStruct Структура viewInfo
 */
export const getViewInfoLabelText = (
  view: IFormElement | IGroupElement,
  viewInfo: ViewInfo | null,
) => viewInfo?.label ?? view.type
