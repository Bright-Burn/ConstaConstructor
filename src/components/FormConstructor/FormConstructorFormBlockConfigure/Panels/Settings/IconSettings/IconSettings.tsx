import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { FC } from 'react'
import { Select } from '@consta/uikit/Select'
import { views, sizes, icons } from './IconsConstants'
import { IconProps, iconNames } from '../../../../store/formElements/iconTypes'
import { IconPropSize, IconPropView } from '@consta/uikit/Icon'
import React from 'react'

export const IconSettings: FC = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()

  if (selectedElementProps && 'icons' in selectedElementProps) {
    const props = selectedElementProps

    const onChangeSize = (value: IconPropSize | null) => {
      if (selectedElement && value) {
        const newProps: IconProps = {
          ...selectedElementProps,
        }
        newProps.size = value
        onDispatch(selectedElement, newProps)
      }
    }

    const onChangeView = (value: IconPropView | null) => {
      if (selectedElement && value) {
        const newProps: IconProps = {
          ...selectedElementProps,
        }
        newProps.view = value
        onDispatch(selectedElement, newProps)
      }
    }

    const onChangeIcon = (value: iconNames | null) => {
      if (selectedElement && value) {
        const newProps: IconProps = {
          ...selectedElementProps,
        }
        newProps.icons = value
        onDispatch(selectedElement, newProps)
      }
    }

    const onDispatch = (selectedElement: ISelectedElement, newProps: IconProps) => {
      dispatch(
        formConstructorSlice.actions.setSelectedElement({
          elementType: selectedElement.elementType,
          elementId: selectedElement.elementId,
          newProps: newProps,
        }),
      )
    }

    return (
      <div className={styles.userSettings}>
        {props ? (
          <>
            <Select
              getItemKey={(item: string | undefined) => item || ''}
              getItemLabel={(item: string | undefined) => item || ''}
              items={views}
              label='view'
              value={props.view}
              onChange={({ value }) => {
                onChangeView(value)
              }}
            />
            <Select
              getItemKey={(item: string | undefined) => item || ''}
              getItemLabel={(item: string | undefined) => item || ''}
              items={sizes}
              label='size'
              value={props.size}
              onChange={({ value }) => {
                onChangeSize(value)
              }}
            />
            <Select
              getItemKey={(item: string | undefined) => item || ''}
              getItemLabel={(item: string | undefined) => item || ''}
              items={icons}
              label='icons'
              value={props.icons}
              onChange={({ value }) => {
                onChangeIcon(value)
              }}
            />
          </>
        ) : null}
      </div>
    )
  }
  return null
}
