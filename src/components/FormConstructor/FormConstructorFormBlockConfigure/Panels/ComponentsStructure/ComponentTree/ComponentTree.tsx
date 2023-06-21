import {
  IFormElement,
  IGroupElement,
  formConstructorSlice,
  useAppDispatch,
  useAppSelector,
} from '../../../../store/formElements'
import { cnRcTree } from '@consta/rc-tree-adapter/RcTree'
import { rcTreeAdapter } from '@consta/rc-tree-adapter/rcTreeAdapter'
import RCTree from 'rc-tree'
import styles from './styles.module.css'
import { FC, useEffect, useState } from 'react'

export const ComponentTree = () => {
  const [treeData, setTreeData] = useState<ITreeItem[]>([])

  const { allElementsTree, allElementsMap } = useAppSelector(state => state.formConstructor)

  useEffect(() => {
    const data = formToTreeData(allElementsTree, allElementsMap)
    setTreeData(data)
  }, [allElementsTree, allElementsMap])

  return (
    <div className={`${styles.commentTree} borderCard`}>
      <Example data={treeData} />
    </div>
  )
}

type ITreeItem = {
  key: string
  title: string
  children: Array<ITreeItem>
  disableCheckbox: boolean
}

interface IExample {
  data: ITreeItem[]
}

const Example: FC<IExample> = ({ data }) => {
  const [selectedTreeItems, setSelectedTreeItems] = useState<string[]>([])

  const { allElementsMap, selectedElement } = useAppSelector(state => state.formConstructor)

  useEffect(() => {
    const selectedElementId = selectedElement?.elementId
    if (selectedElementId) {
      setSelectedTreeItems([selectedElementId])
    }
  }, [selectedElement])

  const dispatch = useAppDispatch()

  const treeProps = rcTreeAdapter()
  const prefix = cnRcTree(
    {
      size: 'm',
    },
    ['CustomTree'],
  )

  return (
    <RCTree
      {...treeProps}
      treeData={data}
      prefixCls={prefix}
      selectedKeys={selectedTreeItems}
      onSelect={selectedKeys => {
        selectedKeys.forEach(key => {
          const element = allElementsMap.get(`${key}`)
          if (element) {
            dispatch(
              formConstructorSlice.actions.setSelectedElement({
                elementType: element.type,
                elementId: element.id,
              }),
            )
          }
        })
      }}
      defaultExpandAll
    />
  )
}

const formToTreeData: (
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
          disableCheckbox: true,
          title: title,
        }
        visited.set(childId, true)
        childrenItems.push(treeItem)
      }
    })
    return childrenItems
  }

  Array.from(allElementsTree.keys()).forEach(key => {
    if (!visited.get(key)) {
      const element = allElementsMap.get(key)
      if (element) {
        const chidlrenTreeItems = getChidlrenItemsByKey(key)
        visited.set(key, true)
        treeData.push({
          children: chidlrenTreeItems,
          key: element.id,
          disableCheckbox: true,
          title: element.type,
        })
      }
    }
  })

  return treeData
}
