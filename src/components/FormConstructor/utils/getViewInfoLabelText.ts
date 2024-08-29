import type { IFormElement, IGroupElement, ViewtInfo } from '../coreTypes'

/**
 * Формирует label для view
 * @param view Отображаемый элемент формы ввода
 * @param viewsInfoStruct Структура viewInfo
 */
export const getViewInfoLabelText = (
  view: IFormElement | IGroupElement,
  viewInfo: ViewtInfo | null,
) => viewInfo?.label ?? view.type
