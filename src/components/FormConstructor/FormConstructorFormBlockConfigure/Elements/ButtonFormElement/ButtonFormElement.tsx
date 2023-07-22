import React, { FC, useEffect, useState } from 'react'
import { Button } from '@consta/uikit/Button'
import { SelectableLayer } from '../../SelectableLayer'
import { IButtonFormElement } from './types'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { IconSelect } from '@consta/uikit/IconSelect'
import { FormGroupsDict } from '../../FormGroupDict'
import {
  ButtonProps,
  IButtonActionElement,
  IFormElementButton,
  useAppSelector,
} from '../../../store/formElements'
import { Icons } from '../IconFormElement/mocks'
import { getAllElements } from '../../../store/formElements/selectors'

export const ButtonFormElement: FC<IButtonFormElement> = ({ element }) => {
  const [buttonProps, setButtonProps] = useState<ButtonProps>()
  const [openViewer, setOpenViewer] = useState<boolean>(false)
  console.log('newProps', element)
  // const { allElementsTree, allElementsMap } = useAppSelector(state => state.formConstructor)
  const allElements = useAppSelector(getAllElements)
  const [buttonGroup, setButtonGroup] = useState<IButtonActionElement>()

  // useEffect(() => {
  //   const buttonFormElement = element as IFormElementButton
  //   const buttonGroupIds = allElementsTree.get(buttonFormElement.id) || []
  //   if (buttonGroupIds.length) {
  //     const connectedButtonGroup = allElementsMap.get(buttonGroupIds[0])
  //     if (connectedButtonGroup && 'connectedButtonId' in connectedButtonGroup) {
  //       setButtonGroup(connectedButtonGroup as IButtonActionElement)
  //     }
  //   }
  //   setButtonProps(buttonFormElement.props)
  // }, [element, allElementsMap, allElementsTree])

  const onButtonClick = () => {
    if (buttonProps && buttonProps.action !== 'none') {
      setOpenViewer(!openViewer)
    }
  }

  const onCloseViewer = () => {
    setOpenViewer(false)
  }
  //логика для заполнения элемента
  let isFilled = false
  if (element.props && 'filled' in element.props) {
    isFilled = element.props.filled === 'filled'
  }
  //
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
        elementType={FormElementTypes.Button}
        className={isFilled ? 'container-row flex-grow-1' : ''}
      >
        <Button
          {...element.props}
          onClick={onButtonClick}
          style={{ flexGrow: isFilled ? 1 : 0 }}
          iconLeft={buttonProps?.iconLeft && element.props.icon && Icons[element.props.icon]}
          iconRight={buttonProps?.iconRight && element.props.iconR && Icons[element.props.iconR]}
        />
      </SelectableLayer>
      {getActionViwer()}
    </>
  )
}
