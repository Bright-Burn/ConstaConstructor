import React, { FC, useLayoutEffect, useState } from 'react'
import { FormElementUnion, UnionProps, useAppSelector } from '../../../store/formElements'
import { ILayoutElementWithProps } from '../../../store/formElements/types'
import styles from './styles.module.css'

export const Settings: FC = () => {
  const [props, setProps] = useState<UnionProps | undefined>()
  const { selectedElement, allElementsMap } = useAppSelector(state => state.formConstructor)

  useLayoutEffect(() => {
    if (selectedElement) {
      const selectedElementEntity = allElementsMap.get(selectedElement.elementId) as
        | FormElementUnion
        | ILayoutElementWithProps
      const props = selectedElementEntity.props
      setProps(props)
    }
  }, [selectedElement, allElementsMap])

  return <div className={`${styles.settingsBlock} borderCard`}>{JSON.stringify(props)}</div>
}
