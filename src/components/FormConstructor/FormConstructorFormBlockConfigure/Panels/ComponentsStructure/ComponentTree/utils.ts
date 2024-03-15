import type { IFormElement, IGroupElement } from '../../../../coreTypes'
import { getElementsOnLayer } from '../../../../utils'

import type { ITreeItem } from './Tree'

export const formToTreeData: (
  pageId: string,
  allElementsTree: Map<string, string[]>,
  allElementsMap: Map<string, IFormElement | IGroupElement>,
) => ITreeItem[] = (
  pageId: string,
  allElementsTree: Map<string, string[]>,
  allElementsMap: Map<string, IFormElement | IGroupElement>,
) => {
  const visited = new Map<string, boolean>()
  const treeData: ITreeItem[] = []
  const elementsOnLayerMap = new Map(
    getElementsOnLayer(pageId, allElementsTree, allElementsMap).map(elem => [elem.id, elem]),
  )

  const getChidlrenItemsByKey = (parentKey: string) => {
    const childrenIds = allElementsTree.get(parentKey) || []
    const childrenItems: ITreeItem[] = []

    childrenIds.forEach(childId => {
      const title = allElementsMap.get(childId)?.type

      if (title && !visited.get(childId)) {
        const treeItem: ITreeItem = {
          key: childId,
          children: getChidlrenItemsByKey(childId),
          visible: true,
          disableCheckbox: true,
          title,
        }
        visited.set(childId, true)
        childrenItems.push(treeItem)
      }
    })
    return childrenItems
  }

  elementsOnLayerMap.forEach((element, key) => {
    if (!visited.get(key)) {
      if (element) {
        const chidlrenTreeItems = getChidlrenItemsByKey(key)
        visited.set(key, true)
        treeData.push({
          children: chidlrenTreeItems,
          key: element.id,
          visible: true,
          disableCheckbox: true,
          title: element.type,
        })
      }
    }
  })

  return treeData
}
