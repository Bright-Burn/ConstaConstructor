import type { FC } from 'react'
import React from 'react'

import { FormGroupsDictTypes } from '../../../../coreTypes'
import { SwitchComponent } from '../../../SwitchComponent'
import type { IComponentCard } from '../ComponentItems'
import { ComponentCardLayout } from '../ComponentItems'

export const ComponentGrid: FC<IComponentCard> = ({ name, groupElementType, isOuter }) => {
  return (
    <div>
      {groupElementType ? (
        <SwitchComponent testValue={groupElementType}>
          <ComponentCardLayout name={name} value={FormGroupsDictTypes.Layout} isOuter={isOuter} />
          <></>
        </SwitchComponent>
      ) : null}
    </div>
  )
}
