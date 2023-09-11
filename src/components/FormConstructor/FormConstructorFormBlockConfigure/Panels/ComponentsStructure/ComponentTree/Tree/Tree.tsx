import { FC } from 'react'
import { ITree } from './types'
import { useAppSelector } from '../../../../../store'
import { rcTreeAdapter } from '@consta/rc-tree-adapter/rcTreeAdapter'
import { cnRcTree } from '@consta/rc-tree-adapter/RcTree'
import RCTree from 'rc-tree'
import { Key } from 'rc-tree/lib/interface'
import { getFormElAsMap } from '../../../../../store'
import { setSelectedElement, useAppDispatch } from '../../../../../store'
import { updateParentIdElement } from '../../../../../store/formElements/formElementsActions'

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

  const onChangeParentId = (event: any) => {
    dispatch(
      updateParentIdElement({
        elementId: event.dragNode.key,
        parentId: event.node.key,
      }),
    )
  }

  return (
    <RCTree
      {...treeProps}
      treeData={data}
      draggable
      onDrop={event => onChangeParentId(event)}
      prefixCls={prefix}
      selectedKeys={[selectedEl?.elementId ?? '']}
      onSelect={onSelect}
      defaultExpandAll
    />
  )
}
