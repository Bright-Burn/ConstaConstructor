import { BaseProps, IFormElement } from './types'
import { TextFieldPropsTextareaType } from '@consta/uikit/TextField/'
import { ListPropForm, ListPropInnerOffset, ListPropSize } from '@consta/uikit/ListCanary'

export type ItemList = {
  label: string
  id: number
  disabled: boolean
}

export interface ListElementPropsStyles extends BaseProps {
  constaProps: ListProps
}

export type ListProps = {
  items: ItemList[]
  value?: ItemList | null
  size?: ListPropSize
  withListBox?: boolean
  innerOffset?: ListPropInnerOffset
  // isInteractive?: boolean
  form?: ListPropForm
  withGroups?: boolean
  groupsWithLabel?: boolean
  // disabled?: boolean
  withLeftSide?: boolean
  withLeftIcon?: boolean
  withRightSide?: boolean
  withRightIcon?: boolean
  withDisabledItems?: boolean
  // isLoading?: boolean
  withListAddItem?: boolean
} & BaseProps &
  TextFieldPropsTextareaType<string>

export interface IFormElementList extends IFormElement {
  props: ListProps
}

export type ListElementProps = ListProps & BaseProps

