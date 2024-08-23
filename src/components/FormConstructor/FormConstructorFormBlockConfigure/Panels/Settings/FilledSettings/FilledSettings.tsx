import React from 'react'
import { Select } from '@consta/uikit/Select'

import type { BrandButtonProps, BrandTextFieldProps, BrandUserProps } from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'
import { isElementProps } from '../../../../utils'
import { getValueForSelect } from '../LabelForSelectComponent'

import { width } from './constants'
import type { FilledSettingsType, fillType } from './types'

import style from './styles.module.css'

/*Компонент нуждается в перепроетировании*/
export const FilledSettings: React.FC<FilledSettingsType> = ({ elementId, props }) => {
  const dispatch = useAppDispatch()

  function onFilledChange(value: fillType | null): void {
    const isFilled = value === 'filled'
    if (isElementProps<BrandButtonProps>(props, props.type)) {
      const newProps: BrandButtonProps = {
        props: { ...props.props, filled: isFilled },
        type: props.type,
      }
      dispatch(setInstanceProps(elementId, newProps))
    } else if (isElementProps<BrandTextFieldProps>(props, props.type)) {
      const newProps: BrandTextFieldProps = {
        props: { ...props.props, filled: isFilled },
        type: props.type,
      }
      dispatch(setInstanceProps(elementId, newProps))
    } else if (isElementProps<BrandUserProps>(props, props.type)) {
      const newProps: BrandUserProps = {
        props: { ...props.props, filled: isFilled },
        type: props.type,
      }
      dispatch(setInstanceProps(elementId, newProps))
    }
  }
  const filledValue = props.props.filled ? 'filled' : 'default'

  return (
    <div className={style.choiceGroup}>
      <Select
        getItemKey={(item: 'filled' | 'default') => item}
        getItemLabel={(item: 'filled' | 'default') => item}
        items={width}
        size="xs"
        value={filledValue}
        renderValue={({ item }) => getValueForSelect({ item, label: 'width' })}
        onChange={value => {
          value && onFilledChange(value)
        }}
      />
    </div>
  )
}
