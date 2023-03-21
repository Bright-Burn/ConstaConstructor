import { useState } from 'react'
import { PageOfLayout } from './types'

export const usePages: () => [
  PageOfLayout[],
  () => void,
  (index: number) => void,
  (index: number) => void,
] = () => {
  const [numberOfPages, setNumberOfPages] = useState(2)
  const [pages, setPages] = useState<PageOfLayout[]>([
    { name: 'Page1', isActive: true, parentId: 'root' },
  ])

  const addNewPage = () => {
    setPages([
      ...pages,
      {
        name: `Page${numberOfPages}`,
        isActive: false,
        parentId: `Page${numberOfPages}`,
      },
    ])
    setNumberOfPages(prevState => prevState + 1)
  }

  const changeActivePage = (index: number) => {
    const newPages = pages.map((page, i) => {
      return {
        name: page.name,
        isActive: i === index,
        parentId: page.parentId,
      }
    })
    setPages(newPages)
  }

  const closePage = (index: number) => {
    const newPages = pages
      .filter((page, i) => i !== index)
      .map((page, i) => {
        return {
          name: page.name,
          isActive: i === index,
          parentId: page.parentId,
        }
      })
    setPages(newPages)
  }

  return [pages, addNewPage, changeActivePage, closePage]
}
