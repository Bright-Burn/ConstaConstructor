import uuid from 'react-uuid'

import type { IFormElement, IGroupElement } from '../../../../coreTypes'
import { getAllChildrenElements, saveToFile } from '../../../../utils'
import type { BaseComponentSerializable } from '../../../baseComponentsItems'
import type { AppDispatch, RootState } from '../../../setupStore'
import { selectViewAll, selectViewById } from '../../adapters'
import { formInstancesSelector, getViewInfosByIds } from '../../selectors'

export const saveBaseComponent =
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

      const saveObj: BaseComponentSerializable = {
        id: uuid(),
        name: fileName,
        childrenElementList: viewsToSave,
        description: fileName,
        instances: instancesToSave,
        viewInfos: viewInfosToSave,
      }

      saveToFile(JSON.stringify(saveObj), `${fileName}_BaseComponent.json`)
    }
  }
