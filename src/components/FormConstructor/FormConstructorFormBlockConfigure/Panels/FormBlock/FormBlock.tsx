import React, { FC, useEffect, useState } from 'react'
import { formConstructorSlice, useAppDispatch, useAppSelector } from '../../../store/formElements'
import { DroppableLayer } from '../../DroppableLayer'
import styles from './styles.module.css'

export const FormBlock: FC = () => {
  const [formBlockParentId] = useState<string>('root')
  const { selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const escHandler = (e: KeyboardEvent) => {
      console.log(e)
      if (e.key === 'Escape') {
        console.log(selectedElement)
        dispatch(
          formConstructorSlice.actions.setSelectedElement(null),
        )
      }
    }
    document.body.addEventListener('keydown', escHandler)
    return () => document.body.removeEventListener('keydown', escHandler)
  }, [selectedElement])

  return (
    <div className={`${styles.formBlock} borderCard`}>
      <div className={`${styles.formBlockContent}`}>
        <DroppableLayer parentElementId={formBlockParentId} />
      </div>
    </div>
  )
}
