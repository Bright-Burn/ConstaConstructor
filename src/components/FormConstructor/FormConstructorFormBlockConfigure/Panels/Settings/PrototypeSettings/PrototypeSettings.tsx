import type { FC } from 'react'
import React from 'react'
import type { TextFieldPropValue } from '@consta/uikit/TextField'
import { TextField } from '@consta/uikit/TextField'

import type {
  BrandPrototypeRectangleProps,
  BrandPrototypeTextProps,
  PrototypeProps,
  PrototypeRectangleElement,
  PrototypeTextElement,
} from '../../../../coreTypes'

import { useTextSettingsStore } from './PrototypeSettingsService'

type PrototypeSettingsType = {
  selectedElementProps: PrototypeProps
  selectedElement: PrototypeRectangleElement | PrototypeTextElement
}

export const PrototypeSettings: FC<PrototypeSettingsType> = ({
  selectedElementProps,
  selectedElement,
}) => {
  const { textProps, onDispatch } = useTextSettingsStore(selectedElementProps, selectedElement)

  const { width, height, left, top, zIndex } = textProps
  const onWidthChange = ({ value }: { value: TextFieldPropValue }) => {
    const newProps: BrandPrototypeTextProps | BrandPrototypeRectangleProps = {
      props: { ...textProps },
      type: selectedElement.elementType,
    }
    newProps.props.width = Number(value)
    onDispatch(newProps)
  }

  const onHeightChange = ({ value }: { value: TextFieldPropValue }) => {
    const newProps: BrandPrototypeTextProps | BrandPrototypeRectangleProps = {
      props: { ...textProps },
      type: selectedElement.elementType,
    }
    newProps.props.height = Number(value)
    onDispatch(newProps)
  }
  const onTopChange = ({ value }: { value: TextFieldPropValue }) => {
    const newProps: BrandPrototypeTextProps | BrandPrototypeRectangleProps = {
      props: { ...textProps },
      type: selectedElement.elementType,
    }
    newProps.props.top = Number(value)
    onDispatch(newProps)
  }

  const onLeftChange = ({ value }: { value: TextFieldPropValue }) => {
    const newProps: BrandPrototypeTextProps | BrandPrototypeRectangleProps = {
      props: { ...textProps },
      type: selectedElement.elementType,
    }
    newProps.props.left = Number(value)
    onDispatch(newProps)
  }

  const onZIndexChange = ({ value }: { value: TextFieldPropValue }) => {
    const newProps: BrandPrototypeTextProps | BrandPrototypeRectangleProps = {
      props: { ...textProps },
      type: selectedElement.elementType,
    }
    newProps.props.zIndex = Number(value)
    onDispatch(newProps)
  }

  const onTextChange = ({ value }: { value: TextFieldPropValue }) => {
    const newProps: BrandPrototypeTextProps | BrandPrototypeRectangleProps = {
      props: { ...textProps },
      type: selectedElement.elementType,
    }
    newProps.props.text = String(value)
    onDispatch(newProps)
  }

  return (
    <>
      <TextField
        className="m-b-m"
        label="Ширина"
        value={`${width}`}
        type="number"
        placeholder="Ширина"
        onChange={onWidthChange}
      />

      <TextField
        className="m-b-m"
        label="Высота"
        value={`${height}`}
        type="number"
        placeholder="Высота"
        onChange={onHeightChange}
      />

      <TextField
        className="m-b-m"
        label="Верх"
        value={`${top}`}
        type="number"
        placeholder="Верх"
        onChange={onTopChange}
      />

      <TextField
        className="m-b-m"
        label="Лево"
        value={`${left}`}
        type="number"
        placeholder="Лево"
        onChange={onLeftChange}
      />

      <TextField
        className="m-b-m"
        label="z-index"
        value={`${zIndex}`}
        type="number"
        placeholder="z-index"
        onChange={onZIndexChange}
      />

      {'text' in textProps && (
        <TextField
          className="m-b-m"
          label="Текст"
          value={textProps.text || 'Пример текста'}
          type="text"
          placeholder="Высота"
          onChange={onTextChange}
        />
      )}
    </>
  )
}
