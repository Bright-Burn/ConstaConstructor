import React, { useLayoutEffect, useState } from 'react'
import {
  formConstructorSlice,
  LayoutElementProps,
  useAppSelector,
} from '../../../../store/formElements'
import { Select } from '@consta/uikit/Select'
import { TextField } from '@consta/uikit/TextField'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
export const LayoutSettings = () => {
  const [props, setProps] = useState<LayoutElementProps | undefined>()
  const [directions] = useState<string[]>(['row', 'column'])

  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)

  const dispatch = useDispatch()

  useLayoutEffect(() => {
    if (selectedElementProps) {
      setProps(selectedElementProps as LayoutElementProps)
    }
  }, [selectedElementProps])

  const onChangeFlex =
    (propsName: keyof LayoutElementProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        const newProps: LayoutElementProps = {
          ...(selectedElementProps as LayoutElementProps),
        }

        // @ts-ignore
        newProps[propsName] = value ? Number(value) : 1
        dispatch(
          formConstructorSlice.actions.setSelectedElement({
            elementType: selectedElement.elementType,
            elementId: selectedElement.elementId,
            newProps: newProps,
          }),
        )
      }
    }

  const onChangeDirection =
    (propsName: keyof LayoutElementProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        const newProps: LayoutElementProps = {
          ...(selectedElementProps as LayoutElementProps),
        }

        // @ts-ignore
        newProps[propsName] = value
        dispatch(
          formConstructorSlice.actions.setSelectedElement({
            elementType: selectedElement.elementType,
            elementId: selectedElement.elementId,
            newProps: newProps,
          }),
        )
      }
    }

  return (
    <div className={styles.layoutSettings}>
      {props ? (
        <>
          <TextField
            onChange={onChangeFlex('flex')}
            value={`${props.flex}`}
            type='number'
            label='Flex'
            min='1'
            placeholder='Одна строчка'
          />
          <Select
            getItemKey={key => key}
            label='Direction'
            getItemLabel={label => label}
            items={directions}
            value={`${props.direction || 'row'}`}
            onChange={onChangeDirection('direction')}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
