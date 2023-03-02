import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import styles from './styles.module.css'
import { BadgeProps } from '../../../../store/formElements/badgeTypes'
import { BadgePropForm, BadgePropSize, BadgePropStatus, BadgePropView } from '@consta/uikit/Badge'
import { useDispatch } from 'react-redux'
import { useLayoutEffect, useState } from 'react'
import { Select } from '@consta/uikit/Select'
import { Checkbox } from '@consta/uikit/Checkbox'
import { TextField } from '@consta/uikit/TextField'

export const BadgeSettings = () => {
  const [props, setProps] = useState<BadgeProps | undefined>()

  const sizes: BadgePropSize[] = ['l', 'm', 's', 'xs']
  const views: BadgePropView[] = ['filled', 'stroked']
  const statuses: BadgePropStatus[] = ['normal', 'success', 'system', 'warning']
  const forms: BadgePropForm[] = ['default', 'round']

  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    if (selectedElement) {
      setProps(selectedElementProps as BadgeProps)
    }
  }, [selectedElementProps, selectedElement])

  const onChangeField = (
    value: BadgePropSize | BadgePropView | BadgePropStatus | BadgePropForm,
    field: keyof BadgeProps,
  ) => {
    if (selectedElement) {
      const newProps: BadgeProps = {
        ...(selectedElementProps as BadgeProps),
      }

      // @ts-ignore
      newProps[field] = value

      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeMinified = (event: {
    e: React.ChangeEvent<HTMLInputElement>
    checked: boolean
  }) => {
    if (selectedElement) {
      const newProps: BadgeProps = {
        ...(selectedElementProps as BadgeProps),
      }
      newProps.minified = event.checked

      onDispatch(selectedElement, newProps)
    }
  }

  const handleOnChangeLabel = ({ value }: { value: string | null }) => {
    if (selectedElement) {
      const newProps: BadgeProps = {
        ...(selectedElementProps as BadgeProps),
      }
      newProps.label = value || undefined

      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BadgeProps) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  return (
    <div className={styles.badgeSettings}>
      {props ? (
        <>
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={sizes}
            label='Size'
            value={props.size || 's'}
            onChange={({ value }) => {
              onChangeField(value as BadgePropSize, 'size')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={views}
            label='View'
            value={props.view || 'filled'}
            onChange={({ value }) => {
              onChangeField(value as BadgePropView, 'view')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={statuses}
            label='Status'
            value={props.status || 'success'}
            onChange={({ value }) => {
              onChangeField(value as BadgePropStatus, 'status')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={forms}
            label='Form'
            value={props.form || 'default'}
            onChange={({ value }) => {
              onChangeField(value as BadgePropForm, 'form')
            }}
          />
          <Checkbox
            label='Minified'
            checked={props.minified || false}
            onChange={onChangeMinified}
          />
          <TextField value={props.label} onChange={handleOnChangeLabel} />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
