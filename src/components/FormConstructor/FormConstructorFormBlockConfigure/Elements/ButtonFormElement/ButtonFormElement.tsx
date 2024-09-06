import type { FC } from 'react'
import { Button } from '@consta/uikit/Button'

import { ElementTypes, FormElementDictTypes, Icons } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IButtonFormElement } from './types'
import { getIsFilledClassName } from '../../../utils'

export const ButtonFormElement: FC<IButtonFormElement> = ({ element }) => {
  // const [buttonProps] = useState<ButtonProps>()
  // const [openViewer, setOpenViewer] = useState<boolean>(false)
  // const [buttonGroup] = useState<IButtonActionElement>()
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  // const onCloseViewer = () => {
  //   setOpenViewer(false)
  // }
  //логика для заполнения элемента
  const isFilled = props?.filled || false
  // const getActionViwer = () => {
  //   if (buttonGroup && buttonProps && buttonProps.action !== 'none') {
  //     const Viewer = FormGroupsDict[buttonProps.action]
  //     return (
  //       <Viewer buttonGroup={buttonGroup} openViewer={openViewer} onCloseViewer={onCloseViewer} />
  //     )
  //   }
  //   return null
  // }

  return (
    <>
      {props ? (
        <SelectableLayer
          parentElementId={element.id}
          elementTypeUsage={ElementTypes.FormElement}
          elementType={FormElementDictTypes.Button}
          className={getIsFilledClassName(isFilled)}>
          <Button
            {...props}
            style={{ flexGrow: isFilled ? 1 : 0 }}
            iconLeft={props.icon ? Icons[props.icon] : undefined}
            iconRight={props.iconR ? Icons[props.iconR] : undefined}
            // onClick={onButtonClick}
          />
        </SelectableLayer>
      ) : null}
      {/* {getActionViwer()} */}
    </>
  )
}
