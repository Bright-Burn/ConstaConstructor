import React, { FC, useEffect, useState } from 'react'
import { formConstructorSlice, useAppDispatch, useAppSelector } from '../../../store/formElements'

import { DroppableLayer } from '../../DroppableLayer'
import styles from './styles.module.css'
import { Pages } from './Pages/Pages'
import { usePagesSelector } from '../../../store/pagesOfLayout'

export const FormBlock: FC = () => {
  const pages = usePagesSelector(state => state.pagesOfLayout.pages)
  const [formBlockParentId] = useState<string>('root')
  const { selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch(formConstructorSlice.actions.setSelectedElement(null))
      }
    }
    document.body.addEventListener('keydown', escHandler)
    return () => document.body.removeEventListener('keydown', escHandler)
  }, [selectedElement])

  return (
    <div className={`${styles.formBlock} borderCard`}>
      <div className={`${styles.formBlock} borderCard`}>
        {pages.map(page =>
          page.isActive ? (
            <div className={`${styles.formBlockContent}`}>
              <DroppableLayer parentElementId={page.parentId} />
            </div>
          ) : (
            <></>
          ),
        )}
      </div>
    </div>
  )
}
