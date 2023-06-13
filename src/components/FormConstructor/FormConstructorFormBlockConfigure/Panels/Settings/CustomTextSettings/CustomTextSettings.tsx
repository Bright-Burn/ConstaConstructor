import React from 'react'
import { useTextSettingsStore } from './CustomTextSettingsService'
import { TextField } from '@consta/uikit/TextField'
import { CustomTextProps } from '../../../Elements/CustomTextElement/types'

export const CustomTextSettings = () => {
  const { textProps, onDispatch } = useTextSettingsStore()
  const { width, height, text, left, top, zIndex } = textProps as CustomTextProps
  const onWidthChange = ({ value }) => {
    const newProps = { ...textProps, width: +value } as CustomTextProps
    onDispatch(newProps)
  }

  const onHeightChange = ({ value }) => {
    const newProps = { ...textProps, height: +value } as CustomTextProps
    onDispatch(newProps)
  }
  const onTopChange = ({ value }) => {
    const newProps = { ...textProps, top: +value } as CustomTextProps
    onDispatch(newProps)
  }
  
  const onLeftChange = ({ value }) => {
    const newProps = { ...textProps, left: +value } as CustomTextProps
    onDispatch(newProps)
  }
  
  const onZIndexChange = ({ value }) => {
    const newProps = { ...textProps, zIndex: +value } as CustomTextProps
    onDispatch(newProps)
  }
  
  const onTextChange = ({ value }) => {
    const newProps = { ...textProps, text: value } as CustomTextProps
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
        rightSide='px'
      />
      
      <TextField
        className='m-b-m'
        label='Высота'
        onChange={onHeightChange}
        value={`${height || 0}`}
        type='number'
        placeholder='Высота'
        rightSide='px'
      />
      
      <TextField
        className='m-b-m'
        label='Верх'
        onChange={onTopChange}
        value={`${top || 0}`}
        type='number'
        placeholder='Верх'
        rightSide='px'
      />
      
      <TextField
        className='m-b-m'
        label='Лево'
        onChange={onLeftChange}
        value={`${left || 0}`}
        type='number'
        placeholder='Лево'
        rightSide='px'
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
        rightSide='px'
      />

    </>
  )
}
