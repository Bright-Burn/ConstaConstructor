import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import type {
  BrandCardPropsStyles,
  CardElement,
  CardProps,
  IselectedView,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'
import { getValueForSelect } from '../LabelForSelectComponent'

import styles from './styles.module.css'

type CardSettingsType = {
  selectedViewProps: CardProps
  selectedView: CardElement
}

export const CardSettings: FC<CardSettingsType> = ({ selectedViewProps, selectedView }) => {
  const [props, setProps] = useState<CardProps>()
  const status: string[] = ['alert', 'success', 'warning', 'undefined']
  const form: string[] = ['round', 'square']
  const [widthValue, setWidthValue] = useState<string>('376')
  const [heightValue, setHeightValue] = useState<string>('227')

  useLayoutEffect(() => {
    setHeightValue(selectedViewProps.styles.height?.replaceAll('px', '') || '')
    setWidthValue(selectedViewProps.styles.width?.replaceAll('px', '') || '')
    setProps(selectedViewProps)
  }, [selectedViewProps])

  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    setProps(selectedViewProps)
  }, [selectedViewProps])

  const onChangeCardField =
    (propsName: keyof CardProps['uiLibProps']) => (value: string | null) => {
      const newProps: BrandCardPropsStyles = {
        props: { ...selectedViewProps },
        type: 'Card',
      }
      newProps.props.uiLibProps = { ...newProps.props.uiLibProps, [propsName]: value }
      onDispatch(selectedView, newProps)
    }

  const onChangeCardSwitch =
    (propsName: keyof CardProps['uiLibProps']) => (check: React.ChangeEvent<HTMLInputElement>) => {
      const checked = check.target.checked
      const newProps: BrandCardPropsStyles = {
        props: { ...selectedViewProps },
        type: 'Card',
      }
      newProps.props.uiLibProps = { ...newProps.props.uiLibProps, [propsName]: checked }

      if (propsName === 'border' && !checked) {
        newProps.props.uiLibProps.status = undefined
      }

      onDispatch(selectedView, newProps)
    }

  const onChangeWidth = (value: string | null) => {
    const newProps: BrandCardPropsStyles = {
      props: { ...selectedViewProps },
      type: 'Card',
    }
    newProps.props.styles = { ...newProps.props.styles }
    if (value && value !== '0') {
      newProps.props.styles.width = `${value}px`
      onDispatch(selectedView, newProps)
    } else {
      newProps.props.styles.width = undefined
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeHeight = (value: string | null) => {
    const newProps: BrandCardPropsStyles = {
      props: { ...selectedViewProps },
      type: 'Card',
    }
    newProps.props.styles = { ...newProps.props.styles }
    if (value && value !== '0') {
      newProps.props.styles.height = `${value}px`
      onDispatch(selectedView, newProps)
    } else {
      newProps.props.styles.height = undefined
      onDispatch(selectedView, newProps)
    }
  }

  const onDispatch = (selectedView: IselectedView, newProps: BrandCardPropsStyles) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  return (
    <div className={styles.cardSettings}>
      {props ? (
        <div className={styles.cardSettings}>
          <div className={styles.rowSettings}>
            <TextField
              value={heightValue}
              type="number"
              size="xs"
              leftSide="Height"
              min="0"
              onChange={value => {
                onChangeHeight(value)
              }}
            />
            <Text size="xs">px </Text>
          </div>
          <div className={styles.rowSettings}>
            <TextField
              value={widthValue}
              type="number"
              size="xs"
              leftSide="Width"
              min="0"
              onChange={value => {
                onChangeWidth(value)
              }}
            />
            <Text size="xs">px </Text>
          </div>

          <Select
            getItemKey={key => key}
            size="xs"
            getItemLabel={label => label}
            items={form}
            value={props.uiLibProps.form}
            renderValue={({ item }) => getValueForSelect({ item, label: 'form' })}
            onChange={onChangeCardField('form')}
          />
          <Select
            getItemKey={key => key}
            size="xs"
            getItemLabel={label => label}
            items={status}
            value={`${props.uiLibProps.status}`}
            renderValue={({ item }) => getValueForSelect({ item, label: 'border' })}
            onChange={onChangeCardField('status')}
          />
          <Switch
            checked={props.uiLibProps.shadow ?? true}
            label="shadow"
            size="xs"
            onChange={onChangeCardSwitch('shadow')}
          />
        </div>
      ) : null}
    </div>
  )
}
