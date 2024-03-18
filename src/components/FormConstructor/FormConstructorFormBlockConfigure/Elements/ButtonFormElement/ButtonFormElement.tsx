import type { FC } from 'react'
import { useState } from 'react'
import { Button } from '@consta/uikit/Button'

import type { ButtonProps, IButtonActionElement } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes, Icons } from '../../../coreTypes'
import { FormGroupsDict } from '../../FormGroupDict'
import { SelectableLayer } from '../../SelectableLayer'

import type { IButtonFormElement } from './types'

export const ButtonFormElement: FC<IButtonFormElement> = ({ element }) => {
  const [buttonProps] = useState<ButtonProps>()
  const [openViewer, setOpenViewer] = useState<boolean>(false)
  const [buttonGroup] = useState<IButtonActionElement>()
  console.log('L17 buttonProps ===', buttonProps)
  console.log('L18 buttonGroup ===', buttonGroup)
  const onButtonClick = () => {
    if (buttonProps && buttonProps.action !== 'none') {
      setOpenViewer(!openViewer)
    }
  }

  const onCloseViewer = () => {
    setOpenViewer(false)
  }
  //логика для заполнения элемента
  const isFilled = element.props.props.filled
  //
  const getActionViwer = () => {
    if (buttonGroup && buttonProps && buttonProps.action !== 'none') {
      const Viewer = FormGroupsDict[buttonProps.action]
      return (
        <Viewer buttonGroup={buttonGroup} openViewer={openViewer} onCloseViewer={onCloseViewer} />
      )
    }
    return null
  }

  return (
    <>
      <SelectableLayer
        parentElementId={element.id}
        elementTypeUsage={ElementTypes.FormElement}
        elementType={FormElementDictTypes.Button}
        className={isFilled ? 'container-row flex-grow-1' : ''}>
        <Button
          {...element.props.props}
          style={{ flexGrow: isFilled ? 1 : 0 }}
          iconLeft={element.props.props.icon ? Icons[element.props.props.icon] : undefined}
          iconRight={element.props.props.iconR ? Icons[element.props.props.iconR] : undefined}
          onClick={onButtonClick}
        />
      </SelectableLayer>
      {getActionViwer()}
    </>
  )
}
