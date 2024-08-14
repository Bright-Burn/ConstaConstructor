import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { cnRcTree } from '@consta/rc-tree-adapter/RcTree'
import { rcTreeAdapter } from '@consta/rc-tree-adapter/rcTreeAdapter'
import RCTree from 'rc-tree'

import type { IFormElement, IGroupElement } from '../../../../../coreTypes'
import {
  getElemIdChildrenSelector,
  getFormElAsMap,
  selectedElementSelector,
  setSelectedElement,
  useAppDispatch,
  useAppSelector,
} from '../../../../../store'

export const Tree: FC = () => {
  const [expandedKeys, setExpandedKeys] = useState<(string | number)[]>([])

  const allElementsMap = useAppSelector(getFormElAsMap)
  const tree = useAppSelector(getElemIdChildrenSelector)
  const selectedEl = useAppSelector(selectedElementSelector)
  const dispatch = useAppDispatch()

  const treeProps = rcTreeAdapter()
  const prefix = cnRcTree(
    {
      size: 'm',
    },
    ['CustomTree'],
  )

  useEffect(() => {
    if (selectedEl) {
      setExpandedKeys(getParentsIds(allElementsMap, [], selectedEl.elementId))
    }
  }, [selectedEl])

  const onSelect = (selectedKeys: (string | number)[]) => {
    selectedKeys.forEach(key => {
      const element = allElementsMap.get(`${key}`)
      if (element) {
        dispatch(
          setSelectedElement({
            elementType: element.type,
            elementId: element.id,
          }),
        )
      }
    })
  }
  const onExpand = (keys: (string | number)[]) => {
    setExpandedKeys(keys)
  }

  console.log('render')
  return (
    <RCTree
      {...treeProps}
      treeData={tree}
      prefixCls={prefix}
      selectedKeys={[selectedEl?.elementId ?? '']}
      expandedKeys={expandedKeys}
      defaultExpandAll={true}
      onSelect={onSelect}
      onExpand={onExpand}
    />
  )
}

const getParentsIds = (
  allElems: Map<string, IFormElement | IGroupElement>,
  elemsArr: string[],
  elemId: string,
): string[] => {
  const parentId = allElems.get(elemId)?.parentId
  if (!parentId) {
    return elemsArr
  }
  return getParentsIds(allElems, [...elemsArr, parentId], parentId)
}
