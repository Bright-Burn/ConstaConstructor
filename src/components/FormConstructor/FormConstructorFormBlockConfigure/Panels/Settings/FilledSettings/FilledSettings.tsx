import React from 'react'
import { IconMaxHeight } from '@consta/icons/IconMaxHeight'
import { IconMaxWidth } from '@consta/icons/IconMaxWidth'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Text } from '@consta/uikit/Text'

import type { BrandButtonProps, BrandTextFieldProps, BrandUserProps } from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'
import { isElementProps } from '../../../../utils'

import type { FilledSettingsType, fillType } from './types'

import style from './styles.module.css'

const fillValues = [
  { name: 'default', icon: IconMaxHeight },
  { name: 'filled', icon: IconMaxWidth },
]

/*Компонент нуждается в перепроетировании*/
export const FilledSettings: React.FC<FilledSettingsType> = ({ elementId, props }) => {
  const dispatch = useAppDispatch()

  function onFilledChange(value: fillType | null): void {
    const isFilled = value?.name === 'filled'
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
  const filledValue = props.props.filled
    ? { name: 'filled', icon: IconMaxHeight }
    : { name: 'default', icon: IconMaxWidth }

  return (
    <div className={style.choiceGroup}>
      <Text view="secondary" size="xs">
        Ширина
      </Text>
      <ChoiceGroup
        size="xs"
        onlyIcon={true}
        view="ghost"
        aria-label="Ширина"
        value={filledValue}
        items={fillValues}
        getItemLabel={item => item.name}
        getItemIcon={item => item.icon}
        multiple={false}
        name="ChoiceGroupExample"
        onChange={value => {
          onFilledChange(value)
        }}
      />
    </div>
  )
}
