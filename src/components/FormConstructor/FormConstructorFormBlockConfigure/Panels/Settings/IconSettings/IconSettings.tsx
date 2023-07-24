import styles from './styles.module.css'
import { FC } from 'react'
import { Select } from '@consta/uikit/Select'
import { views, sizes, icons } from './IconsConstants'
import { IconProps, iconNames, ISelectedElement } from '../../../../coreTypes'
import { IconPropSize, IconPropView } from '@consta/uikit/Icon'
import React from 'react'
import { Icons } from '../../../Elements/IconFormElement/mocks'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'

export const IconSettings: FC = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useAppDispatch()

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
        setSelectedElement({
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
              renderItem={({ item, active, onClick, onMouseEnter }) => (
                <div
                  style={{ display: 'flex', alignItems: 'center' }}
                  role='option'
                  aria-selected={active}
                  onMouseEnter={onMouseEnter}
                  onClick={onClick}
                >
                  {React.createElement(Icons[item])}
                  <div>{item}</div>
                </div>
              )}
            />
          </>
        ) : null}
      </div>
    )
  }
  return null
}
