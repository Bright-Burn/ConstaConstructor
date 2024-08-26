import type { AppDispatch, RootState } from '../../setupStore'
import { getElementById } from '../formElementsSelectors'
import { formConstructorSlice } from '../formElementsSlice'

export const updateGroupFormElementLabel =
  (label: string, elId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const element = getElementById(elId)(state)
    //TODO в дальнейшем надо будет гард написать, который проверяет вхождение в FormGroupsDictTypes
    if (element?.type === 'Layout') {
      dispatch(
        formConstructorSlice.actions.updateFormElements({
          id: elId,
          changes: { label },
        }),
      )
      //TODO думаю тут не нужен функционал undo
    }
  }
