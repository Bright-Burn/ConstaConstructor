import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'
import { BaseProps } from '../../../../coreTypes'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { IconMaxWidth } from '@consta/icons/IconMaxWidth'
import { IconMaxHeight } from '@consta/icons/IconMaxHeight'
import { IconComponent } from '@consta/uikit/Icon'
import style from './styles.module.css'
import { Text } from '@consta/uikit/Text'

export type FillType = {
  name: string
  icon: IconComponent
}

const fillValues = [
  { name: 'default', icon: IconMaxHeight },
  { name: 'filled', icon: IconMaxWidth },
]

export const FilledSettings = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)

  const dispatch = useAppDispatch()

  function onFilledChange({ value }: { value: FillType | null }): void {
    const newProps = { ...selectedElementProps, filled: value }

    if (selectedElement) {
      dispatch(
        setSelectedElement({
          elementType: selectedElement?.elementType,
          elementId: selectedElement?.elementId,
          newProps: newProps as BaseProps,
        }),
      )
    }
  }
  let filled: FillType = selectedElementProps?.filled ?? fillValues[0]

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
        width='full'
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
