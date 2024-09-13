import type { FC } from 'react'
import React, { useEffect, useState } from 'react'
import { cnRcTree } from '@consta/rc-tree-adapter/RcTree'
import { rcTreeAdapter } from '@consta/rc-tree-adapter/rcTreeAdapter'
import RCTree from 'rc-tree'

import type { IFormElement, IGroupElement } from '../../../../../coreTypes'
import {
  getFormElAsMap,
  getSelectedView,
  setSelectedView,
  useAppDispatch,
  useAppSelector,
} from '../../../../../store'

import { Title } from './CustomNode'
import type { ITree } from './types'

export const Tree: FC<ITree> = ({ data }) => {
  const allElementsMap = useAppSelector(getFormElAsMap)
  const selectedView = useAppSelector(getSelectedView)
  const dispatch = useAppDispatch()
  const [expandedKeys, setExpandedKeys] = useState<(string | number)[]>([])

  const treeProps = rcTreeAdapter()
  const prefix = cnRcTree(
    {
      size: 's',
    },
    ['CustomTree'],
  )
  useEffect(() => {
    if (selectedView) {
      //TODO раскоментировать если есть необходимость не закрывать предыдущие узлы когда выбираются новые
      // const parentsIds = getParentsIds(allElementsMap, [], selectedEl.elementId)
      //       const expandedKeysSet = new Set([...expandedKeys, ...parentsIds])
      //       setExpandedKeys(Array.from(expandedKeysSet))
      setExpandedKeys(getParentsIds(allElementsMap, [], selectedView.elementId))
    }
  }, [selectedView])

  const onSelect = (selectedKeys: (string | number)[]) => {
    selectedKeys.forEach(key => {
      const element = allElementsMap.get(`${key}`)
      if (element) {
        dispatch(
          setSelectedView({
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
      className="Text_size_xs Text_view_primary"
      showLine={true}
      selectedKeys={[selectedView?.elementId ?? '']}
      expandedKeys={expandedKeys}
      defaultExpandAll={true}
      titleRender={Title}
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
