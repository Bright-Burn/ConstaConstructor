import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { ITreeItem } from './Tree'
import { useAppSelector } from '../../../../store/formElements'
import { Tree } from './Tree'
import { formToTreeData } from './Tree'

export const ComponentTree = () => {
  const [treeData, setTreeData] = useState<ITreeItem[]>([])

  const { allElementsTree, allElementsMap, selectedPageId } = useAppSelector(
    state => state.formConstructor,
  )

  useEffect(() => {
    if (selectedPageId) {
      const data = formToTreeData(selectedPageId, allElementsTree, allElementsMap)
      setTreeData(data)
    }
  }, [allElementsTree, allElementsMap, selectedPageId])

  return (
    <div className={`${styles.commentTree} borderCard`}>
      <Tree data={treeData} />
    </div>
  )
}
