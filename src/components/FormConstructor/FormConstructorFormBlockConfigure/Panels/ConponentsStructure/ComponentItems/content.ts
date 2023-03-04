import { FormElementTypes, FormGroupsTypes } from '../../../../store/formElements/types'
import uuid from 'react-uuid'

export const constaCards = [
  {
    id: uuid(),
    name: 'Панель внутренняя',
    groupElementType: FormGroupsTypes.LayoutInner,
  },
  {
    id: uuid(),
    name: 'Панель внешняя',
    groupElementType: FormGroupsTypes.LayoutOuter,
  },
  {
    id: uuid(),
    name: 'Кнопка',
    formElementType: FormElementTypes.Button,
  },
  {
    id: uuid(),
    name: 'Карточка',
    groupElementType: FormGroupsTypes.Card,
  },
  {
    id: uuid(),
    name: 'Badge',
    formElementType: FormElementTypes.Badge,
  },
  {
    id: uuid(),
    name: 'Табы',
    formElementType: FormElementTypes.Tabs,
  },
  {
    id: uuid(),
    name: 'Informer',
    formElementType: FormElementTypes.Informer,
  },
  {
    id: uuid(),
    name: 'Text',
    formElementType: FormElementTypes.Text,
  },
  {
    id: uuid(),
    name: 'Checkbox',
    formElementType: FormElementTypes.Checkbox,
  },
]
