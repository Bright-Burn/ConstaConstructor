import { Text } from '@consta/uikit/Text'
import { Tooltip } from '@consta/uikit/Tooltip'
import { Position } from '@consta/uikit/__internal__/src/components/Popover/Popover'
import { useState } from 'react'
import styles from './styles.module.css'

export const BaseComponentBlockItems = ({ label, img, onDragFormElementStart }: any) => {
  const [position, setPosition] = useState<Position>(undefined)

  const handleMouseMove = (event: React.MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY })
  }
  return (
    <div draggable={true} onDragStart={onDragFormElementStart} style={{ overflowX: 'hidden' }}>
      <div className={`${styles.componentCardItem}`}>
        <div className={`${styles.componentCardItemBlock}`}>
          <div className={`${styles.itemBlocks}`}>
            <Tooltip
              direction='upCenter'
              spareDirection='downStartLeft'
              size={'m'}
              position={position}
              isInteractive={false}>
              <Text>{label}</Text>
            </Tooltip>
            <Text
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setPosition(undefined)}
              className={`${styles.textBlock}`}
              size='s'>
              {label}
            </Text>
            <img className={`${styles.imgBlock}`} src={img}></img>
          </div>
        </div>
      </div>
    </div>
  )
}
