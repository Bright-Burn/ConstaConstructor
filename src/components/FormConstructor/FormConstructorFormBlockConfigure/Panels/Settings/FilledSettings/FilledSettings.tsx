import React from 'react'
import { IconMaxHeight } from '@consta/icons/IconMaxHeight'
import { IconMaxWidth } from '@consta/icons/IconMaxWidth'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import type { IconComponent } from '@consta/uikit/Icon'
import { Text } from '@consta/uikit/Text'

import type {
  ButtonElement,
  ButtonProps,
  TextFieldElement,
  TextFieldProps,
  UnionProps,
  UserElement,
  UserProps,
} from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'

import style from './styles.module.css'

type fillType = {
  name: string
  icon: IconComponent
}

const fillValues = [
  { name: 'default', icon: IconMaxHeight },
  { name: 'filled', icon: IconMaxWidth },
]
interface IFilledSettings {
  selectedElementProps: ButtonProps | TextFieldProps | UserProps
  selectedElement: ButtonElement | TextFieldElement | UserElement
  element: 'Button' | 'TextField' | 'User'
}
export const FilledSettings: React.FC<IFilledSettings> = ({
  selectedElementProps,
  selectedElement,
  element,
}) => {
  const dispatch = useAppDispatch()

  function onFilledChange({ value }: { value: fillType | null }): void {
    const newProps = {
      props: { ...selectedElementProps, filled: value?.name === 'filled' },
      type: element,
    }

    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps as UnionProps,
      }),
    )
  }
  const filled = selectedElementProps.filled
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
        value={filled}
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
