import { FC, useEffect } from 'react'
import { formConstructorSlice, useAppDispatch, useAppSelector } from '../../../store/formElements'

import { DroppableLayer } from '../../DroppableLayer'
import styles from './styles.module.css'
import { Pages } from './Pages/Pages'

export const FormBlock: FC = () => {
  const pages = useAppSelector(state => state.formConstructor.pages)
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
      <Pages pages={pages} />
      <div className={`${styles.formBlock} borderCard`}>
        {pages.map(page =>
          page.isActive ? (
            <div className={`${styles.formBlockContent}`}>
              <DroppableLayer parentElementId={page.id} />
            </div>
          ) : (
            <></>
          ),
        )}
      </div>
    </div>
  )
}
