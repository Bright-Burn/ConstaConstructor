import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, useAppSelector } from '../../../store/formElements'
import { FormElementTypes, IFormElement } from '../../../store/formElements/types'
import styles from './styles.module.css'

export const FormBlock: FC = () => {
  const { allElementsMap } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(allElementsMap)
  }, [allElementsMap])

  const handleOnDrop = (event: React.DragEvent) => {
    const elemType = event.dataTransfer.getData('FormElementType') as FormElementTypes

    if (elemType) {
      const formElement: IFormElement = {
        id: uuid(),
        selected: false,
        type: elemType,
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
    ></div>
  )
}
