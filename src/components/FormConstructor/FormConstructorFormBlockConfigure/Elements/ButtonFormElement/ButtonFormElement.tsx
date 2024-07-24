import type { FC } from 'react'
import { Button } from '@consta/uikit/Button'

import type { FormInstance } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes, Icons } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'

import type { IButtonFormElement } from './types'
import { useAppSelector } from '../../../store'
import { formInstanceSelector } from '../../../store/formElements'

export const ButtonFormElement: FC<IButtonFormElement> = ({ element }) => {
  // const [buttonProps] = useState<ButtonProps>()
  // const [openViewer, setOpenViewer] = useState<boolean>(false)
  // const [buttonGroup] = useState<IButtonActionElement>()
  const buttonInstance: FormInstance<'Button'> | undefined = useAppSelector(
    formInstanceSelector(element?.instanceId || ''),
  )
  const buttonProps = buttonInstance?.props.props

  // const onCloseViewer = () => {
  //   setOpenViewer(false)
  // }
  //логика для заполнения элемента
  const isFilled = buttonProps?.filled || false
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
      {buttonProps ? (
        <SelectableLayer
          parentElementId={element.id}
          elementTypeUsage={ElementTypes.FormElement}
          elementType={FormElementDictTypes.Button}
          className={isFilled ? 'container-row flex-grow-1' : ''}>
          <Button
            {...buttonProps}
            style={{ flexGrow: isFilled ? 1 : 0 }}
            iconLeft={buttonProps.icon ? Icons[buttonProps.icon] : undefined}
            iconRight={buttonProps.iconR ? Icons[buttonProps.iconR] : undefined}
            // onClick={onButtonClick}
          />
        </SelectableLayer>
      ) : null}
      {/* {getActionViwer()} */}
    </>
  )
}
