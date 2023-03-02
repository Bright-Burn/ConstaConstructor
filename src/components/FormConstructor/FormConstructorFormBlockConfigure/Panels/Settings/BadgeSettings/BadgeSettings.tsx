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

  const onChangeSize = (value: BadgePropSize) => {
    if (selectedElement) {
      const newProps: BadgeProps = {
        ...(selectedElementProps as BadgeProps),
      }
      newProps.size = value

      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeView = (value: BadgePropView) => {
    if (selectedElement) {
      const newProps: BadgeProps = {
        ...(selectedElementProps as BadgeProps),
      }
      newProps.view = value

      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeStatus = (value: BadgePropStatus) => {
    if (selectedElement) {
      const newProps: BadgeProps = {
        ...(selectedElementProps as BadgeProps),
      }
      newProps.status = value

      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeForm = (value: BadgePropForm) => {
    if (selectedElement) {
      const newProps: BadgeProps = {
        ...(selectedElementProps as BadgeProps),
      }
      newProps.form = value

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
              onChangeSize(value as BadgePropSize)
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={views}
            label='View'
            value={props.view || 'filled'}
            onChange={({ value }) => {
              onChangeView(value as BadgePropView)
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={statuses}
            label='Status'
            value={props.status || 'success'}
            onChange={({ value }) => {
              onChangeStatus(value as BadgePropStatus)
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={forms}
            label='Form'
            value={props.status || 'success'}
            onChange={({ value }) => {
              onChangeForm(value as BadgePropForm)
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
