import { FC } from 'react'
import { ISwitchComponent } from './types'

export const SwitchComponent: FC<ISwitchComponent> = ({ testValue, children }) => {
  return children?.find(child => child.props.value === testValue) || <></>
}
