import { FC, useEffect, useState } from 'react'
import { IDroppableLocalLayer } from './types'
import {
  getDraggedBaseComponent,
  getElementById,
  useAppSelector,
  useBaseComponentsSelector,
} from '../../store'
import { ILayoutElement } from '../../coreTypes'
import css from './styles.module.css'

export const DroppableLocalLayer: FC<IDroppableLocalLayer> = ({ children, parentElementId }) => {
  const [classNameString, setClassNameString] = useState<string>('')

  const parentElement = useAppSelector(getElementById(parentElementId))
  const draggableBaseComponent = useBaseComponentsSelector(getDraggedBaseComponent)
  const { draggableElement } = useAppSelector(state => state.formConstructor)

  useEffect(() => {
    if (parentElement) {
      const layout = parentElement as ILayoutElement
      const direction = layout.props.props.constaProps.direction

      if (draggableBaseComponent || draggableElement) {
        direction === 'column'
          ? setClassNameString(css.stylesColumn)
          : setClassNameString(css.stylesRow)
      } else {
        setClassNameString('')
      }
    }
  }, [parentElement, draggableBaseComponent, draggableElement])

  return (
    <>
      <div className={classNameString} />
      {children}
      <div className={classNameString} />
    </>
  )
}
