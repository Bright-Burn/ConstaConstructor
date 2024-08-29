import { AppDispatch, RootState } from '../../../setupStore'
import { formConstructorSlice } from '../../formElementsSlice'
import { getViewInfosByIds } from '../../selectors'

export const copyViewInfos =
  (viewIds: string[], prevIdNewIdDict: Record<string, string>) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const existedViewInfos = getViewInfosByIds(viewIds)(state)
    const newViewInfos = existedViewInfos.map(viewInfo => {
      return { ...viewInfo, id: prevIdNewIdDict[viewInfo.id] }
    })
    dispatch(formConstructorSlice.actions.addViewInfos(newViewInfos))
  }
