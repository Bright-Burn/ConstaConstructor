import { LayoutPropDirection } from '../../coreTypes'
import { BorderStyle, ElemPositionToAdd } from './types'

/**
 * Метод для получения стиля бордера в зависимости от направления и позиции для вставки
 * @param direction Направление
 * @param pos Позиция для вставки
 * @returns Стиль бордера
 */
export const getBorderPosition = (
  direction: LayoutPropDirection | undefined,
  pos: ElemPositionToAdd,
) => {
  switch (direction) {
    case 'column': {
      if (pos === 'Next') {
        return { borderBottom: BorderStyle }
      }
      if (pos === 'Prev') {
        return { borderTop: BorderStyle }
      }
      return {}
    }
    case 'row': {
      if (pos === 'Next') {
        return { borderRight: BorderStyle }
      }
      if (pos === 'Prev') {
        return { borderLeft: BorderStyle }
      }
      return {}
    }
  }
  return {}
}
