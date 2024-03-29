import React from 'react'
import { IconBackward } from '@consta/uikit/IconBackward'
import { IconDown } from '@consta/uikit/IconDown'
import { IconForward } from '@consta/uikit/IconForward'
import { IconTop } from '@consta/uikit/IconTop'
import { Select } from '@consta/uikit/Select'
import { Text } from '@consta/uikit/Text'

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

import style from './styles.module.css'

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
      <Text size="xs" view="secondary" className={style.textDecoration}>
        Внутренние отступы
      </Text>
      <div className={style.baseSettingsContainer}>
        <Select
          size="xs"
          form="defaultClear"
          getItemKey={key => key}
          getItemLabel={label => label}
          items={paddingsLeft}
          value={paddingProps?.paddingLeft || 'Null'}
          renderValue={({ item }) => (
            <div className={style.arrowAndText}>
              <IconBackward size="xs" />
              {item}
            </div>
          )}
          onChange={onChangePaddingLeft}
        />
        <Select
          size="xs"
          form="brick"
          getItemKey={key => key}
          getItemLabel={label => label}
          items={paddingsRight}
          value={paddingProps?.paddingRight || 'Null'}
          renderValue={({ item }) => (
            <div className={style.arrowAndText}>
              <IconForward size="xs" />
              {item}
            </div>
          )}
          onChange={onChangePaddingRight}
        />
        <Select
          size="xs"
          form="clearBrick"
          getItemKey={key => key}
          getItemLabel={label => label}
          items={paddingsTop}
          value={paddingProps?.paddingTop || 'Null'}
          renderValue={({ item }) => (
            <div className={style.arrowAndText}>
              <IconTop size="xs" />
              {item}
            </div>
          )}
          onChange={onChangePaddingTop}
        />
        <Select
          size="xs"
          form="clearDefault"
          getItemKey={key => key}
          getItemLabel={label => label}
          items={paddingsBottom}
          value={paddingProps?.paddingBottom || 'Null'}
          renderValue={({ item }) => (
            <div className={style.arrowAndText}>
              <IconDown size="xs" />
              {item}
            </div>
          )}
          onChange={onChangePaddingBottom}
        />
      </div>
      <Text size="xs" view="secondary" className={style.textDecoration}>
        Внешние отступы
      </Text>
      <div className={style.baseSettingsContainer}>
        <Select
          size="xs"
          form="defaultClear"
          getItemKey={key => key}
          getItemLabel={label => label}
          items={marginLeft}
          value={marginProps?.marginLeft || 'Null'}
          renderValue={({ item }) => (
            <div className={style.arrowAndText}>
              <IconBackward size="xs" />
              {item}
            </div>
          )}
          onChange={onChangemarginLeft}
        />
        <Select
          size="xs"
          form="brick"
          getItemKey={key => key}
          getItemLabel={label => label}
          items={marginRight}
          value={marginProps?.marginRight || 'Null'}
          renderValue={({ item }) => (
            <div className={style.arrowAndText}>
              <IconForward size="xs" />
              {item}
            </div>
          )}
          onChange={onChangemarginRight}
        />
        <Select
          size="xs"
          form="clearBrick"
          getItemKey={key => key}
          getItemLabel={label => label}
          items={marginTop}
          value={marginProps?.marginTop || 'Null'}
          renderValue={({ item }) => (
            <div className={style.arrowAndText}>
              <IconTop size="xs" />
              {item}
            </div>
          )}
          onChange={onChangemarginTop}
        />
        <Select
          size="xs"
          form="clearDefault"
          getItemKey={key => key}
          getItemLabel={label => label}
          items={marginBottom}
          value={marginProps?.marginBottom || 'Null'}
          renderValue={({ item }) => (
            <div className={style.arrowAndText}>
              <IconDown size="xs" />
              {item}
            </div>
          )}
          onChange={onChangemarginBottom}
        />
      </div>
    </>
  )
}
