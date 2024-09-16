import { useEffect, useState } from 'react'

import {
  changePageName,
  getSelectedPageName,
  useAppDispatch,
  useAppSelector,
} from '../../../../store'

export const usePageName = () => {
  const dispatch = useAppDispatch()
  const selectedPageName = useAppSelector(getSelectedPageName)
  const [name, setName] = useState<string>(selectedPageName ?? '')
  useEffect(() => {
    setName(selectedPageName ?? '')
  }, [selectedPageName])

  const onChangePageName = (value: string | null) => {
    setName(value ?? '')
  }
  const onSubmitPageName = () => {
    dispatch(changePageName(name))
  }
  return { onChangePageName, projectName: name, onSubmitPageName }
}
