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

  const pages = useAppSelector(state => state.formConstructor.pages)

  const activePage = pages.find(active => active.isActive === true)

  const { allElementsMap, selectedElement } = useAppSelector(state => state.formConstructor)

  const changeActivePage = (index: number) => {
    dispatch(formConstructorSlice.actions.changeActivePage({ index }))
  }

  useEffect(() => {
    const selectedElementId = selectedElement?.elementId

    if (selectedElementId) {
      setSelectedTreeItemsIds([selectedElementId])
    }

    if (selectedElement?.page && selectedElement.page !== activePage?.name) {
      changeActivePage(Number(selectedElement.page.slice(4)) - 1)
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
            page: element.idPage,
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
