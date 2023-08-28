import styles from './styles.module.css'
import { ITreeItem } from './Tree'
import { IFormElement, IGroupElement } from '../../../../coreTypes'
import { Tree } from './Tree'
import {
  getAllFormElements,
  getSelectedPageId,
  getFormElAsMap,
  useAppSelector,
} from '../../../../store'

export const ComponentTree = () => {
  const allElements = useAppSelector(getAllFormElements)
  const allElementsMap = useAppSelector(getFormElAsMap)
  const selectedPageId = useAppSelector(getSelectedPageId)

  return (
    <div className={`${styles.commentTree}`}>
      <Tree data={getTree(allElementsMap, allElements, selectedPageId)} />
    </div>
  )
}

const getTree = (
  allElementsMap: Map<string, IFormElement | IGroupElement>,
  allElements: (IFormElement | IGroupElement)[],
  parentId: string,
) => {
  const childrenIds = allElements.filter(el => el.parentId === parentId)
  const childrenItems: ITreeItem[] = []

  childrenIds.forEach(childId => {
    const title = allElementsMap.get(childId.id)?.type

    if (title) {
      const treeItem: ITreeItem = {
        key: childId.id,
        children: getTree(allElementsMap, allElements, childId.id),
        visible: true,
        disableCheckbox: true,
        title: title,
      }

      childrenItems.push(treeItem)
    }
  })
  return childrenItems
}
