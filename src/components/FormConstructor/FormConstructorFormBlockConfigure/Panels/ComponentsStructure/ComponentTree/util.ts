import { IFormElement, IGroupElement } from '../../../../store/formElements'
import { ITreeItem } from './Tree/types'

export const formToTreeData: (
  allElementsTree: Map<string, string[]>,
  allElementsMap: Map<string, IGroupElement | IFormElement>,
) => ITreeItem[] = (
  allElementsTree: Map<string, string[]>,
  allElementsMap: Map<string, IGroupElement | IFormElement>,
) => {
  const visited = new Map<string, boolean>()
  const treeData: ITreeItem[] = []

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
          title: title,
        }
        visited.set(childId, true)
        childrenItems.push(treeItem)
      }
    })
    return childrenItems
  }

  allElementsMap.forEach((element, key) => {
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

