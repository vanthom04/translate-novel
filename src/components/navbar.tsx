import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'

interface NavbarProps {
  disabled?: boolean
  defaultLanguage: string
  onChangeLanguage: (language: string) => void
  onTranslate: () => void
}

export const Navbar = ({ defaultLanguage, disabled, onChangeLanguage, onTranslate }: NavbarProps) => {
  return (
    <nav className="w-full h-[60px] rounded-full bg-neutral-300 flex items-center justify-between px-6 z-50 dark:bg-neutral-800">
      <div className="flex items-center justify-center gap-2">
        <img src="/logo.png" alt="logo" className="w-8 h-8 object-cover" />
        <h1 className="text-xl font-bold hidden sm:block">Translate Novel</h1>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Select defaultValue={defaultLanguage} onValueChange={onChangeLanguage} disabled={disabled}>
          <SelectTrigger className="min-w-24 md:min-w-32 border-neutral-400 text-xs md:text-sm">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="English">English</SelectItem>
            <SelectItem value="Vietnamese">Vietnamese</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={onTranslate} disabled={disabled} className="text-xs md:text-sm">
          Translate
        </Button>
        <ModeToggle />
      </div>
    </nav>
  )
}
