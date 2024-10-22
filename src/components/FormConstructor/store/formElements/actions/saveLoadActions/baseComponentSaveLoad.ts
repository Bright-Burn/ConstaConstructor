import type { IFormElement, IGroupElement } from '../../../../coreTypes'
import { getAllChildrenElements } from '../../../../utils'
import { saveBaseComponent } from '../../../projectSaveLoad'
import type { AppDispatch, RootState } from '../../../setupStore'
import { selectViewAll, selectViewById } from '../../adapters'
import { formInstancesSelector, getViewInfosByIds } from '../../selectors'

export const saveBaseComponentToFile =
  (id: string, fileName: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const allElements = selectViewAll(state)
    const selectedView = selectViewById(state, id)

    if (selectedView) {
      const viewsToSave: (IFormElement | IGroupElement)[] = [
        { ...selectedView, parentId: undefined },
        ...getAllChildrenElements(selectedView, allElements),
      ]
      const instancesToSave = formInstancesSelector(viewsToSave.map(elem => elem.instanceId))(state)
      const viewInfosToSave = getViewInfosByIds(viewsToSave.map(view => view.id))(state)

      saveBaseComponent({
        fileName,
        instancesToSave,
        viewsToSave,
        viewInfosToSave,
      })
    }
  }
