import type { AllElementTypes, FormInstance } from '../../../coreTypes'

import { typeAdapterDict } from './typeAdapter'

/**
 * Адаптер для интсанса
 * @param instances Инстанс
 * @returns
 */
export const instanceAdapter = (instance: FormInstance<AllElementTypes>) => {
  switch (instance.props.type) {
    case 'Button': {
      // Получаем адаптер функцию для кнопки
      const adapterFunc = typeAdapterDict[instance.props.type]
      const newProps = adapterFunc(instance.id, instance.props.props)
      return {
        ...instance,
        props: { ...instance.props, props: newProps },
      }
    }
    case 'Badge': {
      // Получаем адаптер функцию для кнопки
      const adapterFunc = typeAdapterDict[instance.props.type]
      const newProps = adapterFunc(instance.id, instance.props.props)
      return {
        ...instance,
        props: { ...instance.props, props: newProps },
      }
    }
    case 'Avatar': {
      // Получаем адаптер функцию для кнопки
      const adapterFunc = typeAdapterDict[instance.props.type]
      const newProps = adapterFunc(instance.id, instance.props.props)
      return {
        ...instance,
        props: { ...instance.props, props: newProps },
      }
    }
    case 'AvatarGroup': {
      // Получаем адаптер функцию для кнопки
      const adapterFunc = typeAdapterDict[instance.props.type]
      const newProps = adapterFunc(instance.id, instance.props.props)
      return {
        ...instance,
        props: { ...instance.props, props: newProps },
      }
    }
  }
  return instance
}
