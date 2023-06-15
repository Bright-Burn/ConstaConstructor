import {
  formConstructorSlice,
  TextElementProps,
  useAppSelector,
} from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { FC, useLayoutEffect, useState } from 'react'
import { Select } from '@consta/uikit/Select'
import { Checkbox } from '@consta/uikit/Checkbox'
import { TextField } from '@consta/uikit/TextField'
import {
  TextPropView,
  TextPropSize,
  TextPropAlign,
  TextPropWeight,
  TextPropLineHeight,
  TextPropSpacing,
  TextPropDisplay,
  TextPropFont,
  TextPropType,
} from '@consta/uikit/Text'
import { Switch } from '@consta/uikit/Switch'
import {
  font,
  textAlign,
  weight,
  lineHeight,
  getPropsValue,
  views,
  sizes,
  type,
  spacing,
  display,
} from './textConstants'

export const TextSettings: FC = () => {
  const [props, setProps] = useState<TextElementProps | undefined>()

  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    if (selectedElement) {
      setProps(selectedElementProps as TextElementProps)
    }
  }, [selectedElementProps, selectedElement])

  const onChangeField = (
    value:
      | TextPropSize
      | TextPropView
      | TextPropAlign
      | TextPropWeight
      | TextPropDisplay
      | TextPropFont
      | TextPropType
      | string
      | TextPropType,
    field: keyof TextElementProps,
  ) => {
    if (selectedElement) {
      const newProps: TextElementProps = {
        ...(selectedElementProps as TextElementProps),
      }
      // @ts-ignore
      newProps[field] = value

      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeCheckboxValues = (
    value: {
      e: React.ChangeEvent<HTMLInputElement>
      checked: boolean
    },
    field: keyof TextElementProps,
  ) => {
    if (selectedElement) {
      const newProps: TextElementProps = {
        ...(selectedElementProps as TextElementProps),
      }
      const newValue = getPropsValue(field)
      // @ts-ignore
      newProps[field] = value.checked ? newValue : undefined

      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeTruncate = ({ checked }: { checked: boolean }) => {
    if (selectedElement) {
      const newProps: TextElementProps = {
        ...(selectedElementProps as TextElementProps),
      }
      newProps.truncate = checked

      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: TextElementProps) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  return (
    <div className={styles.textSettings}>
      {props ? (
        <>
          <TextField
            size='xs'
            label='Content'
            value={props.content}
            onChange={({ value }) => {
              onChangeField(value as string, 'content')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={sizes}
            size='xs'
            label='Size'
            value={props.size || 's'}
            onChange={({ value }) => {
              onChangeField(value as TextPropSize, 'size')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={views}
            size='xs'
            label='View'
            value={props.view}
            onChange={({ value }) => {
              onChangeField(value as TextPropView, 'view')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={textAlign}
            size='xs'
            label='Align'
            value={props.align}
            onChange={({ value }) => {
              onChangeField(value as TextPropAlign, 'align')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={weight}
            size='xs'
            label='Weight'
            value={props.weight}
            onChange={({ value }) => {
              onChangeField(value as TextPropWeight, 'weight')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={lineHeight}
            size='xs'
            label='LineHeight'
            value={props.lineHeight}
            onChange={({ value }) => {
              onChangeField(value as TextPropLineHeight, 'lineHeight')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={spacing}
            size='xs'
            label='Spacing'
            value={props.spacing}
            onChange={({ value }) => {
              onChangeField(value as TextPropSpacing, 'spacing')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={display}
            size='xs'
            label='Display'
            value={props.display}
            onChange={({ value }) => {
              onChangeField(value as TextPropDisplay, 'display')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={font}
            size='xs'
            label='Font'
            value={props.font}
            onChange={({ value }) => {
              onChangeField(value as TextPropFont, 'font')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={type}
            size='xs'
            label='Type'
            value={props.type}
            onChange={({ value }) => {
              onChangeField(value as TextPropType, 'type')
            }}
          />
          <Checkbox
            size='xs'
            label='decoration'
            checked={props.decoration !== undefined}
            onChange={value => {
              onChangeCheckboxValues(value, 'decoration')
            }}
          />
          <Checkbox
            size='xs'
            label='fontStyle'
            checked={props.fontStyle !== undefined}
            onChange={value => {
              onChangeCheckboxValues(value, 'fontStyle')
            }}
          />
          <Checkbox
            size='xs'
            label='cursor'
            checked={props.cursor !== undefined}
            onChange={value => {
              onChangeCheckboxValues(value, 'cursor')
            }}
          />
          <Checkbox
            size='xs'
            label='transform'
            checked={props.transform !== undefined}
            onChange={value => {
              onChangeCheckboxValues(value, 'transform')
            }}
          />

          <Switch
            checked={props.truncate ?? false}
            size='xs'
            label='truncate'
            onChange={onChangeTruncate}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
