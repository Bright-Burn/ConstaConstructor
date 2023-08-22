import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'
import { ButtonProps, TextFieldProps, UnionProps } from '../../../../coreTypes'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { IconMaxWidth } from '@consta/icons/IconMaxWidth'
import { IconMaxHeight } from '@consta/icons/IconMaxHeight'
import style from './styles.module.css'
import { Text } from '@consta/uikit/Text'
import { IconComponent } from '@consta/uikit/Icon'
import { TextFieldElement } from '../../../../coreTypes/textFieldTypes'
import { ButtonElement } from '../../../../coreTypes/buttonTypes'
import React from 'react'

type fillType = {
  name: string
  icon: IconComponent
}

const fillValues = [
  { name: 'default', icon: IconMaxHeight },
  { name: 'filled', icon: IconMaxWidth },
]
interface IFilledSettings {
  selectedElementProps: ButtonProps | TextFieldProps
  selectedElement: ButtonElement | TextFieldElement
}
export const FilledSettings: React.FC<IFilledSettings> = ({
  selectedElementProps,
  selectedElement,
}) => {
  const dispatch = useAppDispatch()

  function onFilledChange({ value }: { value: fillType | null }): void {
    const newProps = {
      props: { ...selectedElementProps, filled: value?.name === 'filled' ? true : false },
      type: 'Button',
    }

    if (selectedElement) {
      dispatch(
        setSelectedElement({
          elementType: selectedElement?.elementType,
          elementId: selectedElement?.elementId,
          newProps: newProps as UnionProps,
        }),
      )
    }
  }
  let filled = selectedElementProps?.filled
    ? { name: 'filled', icon: IconMaxHeight }
    : { name: 'default', icon: IconMaxWidth }

  return (
    <div className={style.choiceGroup}>
      <Text view='secondary' size='xs'>
        Ширина
      </Text>
      <ChoiceGroup
        size='xs'
        onlyIcon
        view='ghost'
        aria-label='Ширина'
        value={filled}
        onChange={value => onFilledChange(value)}
        items={fillValues}
        getItemLabel={item => item.name}
        getItemIcon={item => item.icon}
        multiple={false}
        name='ChoiceGroupExample'
      />
    </div>
  )
}
