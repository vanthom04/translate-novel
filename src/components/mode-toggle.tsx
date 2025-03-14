import { MoonIcon, SunIcon } from 'lucide-react'

import { Button } from './ui/button'
import { useTheme } from './theme-provider'

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      className="hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-400"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
