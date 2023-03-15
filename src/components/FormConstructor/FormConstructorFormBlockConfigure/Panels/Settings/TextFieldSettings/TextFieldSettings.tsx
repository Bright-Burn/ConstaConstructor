import { useLayoutEffect, useState } from 'react'
import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { TextField } from '@consta/uikit/TextField'
import { ISelectedElement } from '../../../../store/formElements/types'
import { TextFieldProps } from '../../../../store/formElements/textFieldTypes'
import { IconPhoto } from '@consta/uikit/IconPhoto'

export const TextFieldSettings = () => {
  const [props, setProps] = useState<TextFieldProps>()

  const status: string[] = ['alert', 'success', 'warning', 'undefined']
  const types: string[] = ['text', 'textarea', 'number', 'password']
  const sizes: string[] = ['l', 'm', 's', 'xs']
  const width: string[] = ['full', 'default']
  const view: string[] = ['default', 'clear']
  const labelPosition: string[] = ['top', 'left']
  const forms: string[] = [
    'default',
    'brick',
    'round',
    'clearRound',
    'roundClear',
    'clearDefault',
    'defaultClear',
    'defaultBrick',
    'brickDefault',
    'brickClear',
    'clearBrick',
    'clearClear',
  ]
  const leftSideTypes: string[] = ['undefined', 'icon', 'text']
  const rightSideTypes: string[] = ['undefined', 'icon', 'text']
  const [leftSideType, setLeftSideType] = useState('undefined')
  const [rightSideType, setRightSideType] = useState('undefined')

  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)

  const dispatch = useDispatch()

  useLayoutEffect(() => {
    if (selectedElement) {
      const textFieldProps = selectedElementProps as TextFieldProps

      setProps(textFieldProps)
    }
  }, [selectedElementProps, selectedElement])

  const onChangeTextField =
    (propsName: keyof TextFieldProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        const newProps: TextFieldProps = {
          ...(selectedElementProps as TextFieldProps),
        }
        // @ts-ignore
        newProps[propsName] = value || ''
        onDispatch(selectedElement, newProps)
      }
    }

  const onChangeSwitch =
    (propsName: keyof TextFieldProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        const newProps: TextFieldProps = {
          ...(selectedElementProps as TextFieldProps),
        }
        // @ts-ignore
        newProps[propsName] = checked
        onDispatch(selectedElement, newProps)
      }
    }

  const onChangeLeftSideType = ({ value }: { value: string | null }) => {
    if (selectedElement) {
      const newProps: TextFieldProps = {
        ...(selectedElementProps as TextFieldProps),
      }

      if (value === 'icon') {
        newProps.leftSide = IconPhoto
      } else if (value === 'text') {
        newProps.leftSide = 'form'
      } else {
        newProps.leftSide = ''
      }
      setLeftSideType(value || '')
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeRightSideType = ({ value }: { value: string | null }) => {
    if (selectedElement) {
      const newProps: TextFieldProps = {
        ...(selectedElementProps as TextFieldProps),
      }

      if (value === 'icon') {
        newProps.rightSide = IconPhoto
      } else if (value === 'text') {
        newProps.rightSide = 'm'
      } else {
        newProps.rightSide = ''
      }
      setRightSideType(value || '')
      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: TextFieldProps) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  return (
    <div className={styles.textFieldSettings}>
      {props ? (
        <>
          <Select
            getItemKey={key => key}
            getItemLabel={label => label}
            label='Type'
            items={types}
            value={`${props.type}`}
            onChange={onChangeTextField('type')}
          />
          {props.type === 'number' ? (
            <>
              <TextField
                onChange={onChangeTextField('step')}
                value={`${props.step}`}
                type='number'
                label='Step'
                min='0'
              />
              <Switch
                checked={props.incrementButtons ?? true}
                label='incrementButtons'
                onChange={onChangeSwitch('incrementButtons')}
              />
              <TextField
                onChange={onChangeTextField('min')}
                value={`${props.min}`}
                type='number'
                label='Min'
                min='0'
              />
              <TextField
                onChange={onChangeTextField('max')}
                value={`${props.max}`}
                type='number'
                label='Max'
                min='0'
              />
            </>
          ) : (
            <></>
          )}
          {props.type === 'textarea' ? (
            <>
              <TextField
                onChange={onChangeTextField('minRows')}
                value={`${props.minRows}`}
                type='number'
                label='MinRows'
                min='0'
              />
              <TextField
                onChange={onChangeTextField('maxRows')}
                value={`${props.maxRows}`}
                type='number'
                label='MaxRows'
                min='0'
              />
            </>
          ) : (
            <></>
          )}
          <Select
            getItemKey={key => key}
            label='Width'
            getItemLabel={label => label}
            items={width}
            value={`${props.width}`}
            onChange={onChangeTextField('width')}
          />
          <Select
            getItemKey={key => key}
            label='Form'
            getItemLabel={label => label}
            items={forms}
            value={`${props.form}`}
            onChange={onChangeTextField('form')}
          />
          <Select
            getItemKey={key => key}
            label='Status'
            getItemLabel={label => label}
            items={status}
            value={`${props.status}`}
            onChange={onChangeTextField('status')}
          />
          <Select
            getItemKey={key => key}
            getItemLabel={label => label}
            items={sizes}
            label='Size'
            value={`${props.size || 's'}`}
            onChange={onChangeTextField('size')}
          />
          <Select
            getItemKey={key => key}
            label='View'
            getItemLabel={label => label}
            items={view}
            value={`${props.view}`}
            onChange={onChangeTextField('view')}
          />
          <Switch
            checked={props.disabled ?? false}
            label='disabled'
            onChange={onChangeSwitch('disabled')}
          />
          <Switch
            checked={props.required ?? false}
            label='required'
            onChange={onChangeSwitch('required')}
          />
          <Switch
            checked={props.withClearButton ?? false}
            label='withClearButton'
            onChange={onChangeSwitch('withClearButton')}
          />
          <TextField
            label='Caption'
            value={`${props.caption || ''}`}
            onChange={onChangeTextField('caption')}
          />
          <TextField
            label='Label'
            value={`${props.label || ''}`}
            onChange={onChangeTextField('label')}
          />
          <Select
            getItemKey={key => key}
            label='LabelPosition'
            getItemLabel={label => label}
            items={labelPosition}
            value={`${props.labelPosition}`}
            onChange={onChangeTextField('labelPosition')}
          />
          <TextField
            onChange={onChangeTextField('maxLength')}
            value={`${props.maxLength}`}
            type='number'
            label='MaxLength'
            min='0'
          />
          <TextField
            label='Placeholder'
            value={`${props.placeholder || ''}`}
            onChange={onChangeTextField('placeholder')}
          />
          <Select
            getItemKey={key => key}
            label='LeftSideType'
            getItemLabel={label => label}
            items={leftSideTypes}
            value={`${leftSideType}`}
            onChange={onChangeLeftSideType}
          />
          <TextField
            label='LeftSideText'
            value={`${props.leftSide}`}
            onChange={onChangeTextField('leftSide')}
          />
          <Select
            getItemKey={key => key}
            label='RightSideType'
            getItemLabel={label => label}
            items={rightSideTypes}
            value={`${rightSideType}`}
            onChange={onChangeRightSideType}
          />
          <TextField
            label='RightSideText'
            value={`${props.rightSide}`}
            onChange={onChangeTextField('rightSide')}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
