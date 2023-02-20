import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, useAppSelector } from '../../../store/formElements'
import {
  ElementTypes,
  FormElementTypes,
  IFormElement,
  ILayoutElement,
} from '../../../store/formElements/types'
import { ButtonFormElement } from '../../FormElements/Button'
import { LayoutFromElement } from '../../FormElements/Layout'
import styles from './styles.module.css'

export const FormBlock: FC = () => {
  const { allElementsMap } = useAppSelector(state => state.formConstructor)
  const [elementsOnLayer, setElementsOnLayer] = useState<(ILayoutElement | IFormElement)[]>([])
  const dispatch = useDispatch()

  useEffect(() => {
    setElementsOnLayer(allElementsMap.get('') || [])
  }, [allElementsMap])

  const handleOnDrop = (event: React.DragEvent) => {
    const formElemType = event.dataTransfer.getData('FormElementType') as FormElementTypes
    const elemType = event.dataTransfer.getData('ElementType') as ElementTypes

    if (elemType) {
      const layoutElement: ILayoutElement = {
        id: uuid(),
        selected: false,
        childrenFromElements: [],
        childrenLayoutElements: [],
      }
      dispatch(
        formConstructorSlice.actions.addNewElement({
          parent: '',
          element: layoutElement,
        }),
      )
      return
    }

    if (formElemType) {
      const formElement: IFormElement = {
        id: uuid(),
        selected: false,
        type: formElemType,
      }
      dispatch(
        formConstructorSlice.actions.addNewElement({
          parent: '',
          element: formElement,
        }),
      )
    }

    event.stopPropagation()
  }

  return (
    <div
      onDrop={handleOnDrop}
      onDragOver={event => event.preventDefault()}
      className={`${styles.formBlock} borderCard`}
    >
      {elementsOnLayer.map(el => {
        // Это надо как то иначе сделать
        // Тут происходит проверка, является ли элемент Layout елементом
        if ('childrenFromElements' in el) {
          return <LayoutFromElement key={el.id} />
        } else {
          if (el.type === FormElementTypes.Button) {
            return <ButtonFormElement key={el.id} />
          }
        }
        return <></>
      })}
    </div>
  )
}
