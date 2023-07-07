import { Select } from '@consta/uikit/Select'
import React, { useState } from 'react'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import { TagBasePropGroup, TagBasePropMode, groupArray, modeArray, sizeArray } from './types'
import { Switch } from '@consta/uikit/Switch'
import { TextFieldPropSize, TextFieldPropView } from '@consta/uikit/TextField'
import { PropForm } from '../../../../store/formElements/selectTypes'
import { Button } from '@consta/uikit/Button'
import { TagBasePropSize } from '@consta/uikit/__internal__/src/components/TagBase/TagBase'

export const TagSettings = () => {
  const { itemsProps, onChangeField, onChangeSize, onChangeMode, onChangeGroup, onChangeSwitch } =
    useItemsHandlers()

  return (
    <>
      <TextField value={itemsProps.label} onChange={onChangeField('label')} label={'label'} />
      <Select
        label='size'
        getItemKey={(key: TagBasePropSize) => key}
        getItemLabel={(label: TagBasePropSize) => label}
        value={itemsProps.size}
        items={sizeArray}
        onChange={({ value }) => onChangeSize(value)}
      />
      <Select
        label='mode'
        getItemKey={(key: TagBasePropMode) => key}
        getItemLabel={(label: TagBasePropMode) => label}
        value={itemsProps.mode}
        items={modeArray}
        onChange={({ value }) => onChangeMode(value)}
      />
      <Select
        label='group'
        getItemKey={(key: TagBasePropGroup) => key}
        getItemLabel={(label: TagBasePropGroup) => label}
        value={itemsProps.group}
        items={groupArray}
        onChange={({ value }) => onChangeGroup(value)}
      />
      <Switch onChange={onChangeSwitch('Icon')} label='icon' checked={itemsProps.icon} />
    </>
  )
}
