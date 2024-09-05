import { useEffect, useState } from 'react'

import { localStorageObserver } from './localStorageObserver'

export const useTheme = () => {
  const theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'

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
  return value
}
