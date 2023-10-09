import { FC, useEffect, useState } from 'react'
import { IDroppableLocalLayer } from './types'
import { getElementById, useAppSelector } from '../../store'
import { ILayoutElement, LayoutPropDirection } from '../../coreTypes'

const stylesRow = {
  paddingRight: ' 1.2rem',
  backgroundColor: 'aquamarine',
}

const stylesColumn = {
  paddingTop: ' 1.2rem',
  backgroundColor: 'aquamarine',
}

export const DroppableLocalLayer: FC<IDroppableLocalLayer> = ({ children, parentElementId }) => {
  const parentElement = useAppSelector(getElementById(parentElementId))
  const [parentElementDirection, setParentElementDirection] = useState<LayoutPropDirection>()

  useEffect(() => {
    if (parentElement) {
      const layout = parentElement as ILayoutElement
      const direction = layout.props.props.constaProps.direction
      setParentElementDirection(direction)
    }
  }, [parentElement])

  return (
    <>
      <div style={parentElementDirection === 'column' ? stylesColumn : stylesRow} />
      {children}
      <div style={parentElementDirection === 'column' ? stylesColumn : stylesRow} />
    </>
  )
}
