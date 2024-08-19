import React, { useState } from 'react'
import { IconBackward } from '@consta/icons/IconBackward'
import { IconDown } from '@consta/icons/IconDown'
import { IconForward } from '@consta/icons/IconForward'
import { IconTop } from '@consta/icons/IconTop'
import { Button } from '@consta/uikit/Button'
import { Select } from '@consta/uikit/Select'
import { Text } from '@consta/uikit/Text'

import { useMarginHandlers } from './MarginService'
import { usePaddingHandlers } from './PaddingService'
import { SaveModal } from './SaveModal'
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

import styles from '../styles.module.css'
import style from './styles.module.css'

export const BaseSettings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const onCloseModal = () => {
    setIsModalOpen(false)
  }
  const onOpenModal = () => {
    setIsModalOpen(true)
  }
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
      <div className={style.baseContainer}>
        <div className={style.baseContainerCol}>
          <Text size="xs" view="secondary" className={style.textDecoration}>
            padding
          </Text>
          <div className={style.baseSettingsContainer}>
            <Select
              size="xs"
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
            <Select
              size="xs"
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
          </div>
        </div>
        <div className={style.baseContainerCol}>
          <Text size="xs" view="secondary" className={style.textDecoration}>
            margin
          </Text>
          <div className={style.baseSettingsContainer}>
            <Select
              size="xs"
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
            />{' '}
            <Select
              size="xs"
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
            <Select
              size="xs"
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
          </div>
        </div>
      </div>
      <Button
        className={styles.exportButton}
        view="ghost"
        size="xs"
        label="Export"
        onClick={onOpenModal}
      />
      <SaveModal isModalOpen={isModalOpen} onCloseModal={onCloseModal} />
    </>
  )
}
