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

    const onChangeField = (
      value: IconPropSize | IconPropView | iconNames,
      field: keyof IconProps,
    ) => {
      if (selectedElement) {
        const newProps: IconProps = {
          [field]: value,
          ...selectedElementProps,
        }

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
                onChangeField(value as IconPropView, 'view')
              }}
            />
            <Select
              getItemKey={(item: string | undefined) => item || ''}
              getItemLabel={(item: string | undefined) => item || ''}
              items={sizes}
              label='size'
              value={props.size}
              onChange={({ value }) => {
                onChangeField(value as IconPropSize, 'size')
              }}
            />
            <Select
              getItemKey={(item: string | undefined) => item || ''}
              getItemLabel={(item: string | undefined) => item || ''}
              items={icons}
              label='icons'
              value={props.icons}
              onChange={({ value }) => {
                onChangeField(value as iconNames, 'icons')
              }}
            />
          </>
        ) : null}
      </div>
    )
  }
  return null
}
