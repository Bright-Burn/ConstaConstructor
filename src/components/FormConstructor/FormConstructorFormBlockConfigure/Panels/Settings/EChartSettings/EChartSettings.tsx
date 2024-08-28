import type { FC } from 'react'
import React from 'react'
import { IconDownload } from '@consta/icons/IconDownload'
import { Button } from '@consta/uikit/Button'
import { FileField } from '@consta/uikit/FileField'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import type { EChartProps } from '../../../../coreTypes'

import { useItemsHandlers } from './itemsService'

import styles from './styles.module.css'

type EChartSettingsType = {
  selectedViewProps: EChartProps
  selectedViewId: string
}

export const EChartSettings: FC<EChartSettingsType> = ({ selectedViewProps, selectedViewId }) => {
  const { onDownload, onChangeWidth, onChangeHeight } = useItemsHandlers(
    selectedViewProps,
    selectedViewId,
  )
  return (
    <div className={styles.layoutSettings}>
      <div className={styles.rowSettings}>
        <TextField
          className={styles.flexGrow}
          value={selectedViewProps.height.toString()}
          type="number"
          leftSide="H"
          size="xs"
          min="0"
          onChange={onChangeHeight}
        />{' '}
        <Text view="secondary" size="xs" className={styles.settingCaption}>
          px
        </Text>
      </div>
      <div className={styles.rowSettings}>
        <TextField
          className={styles.flexGrow}
          value={selectedViewProps.width.toString()}
          type="number"
          leftSide="W"
          size="xs"
          min="0"
          onChange={onChangeWidth}
        />
        <Text view="secondary" size="xs" className={styles.settingCaption}>
          px
        </Text>
      </div>
      <div className={styles.rowSettings}>
        <FileField id={selectedViewId} onChange={onDownload}>
          {props => (
            <Button
              id="btn"
              {...props}
              label="config"
              view="secondary"
              iconLeft={IconDownload}
              size="xs"
            />
          )}
        </FileField>
      </div>
    </div>
  )
}
