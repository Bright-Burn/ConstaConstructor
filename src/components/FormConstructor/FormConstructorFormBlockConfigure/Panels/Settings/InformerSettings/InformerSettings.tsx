import {
  formConstructorSlice,
  InformerElementProps,
  useAppSelector,
} from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import styles from './styles.module.css'
import { InformerPropSize, InformerPropStatus, InformerPropView } from '@consta/uikit/Informer'
import { useDispatch } from 'react-redux'
import { useLayoutEffect, useState } from 'react'
import { Select } from '@consta/uikit/Select'
import { TextField } from '@consta/uikit/TextField'

export const InformerSettings = () => {
  const [props, setProps] = useState<InformerElementProps>()

  const sizes: InformerPropSize[] = ['m', 's']
  const views: InformerPropView[] = ['filled', 'bordered']
  const statuses: InformerPropStatus[] = ['success', 'system', 'alert', 'alert', 'warning']

  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    if (selectedElement) {
      setProps(selectedElementProps as InformerElementProps)
    }
  }, [selectedElementProps, selectedElement])

  const onChangeField = (
    value: InformerPropSize | InformerPropView | InformerPropStatus | string,
    field: keyof InformerElementProps,
  ) => {
    if (selectedElement) {
      const newProps: InformerElementProps = {
        ...(selectedElementProps as InformerElementProps),
      }
      // @ts-ignore
      newProps[field] = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: InformerElementProps) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  return (
    <div className={styles.informerSettings}>
      {props ? (
        <>
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={sizes}
            label='Size'
            value={props.size || 's'}
            onChange={({ value }) => {
              onChangeField(value as InformerPropSize, 'size')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={views}
            label='View'
            value={props.view || 'filled'}
            onChange={({ value }) => {
              onChangeField(value as InformerPropView, 'view')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={statuses}
            label='Status'
            value={props.status || 'success'}
            onChange={({ value }) => {
              onChangeField(value as InformerPropStatus, 'status')
            }}
          />
          <TextField
            value={props.label as string}
            onChange={({ value }) => {
              onChangeField(value as string, 'label')
            }}
            label={'Label'}
          />
          <TextField
            value={props.title}
            onChange={({ value }) => {
              onChangeField(value as string, 'title')
            }}
            label={'Title'}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
