import React, { FC, useState } from 'react'
import './PrototypeSettings.css'
import { typeArray } from '../DataTimeSettings/types'
import { Select } from '@consta/uikit/Select'
import { TextField } from '@consta/uikit/TextField'
import { useProtorypeSettingsHandlers } from './PrototypeSettingsService'
import { IRectParams } from '../../../Elements/CustomRectElement/types'

interface CustomRectSettingsProps {}

const PrototypeSettings: FC<CustomRectSettingsProps> = () => {
  const { prototypeProps, onDispatch } = useProtorypeSettingsHandlers()

  return (
    <>
      <TextField
        className='m-b-m'
        label='Ширина'
        onChange={({ value }) => onDispatch({ ...prototypeProps, width: `${value}px` })}
        value={prototypeProps?.width.replace('px', '')}
        type='text'
        placeholder='Ширина'
        rightSide='px'
      />

      <TextField
        className='m-b-m'
        label='Высота'
        onChange={({ value }) => onDispatch({ ...prototypeProps, height: `${value}px` })}
        value={prototypeProps.height.replace('px', '')}
        type='text'
        placeholder='Высота'
        rightSide='px'
      />

      <TextField
        className='m-b-m'
        label='Верх'
        onChange={({ value }) => onDispatch({ ...prototypeProps, top: `${value}px` })}
        value={prototypeProps.top.replace('px', '')}
        type='text'
        placeholder='Верх'
        rightSide='px'
      />

      <TextField
        className='m-b-m'
        label='Право'
        onChange={({ value }) => onDispatch({ ...prototypeProps, right: `${value}px` })}
        value={prototypeProps.right.replace('px', '')}
        type='text'
        placeholder='Право'
        rightSide='px'
      />

      <TextField
        className='m-b-m'
        label='Низ'
        onChange={({ value }) => onDispatch({ ...prototypeProps, bottom: `${value}px` })}
        value={prototypeProps.bottom.replace('px', '')}
        type='text'
        placeholder='Низ'
        rightSide='px'
      />

      <TextField
        className='m-b-m'
        label='Лево'
        onChange={({ value }) => onDispatch({ ...prototypeProps, left: `${value}px` })}
        value={prototypeProps.left.replace('px', '')}
        type='text'
        placeholder='Лево'
        rightSide='px'
      />

      {/* <TextField */}
      {/*   className='m-b-m' */}
      {/*   label='Z-index' */}
      {/*   onChange={handleChange} */}
      {/*   value={value} */}
      {/*   type='number' */}
      {/*   placeholder='Z-index' */}
      {/* /> */}
    </>
  )
}

export default PrototypeSettings
