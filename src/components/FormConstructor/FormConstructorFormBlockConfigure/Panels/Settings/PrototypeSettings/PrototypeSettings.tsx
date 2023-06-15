import React from 'react'
import { useTextSettingsStore } from './PrototypeSettingsService'
import { TextField, TextFieldPropValue } from '@consta/uikit/TextField'
import styles from './styles.module.css'

export const PrototypeSettings = () => {
  const store = useTextSettingsStore()

  if (!store) return null

  const { textProps, onDispatch } = store
  const { width, height, left, top, zIndex } = textProps
  const onWidthChange = ({ value }: { value: TextFieldPropValue }) => {
    const newProps = { ...textProps, width: Number(value) }
    onDispatch(newProps)
  }

  const onHeightChange = ({ value }: { value: TextFieldPropValue }) => {
    const newProps = { ...textProps, height: Number(value) }
    onDispatch(newProps)
  }
  const onTopChange = ({ value }: { value: TextFieldPropValue }) => {
    const newProps = { ...textProps, top: Number(value) }
    onDispatch(newProps)
  }

  const onLeftChange = ({ value }: { value: TextFieldPropValue }) => {
    const newProps = { ...textProps, left: Number(value) }
    onDispatch(newProps)
  }

  const onZIndexChange = ({ value }: { value: TextFieldPropValue }) => {
    const newProps = { ...textProps, zIndex: Number(value) }
    onDispatch(newProps)
  }

  const onTextChange = ({ value }: { value: TextFieldPropValue }) => {
    const newProps = { ...textProps, text: String(value) }
    onDispatch(newProps)
  }

  return (
    <div className={`${styles.prototypeSettings}`}>
      <TextField
        className='m-b-m'
        size='xs'
        label='Ширина'
        onChange={onWidthChange}
        value={`${width}`}
        type='number'
        placeholder='Ширина'
      />

      <TextField
        className='m-b-m'
        size='xs'
        label='Высота'
        onChange={onHeightChange}
        value={`${height}`}
        type='number'
        placeholder='Высота'
      />

      <TextField
        className='m-b-m'
        size='xs'
        label='Верх'
        onChange={onTopChange}
        value={`${top}`}
        type='number'
        placeholder='Верх'
      />

      <TextField
        className='m-b-m'
        size='xs'
        label='Лево'
        onChange={onLeftChange}
        value={`${left}`}
        type='number'
        placeholder='Лево'
      />

      <TextField
        className='m-b-m'
        size='xs'
        label='z-index'
        onChange={onZIndexChange}
        value={`${zIndex}`}
        type='number'
        placeholder='z-index'
      />

      {'text' in textProps && (
        <TextField
          className='m-b-m'
          size='xs'
          label='Текст'
          onChange={onTextChange}
          value={`${textProps.text || 'Пример текста'}`}
          type='text'
          placeholder='Высота'
        />
      )}
    </div>
  )
}
