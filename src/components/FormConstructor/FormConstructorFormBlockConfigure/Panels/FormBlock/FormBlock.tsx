import type { FC } from 'react'
import { useEffect } from 'react'

import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../store'
import { DroppableLayer } from '../../DroppableLayer'

import { Pages } from './Pages'

import styles from './styles.module.css'

export const FormBlock: FC = () => {
  const pages = useAppSelector(state => state.formConstructor.pages)
  const { selectedElement, selectedPageId } = useAppSelector(state => state.formConstructor)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch(setSelectedElement(null))
      }
    }
    document.body.addEventListener('keydown', escHandler)
    return () => {
      document.body.removeEventListener('keydown', escHandler)
    }
  }, [selectedElement])

  return (
    <div className={styles.formBlock}>
      <Pages pages={pages} />
      <div className={styles.formBlock}>
        {pages.map(page =>
          page && page.id === selectedPageId ? (
            <div key={page.id} className={styles.formBlockContent} id="formBlock">
              <DroppableLayer parentElementId={page.id} />
            </div>
          ) : null,
        )}
      </div>
    </div>
  )
}
