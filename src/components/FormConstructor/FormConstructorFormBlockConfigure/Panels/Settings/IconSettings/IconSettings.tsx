import {
    formConstructorSlice,
    IconElementProps,
    useAppSelector,
  } from '../../../../store/formElements'
  import { ISelectedElement } from '../../../../store/formElements/types'
  import styles from './styles.module.css'
  import { useDispatch } from 'react-redux'
  import { useLayoutEffect, useState } from 'react'
  import { Select } from '@consta/uikit/Select'
  import { TextField } from '@consta/uikit/TextField'
import { IconPropSize, IconPropView } from '@consta/uikit/Icon'
  
  export const IconSettings = () => {
    const [props, setProps] = useState<IconElementProps | undefined>()
  
    const sizes: IconPropSize[] = ["m", "s", "xs", "l"]
    const views: IconPropView[] = ["primary","alert", "brand", "ghost", "link", "secondary", "success", "warning", "disabled"]
  
    const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
    const dispatch = useDispatch()
  
    useLayoutEffect(() => {
      if (selectedElement) {
        setProps(selectedElementProps as IconElementProps)
      }
    }, [selectedElementProps, selectedElement])
  
    const onChangeField = (
      value: IconPropSize | IconPropView | string,
      field: keyof IconElementProps,
    ) => {
      if (selectedElement) {
        const newProps: IconElementProps = {
          ...(selectedElementProps as IconElementProps),
        }
        // @ts-ignore
        newProps[field] = value
        onDispatch(selectedElement, newProps)
      }
    }
  
    const onDispatch = (selectedElement: ISelectedElement, newProps: IconElementProps) => {
      dispatch(
        formConstructorSlice.actions.setSelectedElement({
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
            <Select
              getItemKey={(item: string | undefined) => item || ''}
              getItemLabel={(item: string | undefined) => item || ''}
              items={sizes}
              label='Size'
              value={props.size || 's'}
              onChange={({ value }) => {
                onChangeField(value as IconPropSize, 'size')
              }}
            />
            <Select
              getItemKey={(item: string | undefined) => item || ''}
              getItemLabel={(item: string | undefined) => item || ''}
              items={views}
              label='View'
              value={props.view || 'filled'}
              onChange={({ value }) => {
                onChangeField(value as IconPropView, 'view')
              }}
            />
            {/* <TextField
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
            /> */}
          </>
        ) : (
          <></>
        )}
      </div>
    )
  }
  