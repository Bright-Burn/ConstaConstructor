import styles from './styles.module.css'
import { FC } from 'react'
import { Select } from '@consta/uikit/Select'
import {
  IconProps,
  iconNames,
  ISelectedElement,
  IconElement,
  BrandIconProps,
} from '../../../../coreTypes'
import { IconPropSize, IconPropView } from '@consta/uikit/Icon'
import React from 'react'
import { Icons } from '../../../Elements/IconFormElement/mocks'
import { setSelectedElement, useAppDispatch } from '../../../../store'
import { sizes, icons, views } from './IconsConstants'
import { Text } from '@consta/uikit/Text'

type IconSettingsType = {
  selectedElementProps: IconProps
  selectedElement: IconElement
}

export const IconSettings: FC<IconSettingsType> = ({ selectedElementProps, selectedElement }) => {
  const dispatch = useAppDispatch()

  const props = { ...selectedElementProps }

  const onChangeSize = (value: IconPropSize | null) => {
    if (selectedElement && value) {
      const newProps: BrandIconProps = {
        props: { ...selectedElementProps },
        type: 'Icon',
      }
      newProps.props.size = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeView = (value: IconPropView | null) => {
    if (selectedElement && value) {
      const newProps: BrandIconProps = {
        props: { ...selectedElementProps },
        type: 'Icon',
      }
      newProps.props.view = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeIcon = (value: iconNames | null) => {
    if (selectedElement && value) {
      const newProps: BrandIconProps = {
        props: { ...selectedElementProps },
        type: 'Icon',
      }
      newProps.props.icons = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandIconProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  return (
    <div className={styles.iconSettings}>
      {props ? (
        <>
          <div className={styles.rowSettings}>
            <Select
              getItemKey={(item: string | undefined) => item || ''}
              getItemLabel={(item: string | undefined) => item || ''}
              items={sizes}
              label='Размер'
              size='xs'
              value={props.size}
              onChange={({ value }) => {
                onChangeSize(value)
              }}
            />
            <Select
              getItemKey={(item: string | undefined) => item || ''}
              getItemLabel={(item: string | undefined) => item || ''}
              items={icons}
              size='xs'
              value={props.icons}
              onChange={({ value }) => {
                onChangeIcon(value)
              }}
              renderItem={({ item, active, onClick, onMouseEnter }) => (
                <div
                  className={styles.iconItem}
                  role='option'
                  aria-selected={active}
                  onMouseEnter={onMouseEnter}
                  onClick={onClick}>
                  {React.createElement(Icons[item], { size: 'xs' })}
                  <Text size='xs'>{item}</Text>
                </div>
              )}
              renderValue={({ item }) => (
                <div className={styles.iconItem}>
                  {React.createElement(Icons[item], { size: 'xs' })}
                  <Text size='xs'>{item}</Text>
                </div>
              )}
            />
          </div>
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={views}
            label='Вид'
            size='xs'
            value={props.view}
            onChange={({ value }) => {
              onChangeView(value)
            }}
          />
        </>
      ) : null}
    </div>
  )
}
