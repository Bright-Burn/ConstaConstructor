import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { FC, useLayoutEffect, useState } from 'react'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { views, sizes, width, status } from './UserConstants'
import { UserProps } from '../../../../store/formElements/userTypes'
import { UserPropView, UserPropWidth, UserPropSize, UserPropStatus } from '@consta/uikit/User'
import { TextField } from '@consta/uikit/TextField'

export const UserSettings: FC = () => {
  const [props, setProps] = useState<UserProps | undefined>()

  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    if (selectedElement) {
      setProps(selectedElementProps as UserProps)
    }
  }, [selectedElementProps, selectedElement])

  const onChangeField = (
    value: UserPropView | UserPropWidth | UserPropSize | UserPropStatus | string,
    field: keyof UserProps,
  ) => {
    if (selectedElement) {
      const newProps: UserProps = {
        ...(selectedElementProps as UserProps),
      }
      // @ts-ignore
      newProps[field] = value

      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeSwitch =
    (propsName: keyof UserProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        const newProps: UserProps = {
          ...(selectedElementProps as UserProps),
        }
        // @ts-ignore
        newProps[propsName] = checked
        onDispatch(selectedElement, newProps)
      }
    }

  const onDispatch = (selectedElement: ISelectedElement, newProps: UserProps) => {
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
              onChangeField(value as UserPropView, 'view')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={width}
            label='width'
            value={props.width}
            onChange={({ value }) => {
              onChangeField(value as UserPropWidth, 'width')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={sizes}
            label='size'
            value={props.size}
            onChange={({ value }) => {
              onChangeField(value as UserPropSize, 'size')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={status}
            label='status'
            value={props.status}
            onChange={({ value }) => {
              onChangeField(value as UserPropStatus, 'status')
            }}
          />
          <TextField
            label='avatarUrl'
            value={props.avatarUrl}
            onChange={({ value }) => {
              onChangeField(value as string, 'avatarUrl')
            }}
          />
          <TextField
            label='Name'
            value={props.name}
            onChange={({ value }) => {
              onChangeField(value as string, 'name')
            }}
          />
          <TextField
            label='Info'
            value={props.info}
            onChange={({ value }) => {
              onChangeField(value as string, 'info')
            }}
          />
          <Switch
            checked={props.withArrow ?? false}
            label='withArrow'
            onChange={onChangeSwitch('withArrow')}
          />
          <Switch
            checked={props.onlyAvatar ?? false}
            label='onlyAvatar'
            onChange={onChangeSwitch('onlyAvatar')}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
