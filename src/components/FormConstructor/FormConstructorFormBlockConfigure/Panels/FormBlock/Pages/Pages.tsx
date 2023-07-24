import styles from './styles.module.css'
import { Button } from '@consta/uikit/Button'
import { IconClose } from '@consta/uikit/IconClose'
import { PagesProps } from './types'
import { Card } from '@consta/uikit/Card'
import {
  changeActivePage,
  useAppDispatch,
  useAppSelector,
  addNewPage,
  deletePage as deletePageAction,
} from '../../../../store'

export const Pages = ({ pages }: PagesProps) => {
  const { selectedPageId } = useAppSelector(state => state.formConstructor)

  const dispatch = useAppDispatch()

  const changePage = (pageId: string) => {
    dispatch(changeActivePage(pageId))
  }

  const deletePage = (pageId: string) => {
    dispatch(deletePageAction(pageId))
  }

  const addPage = () => {
    dispatch(addNewPage())
  }

  return (
    <div className={`container-row space-center borderCard ${styles.pagesBlock}`}>
      <>
        {pages.map((page, index) => (
          <Card className={`${styles.pageBlock}`} form='round'>
            <Button
              label={`${page.name}`}
              view={selectedPageId === page.id ? 'primary' : 'ghost'}
              size='xs'
              form='brick'
              onClick={() => changePage(page.id)}
            />
            <Button
              iconLeft={IconClose}
              view='ghost'
              size='xs'
              form='brick'
              onlyIcon
              onClick={() => deletePage(page.id)}
            />
          </Card>
        ))}
      </>
      <Button label='+' view='ghost' size='xs' onClick={addNewPage} />
    </div>
  )
}
