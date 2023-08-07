import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'
import { BaseProps, fillType } from '../../../../coreTypes'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { IconMaxWidth } from '@consta/icons/IconMaxWidth'
import { IconMaxHeight } from '@consta/icons/IconMaxHeight'
import style from './styles.module.css'
import { Text } from '@consta/uikit/Text'

const fillValues = [
  { name: 'default', icon: IconMaxHeight },
  { name: 'filled', icon: IconMaxWidth },
]

export const FilledSettings = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)

  const dispatch = useAppDispatch()

  function onFilledChange({ value }: { value: fillType | null }): void {
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
  let filled: fillType = selectedElementProps?.filled ?? { name: 'default', icon: IconMaxHeight }

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
