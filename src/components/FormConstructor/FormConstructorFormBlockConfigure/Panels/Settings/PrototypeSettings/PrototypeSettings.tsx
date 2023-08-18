import React from 'react'
import { useTextSettingsStore } from './PrototypeSettingsService'
import { TextField, TextFieldPropValue } from '@consta/uikit/TextField'
import { FC } from 'react'
import { BrandPrototypeRectProps, BrandPrototypeTextProps, PrototypeProps, PrototypeRectElement, PrototypeTextElement } from '../../../../coreTypes'

type PrototypeSettingsType = {
  selectedElementProps: PrototypeProps,
  selectedElement: PrototypeRectElement | PrototypeTextElement,
}

export const PrototypeSettings: FC<PrototypeSettingsType> = ({selectedElementProps, selectedElement}) => {
  const { textProps, onDispatch } = useTextSettingsStore(selectedElementProps, selectedElement)

  const { width, height, left, top, zIndex } = textProps
  const onWidthChange = ({ value }: { value: TextFieldPropValue }) => {
    const newProps: BrandPrototypeTextProps | BrandPrototypeRectProps = { 
      props: textProps,
      type: selectedElement.elementType
    }
    newProps.props.width = Number(value)
    onDispatch(newProps)
  }

  const onHeightChange = ({ value }: { value: TextFieldPropValue }) => {
    const newProps: BrandPrototypeTextProps | BrandPrototypeRectProps = { 
      props: textProps,
      type: selectedElement.elementType
    }
    newProps.props.height = Number(value)
    onDispatch(newProps)
  }
  const onTopChange = ({ value }: { value: TextFieldPropValue }) => {
    const newProps: BrandPrototypeTextProps | BrandPrototypeRectProps = { 
      props: textProps,
      type: selectedElement.elementType
    }
    newProps.props.top = Number(value)
    onDispatch(newProps)
  }

  const onLeftChange = ({ value }: { value: TextFieldPropValue }) => {
    const newProps: BrandPrototypeTextProps | BrandPrototypeRectProps = { 
      props: textProps,
      type: selectedElement.elementType
    }
    newProps.props.left = Number(value)
    onDispatch(newProps)
  }

  const onZIndexChange = ({ value }: { value: TextFieldPropValue }) => {
    const newProps: BrandPrototypeTextProps | BrandPrototypeRectProps = { 
      props: textProps,
      type: selectedElement.elementType
    }
    newProps.props.zIndex = Number(value)
    onDispatch(newProps)
  }

  const onTextChange = ({ value }: { value: TextFieldPropValue }) => {
    const newProps: BrandPrototypeTextProps | BrandPrototypeRectProps = { 
      props: textProps,
      type: selectedElement.elementType
    }
    newProps.props.text = String(value)
    onDispatch(newProps)
  }

  return (
    <>
      <TextField
        className='m-b-m'
        label='Ширина'
        onChange={onWidthChange}
        value={`${width}`}
        type='number'
        placeholder='Ширина'
      />

      <TextField
        className='m-b-m'
        label='Высота'
        onChange={onHeightChange}
        value={`${height}`}
        type='number'
        placeholder='Высота'
      />

      <TextField
        className='m-b-m'
        label='Верх'
        onChange={onTopChange}
        value={`${top}`}
        type='number'
        placeholder='Верх'
      />

      <TextField
        className='m-b-m'
        label='Лево'
        onChange={onLeftChange}
        value={`${left}`}
        type='number'
        placeholder='Лево'
      />

      <TextField
        className='m-b-m'
        label='z-index'
        onChange={onZIndexChange}
        value={`${zIndex}`}
        type='number'
        placeholder='z-index'
      />

      {'text' in textProps && (
        <TextField
          className='m-b-m'
          label='Текст'
          onChange={onTextChange}
          value={`${textProps.text || 'Пример текста'}`}
          type='text'
          placeholder='Высота'
        />
      )}
    </>
  )
}
