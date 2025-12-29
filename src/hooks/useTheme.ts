import { useEffect } from 'react'
import { useUIStore } from '../app/store'

export function useTheme() {
  const theme = useUIStore((s) => s.theme)

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      theme === 'dark'
    )
  }, [theme])
}
