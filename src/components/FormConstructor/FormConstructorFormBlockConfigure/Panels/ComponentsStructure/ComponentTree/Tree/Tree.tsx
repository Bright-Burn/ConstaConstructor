import { FC } from 'react'
import { ITree } from './types'
import { useAppSelector } from '../../../../../store/formElements'
import { rcTreeAdapter } from '@consta/rc-tree-adapter/rcTreeAdapter'
import { cnRcTree } from '@consta/rc-tree-adapter/RcTree'
import RCTree from 'rc-tree'
import { Key } from 'rc-tree/lib/interface'
import { getFormElAsMap } from '../../../../../store/formElements/formElementsSelectors'
import { setSelectedElement, useAppDispatch } from '../../../../../store'

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
      onSelect={onSelect}
      defaultExpandAll
    />
  )
}
