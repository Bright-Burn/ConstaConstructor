import type { FC } from 'react'
import { cnRcTree } from '@consta/rc-tree-adapter/RcTree'
import { rcTreeAdapter } from '@consta/rc-tree-adapter/rcTreeAdapter'
import RCTree from 'rc-tree'
import type { Key } from 'rc-tree/lib/interface'

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

  const treeProps = rcTreeAdapter()
  const prefix = cnRcTree(
    {
      size: 'm',
    },
    ['CustomTree'],
  )

  const onSelect = (selectedKeys: Key[]) => {
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

  return (
    <RCTree
      {...treeProps}
      treeData={data}
      prefixCls={prefix}
      selectedKeys={[selectedEl?.elementId ?? '']}
      defaultExpandAll={true}
      onSelect={onSelect}
    />
  )
}
