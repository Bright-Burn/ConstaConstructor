import { FC, useEffect } from 'react'
import { useAppSelector } from '../../../store'
import { setSelectedElement, useAppDispatch } from '../../../store'
import { DroppableLayer } from '../../DroppableLayer'
import styles from './styles.module.css'
import { Pages } from './Pages/Pages'

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
    return () => document.body.removeEventListener('keydown', escHandler)
  }, [selectedElement])

  return (
    <div className={`${styles.formBlock}`}>
      <Pages pages={pages} />
      <div className={`${styles.formBlock}`}>
        {pages.map(page =>
          page && page.id === selectedPageId ? (
            <div className={`${styles.formBlockContent}`} id='formBlock'>
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
