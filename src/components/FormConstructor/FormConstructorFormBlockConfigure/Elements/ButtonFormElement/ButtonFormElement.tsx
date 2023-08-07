import { FC, useState } from 'react'
import { Button } from '@consta/uikit/Button'
import { SelectableLayer } from '../../SelectableLayer'
import { IButtonFormElement } from './types'
import { FormGroupsDict } from '../../FormGroupDict'
import {
  ButtonProps,
  IButtonActionElement,
  ElementTypes,
  FormElementTypes,
} from '../../../coreTypes'
import { Icons } from '../IconFormElement/mocks'

export const ButtonFormElement: FC<IButtonFormElement> = ({ element }) => {
  const [buttonProps, setButtonProps] = useState<ButtonProps>()
  const [openViewer, setOpenViewer] = useState<boolean>(false)
  const [buttonGroup, setButtonGroup] = useState<IButtonActionElement>()

  const onButtonClick = () => {
    if (buttonProps && buttonProps.action !== 'none') {
      setOpenViewer(!openViewer)
    }
  }

  const onCloseViewer = () => {
    setOpenViewer(false)
  }
  //логика для заполнения элемента
  const isFilled = element.props.filled?.name === 'filled'
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
        className={isFilled ? 'container-row flex-grow-1' : ''}>
        <Button
          {...element.props}
          onClick={onButtonClick}
          style={{ flexGrow: isFilled ? 1 : 0 }}
          iconLeft={element.props.icon && Icons[element.props.icon]}
          iconRight={element.props.iconR && Icons[element.props.iconR]}
        />
      </SelectableLayer>
      {getActionViwer()}
    </>
  )
}
