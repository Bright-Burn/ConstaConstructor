import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { cnRcTree } from '@consta/rc-tree-adapter/RcTree'
import { rcTreeAdapter } from '@consta/rc-tree-adapter/rcTreeAdapter'
import RCTree from 'rc-tree'

import type { IFormElement, IGroupElement } from '../../../../../coreTypes'
import {
  getFormElAsMap,
  setSelectedElement,
  useAppDispatch,
  useAppSelector,
} from '../../../../../store'

import type { ITree } from './types'

export const Tree: FC<ITree> = ({ data }) => {
  const allElementsMap = useAppSelector(getFormElAsMap)
  const selectedEl = useAppSelector(state => state.formConstructor.selectedElement)
  const dispatch = useAppDispatch()
  const [expandedKeys, setExpandedKeys] = useState<(string | number)[]>([])

  const treeProps = rcTreeAdapter()
  const prefix = cnRcTree(
    {
      size: 'm',
    },
    ['CustomTree'],
  )
  useEffect(() => {
    if (selectedEl) {
      //TODO раскоментировать если есть необходимость не закрывать предыдущие узлы когда выбираются новые
      // const parentsIds = getParentsIds(allElementsMap, [], selectedEl.elementId)
      //       const expandedKeysSet = new Set([...expandedKeys, ...parentsIds])
      //       setExpandedKeys(Array.from(expandedKeysSet))
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
  return (
    <RCTree
      {...treeProps}
      treeData={data}
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
