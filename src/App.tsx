import React, { useEffect, useState } from 'react'
import { presetGpnDark, presetGpnDefault, Theme } from '@consta/uikit/Theme'

import { FormConstructorPage } from './pages/FormConstructorPage'
import { localStorageObserver } from './components'

const theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
function App() {
  const [value, setValue] = useState<'dark' | 'light' | null>(theme)

  useEffect(() => {
    const handleStorageChange = ({ key, newValue }: StorageEvent) => {
      if (key === 'theme' && (newValue === 'light' || newValue === 'dark')) {
        setValue(newValue)
      }
    }

    localStorageObserver.on('change', handleStorageChange)

    // Чистим подписку при размонтировании компонента
    return () => {
      localStorageObserver.off('change', handleStorageChange)
    }
  }, [])
  return (
    <Theme preset={value === 'dark' ? presetGpnDark : presetGpnDefault}>
      <FormConstructorPage />
    </Theme>
  )
}

export default App
