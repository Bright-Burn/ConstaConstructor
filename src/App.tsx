import React from 'react'
import { presetGpnDark, presetGpnDefault, Theme } from '@consta/uikit/Theme'

import { FormConstructorPage } from './pages/FormConstructorPage'
import { useTheme } from './components'

function App() {
  const theme = useTheme()
  return (
    <Theme preset={theme === 'dark' ? presetGpnDark : presetGpnDefault}>
      <FormConstructorPage />
    </Theme>
  )
}

export default App
