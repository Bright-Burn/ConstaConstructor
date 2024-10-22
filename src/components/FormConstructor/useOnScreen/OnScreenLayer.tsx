import type { FC, RefObject } from 'react'
import React from 'react'

import { useAppSelector } from '../store'
import { virtualizationSelector } from '../store/Viewer'

import { useOnScreen } from './useOnScreen'

type OnScreenProps = {
  children: React.ReactNode
  reference: RefObject<HTMLElement>
}

const OnScreen: FC<OnScreenProps> = ({ children, reference }) => {
  const isVisible = useOnScreen(reference)
  return <>{isVisible ? children : null}</>
}

export const OnScreenLayer: FC<OnScreenProps> = ({ children, reference }) => {
  const useVirtualization = useAppSelector(virtualizationSelector)

  return <>{useVirtualization ? <OnScreen reference={reference}>{children}</OnScreen> : children}</>
}
