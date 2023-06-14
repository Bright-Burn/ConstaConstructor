import { Select } from '@consta/uikit/Select'
import { IconDown } from '@consta/uikit/IconDown'
import { IconTop } from '@consta/uikit/IconTop'
import { IconBackward } from '@consta/uikit/IconBackward'
import { IconForward } from '@consta/uikit/IconForward'
import React from 'react'
import { useMarginHandlers } from './MarginService'
import { usePaddingHandlers } from './PaddingService'
import {
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  paddingsBottom,
  paddingsLeft,
  paddingsRight,
  paddingsTop,
} from './types'
import { Text } from '@consta/uikit/Text'
export const BaseSettings = () => {
  const {
    paddingProps,
    onChangePaddingBottom,
    onChangePaddingLeft,
    onChangePaddingRight,
    onChangePaddingTop,
  } = usePaddingHandlers()
  const {
    marginProps,
    onChangemarginBottom,
    onChangemarginLeft,
    onChangemarginRight,
    onChangemarginTop,
  } = useMarginHandlers()
  return (
    <>
      <Text size='xs' style={{ paddingLeft: 12, paddingRight: 12 }}>
        {' '}
        Внешние отступы
      </Text>
      <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: 12, paddingRight: 12 }}>
        <Select
          style={{ width: '25%' }}
          size='xs'
          getItemKey={key => key}
          getItemLabel={label => label}
          items={paddingsLeft}
          value={`${paddingProps?.paddingLeft || ''}`}
          onChange={onChangePaddingLeft}
          renderValue={({ item }) => (
            <>
              <IconBackward size='xs' />
              {item}
            </>
          )}
        />
        <Select
          style={{ width: '25%' }}
          size='xs'
          form='brickDefault'
          getItemKey={key => key}
          getItemLabel={label => label}
          items={paddingsRight}
          value={`${paddingProps?.paddingRight || ''}`}
          onChange={onChangePaddingRight}
          renderValue={({ item }) => (
            <>
              <IconForward size='xs' />
              {item}
            </>
          )}
        />
        <Select
          style={{ width: '25%' }}
          size='xs'
          form='brickDefault'
          getItemKey={key => key}
          getItemLabel={label => label}
          items={paddingsTop}
          value={`${paddingProps?.paddingTop || ''}`}
          onChange={onChangePaddingTop}
          renderValue={({ item }) => (
            <>
              <IconTop size='xs' />
              {item}
            </>
          )}
        />
        <Select
          style={{ width: '25%' }}
          size='xs'
          getItemKey={key => key}
          getItemLabel={label => label}
          items={paddingsBottom}
          value={`${paddingProps?.paddingBottom || ''}`}
          onChange={onChangePaddingBottom}
          renderValue={({ item }) => (
            <>
              <IconDown size='xs' />
              {item}
            </>
          )}
        />
      </div>
      <Text size='xs' style={{ paddingLeft: 12, paddingRight: 12 }}>
        {' '}
        Внутренние отступы
      </Text>
      <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: 12, paddingRight: 12 }}>
        <Select
          style={{ width: '25%' }}
          size='xs'
          getItemKey={key => key}
          getItemLabel={label => label}
          items={marginLeft}
          value={`${marginProps?.marginLeft || ''}`}
          onChange={onChangemarginLeft}
          renderValue={({ item }) => (
            <>
              <IconBackward size='xs' />
              {item}
            </>
          )}
        />
        <Select
          style={{ width: '25%' }}
          size='xs'
          form='brickDefault'
          getItemKey={key => key}
          getItemLabel={label => label}
          items={marginRight}
          value={`${marginProps?.marginRight || ''}`}
          onChange={onChangemarginRight}
          renderValue={({ item }) => (
            <>
              <IconForward size='xs' />
              {item}
            </>
          )}
        />
        <Select
          style={{ width: '25%' }}
          size='xs'
          form='brickDefault'
          getItemKey={key => key}
          getItemLabel={label => label}
          items={marginTop}
          value={`${marginProps?.marginTop || ''}`}
          onChange={onChangemarginTop}
          renderValue={({ item }) => (
            <>
              <IconTop size='xs' />
              {item}
            </>
          )}
        />
        <Select
          style={{ width: '25%' }}
          size='xs'
          getItemKey={key => key}
          getItemLabel={label => label}
          items={marginBottom}
          value={`${marginProps?.marginBottom || ''}`}
          onChange={onChangemarginBottom}
          renderValue={({ item }) => (
            <>
              <IconDown size='xs' />
              {item}
            </>
          )}
        />
      </div>
    </>
  )
}
