import { FC, useEffect, useState } from 'react'
import { Button } from '@consta/uikit/Button'
import { SelectableLayer } from '../../SelectableLayer'
import { IButtonFormElement } from './types'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'

import { FormGroupsDict } from '../../FormGroupDict'
import {
  ButtonProps,
  IButtonActionElement,
  IFormElementButton,
  useAppSelector,
} from '../../../store/formElements'

export const ButtonFormElement: FC<IButtonFormElement> = ({ element }) => {
  const [buttonProps, setButtonProps] = useState<ButtonProps>()
  const [openViewer, setOpenViewer] = useState<boolean>(false)

  const { allElementsTree, allElementsMap } = useAppSelector(state => state.formConstructor)

  const [buttonGroup, setButtonGroup] = useState<IButtonActionElement>()

  useEffect(() => {
    const buttonFormElement = element as IFormElementButton
    const buttonGroupIds = allElementsTree.get(buttonFormElement.id) || []
    if (buttonGroupIds.length) {
      const connectedButtonGroup = allElementsMap.get(buttonGroupIds[0])
      if (connectedButtonGroup && 'connectedButtonId' in connectedButtonGroup) {
        setButtonGroup(connectedButtonGroup as IButtonActionElement)
      }
    }
    setButtonProps(buttonFormElement.props)
  }, [element, allElementsMap, allElementsTree])

  const onButtonClick = () => {
    if (buttonProps && buttonProps.action !== 'none') {
      setOpenViewer(!openViewer)
    }
  }

  const onCloseViewer = () => {
    setOpenViewer(false)
  }

  const getActionViwer = () => {
    if (buttonGroup && buttonProps && buttonProps?.action !== 'none') {
      const Viewer = FormGroupsDict[buttonProps.action]
      return (
        <Viewer buttonGroup={buttonGroup} openViewer={openViewer} onCloseViewer={onCloseViewer} />
      )
    }
    return <></>
  }

  return (
    <>
      <SelectableLayer
        parentElementId={element.id}
        elementTypeUsage={ElementTypes.FormElement}
        elementType={FormElementTypes.Button}>
        <Button {...buttonProps} onClick={onButtonClick} style={{ width: '100%' }} />
      </SelectableLayer>
      {getActionViwer()}
    </>
  )
}
