import React from 'react'
import { Select } from '@consta/uikit/Select'

import type {
  BrandButtonProps,
  BrandComboboxProps,
  BrandSelectProps,
  BrandTabsElementProps,
  BrandTextFieldProps,
  BrandTextProps,
  BrandUserProps,
} from '../../../../coreTypes'
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
    const filledValue = value === 'filled' ? true : undefined
    if (isElementProps<BrandButtonProps>(props, 'Button')) {
      const newProps: BrandButtonProps = {
        type: 'Button',
        props: { ...props.props, styles: { ...props.props.styles, filled: filledValue } },
      }
      dispatch(setInstanceProps(elementId, newProps))
    } else if (isElementProps<BrandUserProps>(props, 'User')) {
      const newProps: BrandUserProps = {
        props: { ...props.props, filled: filledValue },
        type: props.type,
      }
      dispatch(setInstanceProps(elementId, newProps))
    } else if (isElementProps<BrandSelectProps>(props, 'SelectForm')) {
      const newProps: BrandSelectProps = {
        type: 'SelectForm',
        props: {
          ...props.props,
          styles: {
            ...props.props.styles,
            filled: filledValue,
          },
        },
      }
      dispatch(setInstanceProps(elementId, newProps))
    } else if (isElementProps<BrandComboboxProps>(props, 'ComboBox')) {
      const newProps: BrandComboboxProps = {
        type: 'ComboBox',
        props: {
          ...props.props,
          styles: {
            ...props.props.styles,
            filled: filledValue,
          },
        },
      }
      dispatch(setInstanceProps(elementId, newProps))
    } else if (isElementProps<BrandTabsElementProps>(props, 'Tabs')) {
      const newProps: BrandTabsElementProps = {
        type: 'Tabs',
        props: {
          ...props.props,
          styles: {
            ...props.props.styles,
            filled: filledValue,
          },
        },
      }
      dispatch(setInstanceProps(elementId, newProps))
    } else if (isElementProps<BrandTextFieldProps>(props, 'TextField')) {
      const newProps: BrandTextFieldProps = {
        type: 'TextField',
        props: {
          ...props.props,
          styles: {
            ...props.props.styles,
            filled: filledValue,
          },
        },
      }
      dispatch(setInstanceProps(elementId, newProps))
    }
  }

  // Когда пропс будут стандартезированны, тогда не будет условий
  const filled =
    props.type === 'Button' ||
    props.type === 'ComboBox' ||
    props.type === 'SelectForm' ||
    props.type === 'Tabs' ||
    props.type === 'TextField'
      ? props.props.styles.filled
      : props.props.filled

  const filledValue = filled ? 'filled' : 'default'

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
