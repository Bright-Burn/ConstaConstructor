import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { ITreeItem } from './Tree/types'
import { formToTreeData } from './util'
import { useAppSelector } from '../../../../store/formElements'
import { Tree } from './Tree/Tree'

export const ComponentTree = () => {
  const [treeData, setTreeData] = useState<ITreeItem[]>([])

  const { allElementsTree, allElementsMap } = useAppSelector(state => state.formConstructor)

  useEffect(() => {
    const data = formToTreeData(allElementsTree, allElementsMap)
    setTreeData(data)
  }, [allElementsTree, allElementsMap])

  return (
    <div className={`${styles.commentTree} borderCard`}>
      <Tree data={treeData} />
    </div>
  )
}
