import styles from './styles.module.css'
import { Button } from '@consta/uikit/Button'
import { IconClose } from '@consta/uikit/IconClose'
import { PagesProps } from './types'
import { Card } from '@consta/uikit/Card'
import { formConstructorSlice, useAppDispatch } from '../../../../store/formElements'

export const Pages = ({ pages }: PagesProps) => {
  const dispatch = useAppDispatch()

  const changeActivePage = (index: number) => {
    dispatch(formConstructorSlice.actions.changeActivePage({ index }))
  }

  const closePage = (index: number) => {
    dispatch(formConstructorSlice.actions.closePage({ index }))
  }

  const addNewPage = () => {
    dispatch(formConstructorSlice.actions.addNewPage())
  }

  return (
    <div className={`container-row space-center borderCard ${styles.pagesBlock}`}>
      <>
        {pages.map((page, index) => (
          <Card className={`${styles.pageBlock}`} form='round'>
            <Button
              label={`${page.name}`}
              view='ghost'
              size='xs'
              form='brick'
              onClick={() => changeActivePage(index)}
            />
            <Button
              iconLeft={IconClose}
              view='ghost'
              size='xs'
              form='brick'
              onlyIcon
              onClick={() => closePage(index)}
            />
          </Card>
        ))}
      </>
      <Button label='+' view='ghost' size='xs' onClick={addNewPage} />
    </div>
  )
}
