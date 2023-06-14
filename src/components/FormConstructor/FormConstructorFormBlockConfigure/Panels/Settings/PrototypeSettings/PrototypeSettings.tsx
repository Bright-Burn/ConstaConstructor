import React from 'react'
import { useTextSettingsStore } from './PrototypeSettingsService'
import { TextField, TextFieldPropValue } from '@consta/uikit/TextField';
import { PrototypeTextProps } from '../../../Elements/PrototypeTextElement/types'

export const PrototypeSettings = () => {
  const { textProps, onDispatch } = useTextSettingsStore()
  const { width, height, text, left, top, zIndex } = textProps as PrototypeTextProps
  const onWidthChange = ({ value }: {value: TextFieldPropValue}) => {
    const newProps = { ...textProps, width: Number(value) } as PrototypeTextProps
    onDispatch(newProps)
  }

  const onHeightChange = ({ value }: {value: TextFieldPropValue}) => {
    const newProps = { ...textProps, height: Number(value) } as PrototypeTextProps
    onDispatch(newProps)
  }
  const onTopChange = ({ value }: {value: TextFieldPropValue}) => {
    const newProps = { ...textProps, top: Number(value) } as PrototypeTextProps
    onDispatch(newProps)
  }

  const onLeftChange = ({ value }: {value: TextFieldPropValue}) => {
    const newProps = { ...textProps, left: Number(value) } as PrototypeTextProps
    onDispatch(newProps)
  }

  const onZIndexChange = ({ value }: {value: TextFieldPropValue}) => {
    const newProps = { ...textProps, zIndex: Number(value) } as PrototypeTextProps
    onDispatch(newProps)
  }

  const onTextChange = ({ value }: {value: TextFieldPropValue}) => {
    const newProps = { ...textProps, text: value } as PrototypeTextProps
    onDispatch(newProps)
  }

  return (
    <>
      <TextField
        className='m-b-m'
        label='Ширина'
        onChange={onWidthChange}
        value={`${width || 0}`}
        type='number'
        placeholder='Ширина'
      />

      <TextField
        className='m-b-m'
        label='Высота'
        onChange={onHeightChange}
        value={`${height || 0}`}
        type='number'
        placeholder='Высота'
      />

      <TextField
        className='m-b-m'
        label='Верх'
        onChange={onTopChange}
        value={`${top || 0}`}
        type='number'
        placeholder='Верх'
      />

      <TextField
        className='m-b-m'
        label='Лево'
        onChange={onLeftChange}
        value={`${left || 0}`}
        type='number'
        placeholder='Лево'
      />

      <TextField
        className='m-b-m'
        label='z-index'
        onChange={onZIndexChange}
        value={`${zIndex || 0}`}
        type='number'
        placeholder='z-index'
      />

      <TextField
        className='m-b-m'
        label='Текст'
        onChange={onTextChange}
        value={`${text || 'Пример текста'}`}
        type='text'
        placeholder='Высота'
      />
    </>
  )
}
