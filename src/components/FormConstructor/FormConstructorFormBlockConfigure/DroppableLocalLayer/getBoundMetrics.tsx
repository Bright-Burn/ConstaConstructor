import { LayoutPropDirection } from '../../coreTypes'
import { BoundMetrics } from './types'

const DistanceCoeff = 7

/**
 * Метод получения метрик элемента для расчёта границ при перетаскивании
 * @param element Элемент
 * @param direction Напрвление
 * @returns Метрики
 */
export const getBoundMetrics = (element: HTMLDivElement, direction: LayoutPropDirection) => {
  const rect = element.getBoundingClientRect()
  const boundMetrics: BoundMetrics = {
    centerPoint: 0,
    distance: 0,
  }
  switch (direction) {
    case 'column': {
      boundMetrics.centerPoint = rect.top + rect.height / 2
      boundMetrics.distance = rect.height / DistanceCoeff
      break
    }
    case 'row': {
      boundMetrics.centerPoint = rect.left + rect.width / 2
      boundMetrics.distance = rect.width / DistanceCoeff
      break
    }
  }
  return boundMetrics
}
