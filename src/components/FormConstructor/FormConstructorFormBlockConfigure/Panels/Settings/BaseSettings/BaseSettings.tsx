import { Select } from '@consta/uikit/Select'
import React from 'react'
import { useMarginHandlers } from './MarginService'
import { usePaddingHandlers } from './PaddingService'
import { IconDown } from '@consta/uikit/IconDown'
import { IconTop } from '@consta/uikit/IconTop'
import { IconBackward } from '@consta/uikit/IconBackward'
import { IconForward } from '@consta/uikit/IconForward'
import { Text } from '@consta/uikit/Text'
import style from './styles.module.css'
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

export const BaseSettings = ({ paddingActive }: { paddingActive: boolean }) => {
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
      <Text size='xs' className={style.textDecoration}>
        Внутренние отступы
      </Text>
      <div className={style.marginAndPadding}>
        <Select
          disabled={paddingActive}
          size='xs'
          form='defaultClear'
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
          disabled={paddingActive}
          size='xs'
          form='brick'
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
          disabled={paddingActive}
          size='xs'
          form='clearBrick'
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
          disabled={paddingActive}
          size='xs'
          form='clearDefault'
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
      <Text size='xs' className={style.textDecoration}>
        Внешние отступы
      </Text>
      <div className={style.marginAndPadding}>
        <Select
          size='xs'
          form='defaultClear'
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
          size='xs'
          form='brick'
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
          size='xs'
          form='clearBrick'
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
          size='xs'
          form='clearDefault'
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
