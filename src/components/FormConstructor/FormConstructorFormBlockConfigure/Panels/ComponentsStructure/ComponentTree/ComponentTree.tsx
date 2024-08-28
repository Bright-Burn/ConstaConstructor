import type { Dictionary } from '@reduxjs/toolkit'

import type { IFormElement, IGroupElement, ViewtInfo } from '../../../../coreTypes'
import {
  getAllFormElements,
  getFormElAsMap,
  getSelectedPageId,
  useAppSelector,
  viewInfoSelector,
} from '../../../../store'

import type { ITreeItem } from './Tree'
import { Tree } from './Tree'

import styles from './styles.module.css'

export const ComponentTree = () => {
  const allElements = useAppSelector(getAllFormElements)
  const allElementsMap = useAppSelector(getFormElAsMap)
  const selectedPageId = useAppSelector(getSelectedPageId)
  const viewsInfoStruct = useAppSelector(viewInfoSelector)

  return (
    <div className={styles.commentTree}>
      <Tree data={getTree(allElementsMap, allElements, selectedPageId, viewsInfoStruct)} />
    </div>
  )
}

const getTree = (
  allElementsMap: Map<string, IFormElement | IGroupElement>,
  allElements: (IFormElement | IGroupElement)[],
  parentId: string,
  viewsInfoStruct: Dictionary<ViewtInfo>,
) => {
  const childrenIds = allElements.filter(el => el.parentId === parentId)
  const childrenItems: ITreeItem[] = []

  childrenIds.forEach(childId => {
    const child = allElementsMap.get(childId.id)

    if (child?.id) {
      const title = viewsInfoStruct[child.id]?.label ?? 'пока нет названия'
      const treeItem: ITreeItem = {
        key: childId.id,
        children: getTree(allElementsMap, allElements, childId.id, viewsInfoStruct),
        visible: true,
        disableCheckbox: true,
        title,
      }

      childrenItems.push(treeItem)
    }
  })
  return childrenItems
}
