import { FC, useLayoutEffect, useState } from 'react'
import { SelectableLayer } from '../../SelectableLayer'
import { ICollapseFormElement } from './types'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { Collapse } from '@consta/uikit/Collapse'
import { CollapseProps, IFormElementCollapse } from '../../../store/formElements/collapseTypes'
import { Icons } from '../IconFormElement/mocks'
import { Badge } from '@consta/uikit/Badge'
import { IconAlert } from '@consta/icons/IconAlert'

export const CollapseFormElement: FC<ICollapseFormElement> = ({ element }) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [collapseProps, setCollapseProps] = useState<CollapseProps>({
    className: '',
    baseProps: {},
    label: 'Заголовок',
  })

  useLayoutEffect(() => {
    const collapseFormElement = element as IFormElementCollapse
    setCollapseProps(collapseFormElement.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Collapse}>
      <Collapse
        {...collapseProps}
        icon={
          collapseProps?.withCustomIcon
            ? collapseProps.icon && Icons[collapseProps.icon]
            : undefined
        }
        maxContentHeight={`${collapseProps.maxHeight}px`}
        isOpen={isOpen}
        rightSide={
          collapseProps.rightSide && [
            <Badge label='Badge' status='success' />,
            <IconAlert size='s' view='warning' />,
          ]
        }
        onClick={() => setOpen(!isOpen)}>
        {collapseProps.children}
      </Collapse>
    </SelectableLayer>
  )
}
