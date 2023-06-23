import { FC, useEffect, useState } from 'react'
import { Button } from '@consta/uikit/Button'
import { SelectableLayer } from '../../SelectableLayer'
import { IButtonFormElement } from './types'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import {
  ButtonProps,
  IButtonGroup,
  IFormElementButton,
  useAppSelector,
} from '../../../store/formElements'
import { ButtonActionViewer } from './ButtonActionViewer/ButtonActionViewer'

export const ButtonFormElement: FC<IButtonFormElement> = ({ element }) => {
  const [buttonProps, setButtonProps] = useState<ButtonProps>()
  const [openViewer, setOpenViewer] = useState<boolean>(false)

  const { allElementsTree, allElementsMap } = useAppSelector(state => state.formConstructor)

  const [buttonGroup, setButtonGroup] = useState<IButtonGroup>()

  useEffect(() => {
    const buttonFormElement = element as IFormElementButton
    const buttonGroupIds = allElementsTree.get(buttonFormElement.id) || []
    if (buttonGroupIds.length) {
      const connectedButtonGroup = allElementsMap.get(buttonGroupIds[0])
      if (connectedButtonGroup && 'connectedButtonId' in connectedButtonGroup) {
        setButtonGroup(connectedButtonGroup as IButtonGroup)
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

  return (
    <>
      <SelectableLayer
        parentElementId={element.id}
        elementTypeUsage={ElementTypes.FormElement}
        elementType={FormElementTypes.Button}>
        <Button {...buttonProps} onClick={onButtonClick} />
      </SelectableLayer>
      {buttonGroup ? (
        <ButtonActionViewer
          buttonGroup={buttonGroup}
          openViewer={openViewer}
          onCloseViewer={onCloseViewer}
        />
      ) : (
        <></>
      )}
    </>
  )
}
