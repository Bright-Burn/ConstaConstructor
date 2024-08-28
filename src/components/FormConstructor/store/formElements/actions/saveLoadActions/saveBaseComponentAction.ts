import uuid from 'react-uuid'

import type { IFormElement, IGroupElement } from '../../../../coreTypes'
import { getAllChildrenElements, saveToFile } from '../../../../utils'
import type { IBaseComponent } from '../../../baseComponentsItems'
import type { AppDispatch, RootState } from '../../../setupStore'
import { formInstancesSelector } from '../..'
import { selectViewAll, selectViewById } from '../../adapters'

export const saveBaseComponent =
  (id: string, fileName: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const allElements = selectViewAll(state)
    const selectedView = selectViewById(state, id)

    if (selectedView) {
      const arrToSave: (IFormElement | IGroupElement)[] = [
        { ...selectedView, parentId: undefined },
        ...getAllChildrenElements(selectedView, allElements),
      ]
      const instancesToSave = formInstancesSelector(arrToSave.map(elem => elem.instanceId))(state)

      const saveObj: IBaseComponent = {
        id: uuid(),
        name: fileName,
        childrenElementList: arrToSave,
        description: fileName,
        instances: instancesToSave,
      }

      saveToFile(JSON.stringify(saveObj), `${fileName}_BaseComponent.json`)
    }
  }
