import { useState } from 'react'
import { ArrowDownIcon, CopyCheckIcon, CopyIcon, LoaderIcon } from 'lucide-react'
import MarkdownPreview from '@uiw/react-markdown-preview'
import toast from 'react-hot-toast'

import { translate } from '@/lib/api'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export const App = () => {
  const [content, setContent] = useState('')
  const [isCopied, setIsCopied] = useState(false)
  const [isTranslating, setIsTranslating] = useState(false)
  const [translatedContent, setTranslatedContent] = useState('')
  const [defaultLanguage, setDefaultLanguage] = useState('Vietnamese')

  const handleTranslate = async () => {
    if (!content) return toast.error('Please enter your text to translate.')
    setIsTranslating(true)

    try {
      const result = await translate(content, defaultLanguage)
      setTranslatedContent(result)
    } catch (error) {
      console.error(error)
    } finally {
      setIsTranslating(false)
    }
  }

  const handleCopy = async () => {
    if (translatedContent) {
      await navigator.clipboard.writeText(translatedContent)
      toast.success('Copied to clipboard')
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, 1500)
    }
  }

  return (
    <div className="min-h-screen p-2 bg-gray-50 dark:bg-black">
      <Navbar
        disabled={isTranslating}
        defaultLanguage="Vietnamese"
        onChangeLanguage={setDefaultLanguage}
        onTranslate={handleTranslate}
      />
      <div className="w-full md:h-[calc(100vh-60px-16px-8px)] mt-2 md:flex md:gap-x-2">
        <div className="md:flex-1/2 h-[520px] md:h-full border border-black dark:border-neutral-300">
          <Textarea
            value={content}
            spellCheck="false"
            autoComplete="off"
            disabled={isTranslating}
            placeholder="Enter your text here..."
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-full md:!text-base resize-none rounded-none border-none focus-visible:ring-0 disabled:select-none"
          />
        </div>
        <div className="flex items-center justify-center py-2 md:hidden">
          <ArrowDownIcon className="size-5 text-muted-foreground" />
        </div>
        <div className="md:flex-1/2 h-[520px] md:h-full border border-black dark:border-neutral-300 relative">
          {isTranslating ? (
            <div className="flex items-center justify-center h-full">
              <LoaderIcon className="size-4 text-muted-foreground animate-spin" />
            </div>
          ) : translatedContent ? (
            <MarkdownPreview
              source={translatedContent}
              className="w-full h-full overflow-y-auto dark:!bg-black dark:!text-white p-2"
            />
          ) : (
            <div className="flex items-center justify-center h-full select-none">
              <p className="text-muted-foreground text-sm dark:text-neutral-500">
                The translation will appear here.
              </p>
            </div>
          )}
          <div className="absolute top-0 right-0">
            <Button
              size="icon"
              variant="outline"
              className="shrink-0"
              onClick={handleCopy}
              disabled={!translatedContent || isTranslating || isCopied}
            >
              {isCopied ? <CopyCheckIcon /> : <CopyIcon />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
