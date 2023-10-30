import { FC, useState } from 'react'
import { Button } from '@consta/uikit/Button'
import { SelectableLayer } from '../../SelectableLayer'
import { IButtonFormElement } from './types'
import { FormGroupsDict } from '../../FormGroupDict'
import {
  ButtonProps,
  IButtonActionElement,
  ElementTypes,
  FormElementDictTypes,
} from '../../../coreTypes'
import { Icons } from '../IconFormElement/mocks'
import { DroppableLocalLayer } from '../../DroppableLocalLayer'

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
  const isFilled = element.props.props.filled
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
        elementType={FormElementDictTypes.Button}
        className={isFilled ? 'container-row flex-grow-1' : ''}>
        <DroppableLocalLayer
          id={element.id}
          isLayout={false}
          parentElementId={element.parentId || ''}>
          <Button
            {...element.props.props}
            onClick={onButtonClick}
            style={{ flexGrow: isFilled ? 1 : 0 }}
            iconLeft={element.props.props.icon && Icons[element.props.props.icon]}
            iconRight={element.props.props.iconR && Icons[element.props.props.iconR]}
          />
        </DroppableLocalLayer>
      </SelectableLayer>
      {getActionViwer()}
    </>
  )
}
