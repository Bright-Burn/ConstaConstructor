import uuid from 'react-uuid'

import { FormElementDictTypes, FormGroupsDictTypes } from '../../../../coreTypes'

export const componentCards = [
  { id: uuid(), name: 'Layout', groupElementType: FormGroupsDictTypes.Layout },
  { id: uuid(), name: 'Layout', groupElementType: FormGroupsDictTypes.Layout, isOuter: true },
  { id: uuid(), name: 'Avatar', formElementType: FormElementDictTypes.Avatar },
  { id: uuid(), name: 'AvatarGroup', formElementType: FormElementDictTypes.AvatarGroup },

  {
    id: uuid(),
    name: 'Badge',
    formElementType: FormElementDictTypes.Badge,
  },
  {
    id: uuid(),
    name: 'Breadcrumbs',
    formElementType: FormElementDictTypes.BreadcrumbsForm,
  },
  {
    id: uuid(),
    name: 'Button',
    formElementType: FormElementDictTypes.Button,
  },
  {
    id: uuid(),
    name: 'Card',
    groupElementType: FormGroupsDictTypes.Card,
  },
  {
    id: uuid(),
    name: 'Checkbox',
    formElementType: FormElementDictTypes.Checkbox,
  },
  {
    id: uuid(),
    name: 'ChoiceGroup',
    formElementType: FormElementDictTypes.ChoiceGroup,
  },
  {
    id: uuid(),
    name: 'ComboBox',
    formElementType: FormElementDictTypes.ComboBox,
  },
  {
    id: uuid(),
    name: 'DatePicker',
    formElementType: FormElementDictTypes.DatePicker,
  },
  {
    id: uuid(),
    name: 'DataTime',
    formElementType: FormElementDictTypes.DataTime,
  },
  {
    id: uuid(),
    name: 'Informer',
    formElementType: FormElementDictTypes.Informer,
  },
  {
    id: uuid(),
    name: 'List',
    formElementType: FormElementDictTypes.List,
  },
  {
    id: uuid(),
    name: 'RadioButton',
    formElementType: FormElementDictTypes.RadioButton,
  },
  {
    id: uuid(),
    name: 'Select',
    formElementType: FormElementDictTypes.Select,
  },
  {
    id: uuid(),
    name: 'Switch',
    formElementType: FormElementDictTypes.Switch,
  },
  {
    id: uuid(),
    name: 'Tabs',
    formElementType: FormElementDictTypes.Tabs,
  },
  {
    id: uuid(),
    name: 'Tag',
    formElementType: FormElementDictTypes.Tag,
  },
  {
    id: uuid(),
    name: 'Text',
    formElementType: FormElementDictTypes.Text,
  },
  {
    id: uuid(),
    name: 'TextField',
    formElementType: FormElementDictTypes.TextField,
  },
  {
    id: uuid(),
    name: 'User',
    formElementType: FormElementDictTypes.User,
  },
  {
    id: uuid(),
    name: 'Icon',
    formElementType: FormElementDictTypes.Icon,
  },
  {
    id: uuid(),
    name: 'EChart',
    formElementType: FormElementDictTypes.EChart,
  },
]

export const groupElement = [
  {
    id: uuid(),
    name: 'Layout in',
    groupElementType: FormGroupsDictTypes.Layout,
    isOuter: false,
  },
  {
    id: uuid(),
    name: 'Layout out',
    groupElementType: FormGroupsDictTypes.Layout,
    isOuter: true,
  },
]
