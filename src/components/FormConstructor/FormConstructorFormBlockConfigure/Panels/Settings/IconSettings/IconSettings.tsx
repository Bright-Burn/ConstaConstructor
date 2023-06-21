import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { FC, useLayoutEffect, useState } from 'react'
import { Select } from '@consta/uikit/Select'
import { views, sizes, icons } from './IconsConstants'
import { IconProps, iconNames } from '../../../../store/formElements/iconTypes'
import { IconPropSize, IconPropView } from '@consta/uikit/Icon'
import React from 'react'
import { Icons } from '../../../Elements/IconFormElement/mocks'

export const IconSettings: FC = () => {
  const [props, setProps] = useState<IconProps | undefined>()

  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    if (selectedElement) {
      setProps(selectedElementProps as IconProps)
    }
  }, [selectedElementProps, selectedElement])

  const onChangeField = (
    value: IconPropSize | IconPropView | iconNames,
    field: keyof IconProps,
  ) => {
    if (selectedElement) {
      const newProps: IconProps = {
        ...(selectedElementProps as IconProps),
      }
      // @ts-ignore
      newProps[field] = value

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
            renderItem={({ item, active, hovered, onClick, onMouseEnter }) => (
              <div
                style={{ display: 'flex', alignItems: 'center' }}
                role='option'
                aria-selected={active}
                onMouseEnter={onMouseEnter}
                onClick={onClick}>
                {React.createElement(Icons[item])}
                <div>{item}</div>
              </div>
            )}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
