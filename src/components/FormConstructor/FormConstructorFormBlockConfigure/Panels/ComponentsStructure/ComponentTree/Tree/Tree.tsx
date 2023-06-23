import { FC, useEffect, useState } from 'react'
import { ITree } from './types'
import {
  formConstructorSlice,
  useAppDispatch,
  useAppSelector,
} from '../../../../../store/formElements'
import { rcTreeAdapter } from '@consta/rc-tree-adapter/rcTreeAdapter'
import { cnRcTree } from '@consta/rc-tree-adapter/RcTree'
import RCTree from 'rc-tree'
import { Key } from 'rc-tree/lib/interface'

export const Tree: FC<ITree> = ({ data }) => {
  const [selectedTreeItemsIds, setSelectedTreeItemsIds] = useState<string[]>([])

  const { allElementsMap, selectedElement } = useAppSelector(state => state.formConstructor)

  useEffect(() => {
    const selectedElementId = selectedElement?.elementId

    if (selectedElementId) {
      setSelectedTreeItemsIds([selectedElementId])
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

  const onSelect = (selectedKeys: Key[]) => {
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
  }

  return (
    <RCTree
      {...treeProps}
      treeData={data}
      prefixCls={prefix}
      selectedKeys={selectedTreeItemsIds}
      onSelect={onSelect}
      defaultExpandAll
    />
  )
}

