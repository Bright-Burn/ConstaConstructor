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
      const adapterFunc = typeAdapterDict[instance.props.type]
      const newProps = adapterFunc(instance.id, instance.props.props)
      return {
        ...instance,
        props: { ...instance.props, props: newProps },
      }
    }
    case 'Badge': {
      const adapterFunc = typeAdapterDict[instance.props.type]
      const newProps = adapterFunc(instance.id, instance.props.props)
      return {
        ...instance,
        props: { ...instance.props, props: newProps },
      }
    }
    case 'Avatar': {
      const adapterFunc = typeAdapterDict[instance.props.type]
      const newProps = adapterFunc(instance.id, instance.props.props)
      return {
        ...instance,
        props: { ...instance.props, props: newProps },
      }
    }
    case 'AvatarGroup': {
      const adapterFunc = typeAdapterDict[instance.props.type]
      const newProps = adapterFunc(instance.id, instance.props.props)
      return {
        ...instance,
        props: { ...instance.props, props: newProps },
      }
    }
    case 'BreadcrumbsFormElement': {
      const adapterFunc = typeAdapterDict[instance.props.type]
      //@ts-ignore По умолчанию ожидаем что instance.props.props - Deprecated тип
      const newProps = adapterFunc(instance.id, instance.props.props)
      return {
        ...instance,
        props: { ...instance.props, props: newProps },
      }
    }
  }
  return instance
}
