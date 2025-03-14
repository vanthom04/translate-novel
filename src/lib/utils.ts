import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const buildPrompt = (content: string, toLanguage: string) => {
  return `
I need you to translate the following excerpt from a light novel into ${toLanguage}. I'm not sure what language this is, but need a high quality translation with the following requirements:

1. Retains the original writing style of the light novel, including special elements such as vivid dialogue, describing the characters' emotions and actions.
2. Preserve terms that are specific to the light novel world (like skill names, spells, special items) and explain them in parentheses if necessary.
3. If you do not understand the unknown language, reply with the sentence "I do not understand the text" but translated to ${toLanguage}.
4. Use language appropriate to the light novel's target audience (usually teenagers and young adults).
5. Keep the proper names of characters and places, do not translate unless specifically requested.
6. Conveys the atmosphere and emotion of the original text.
7. Add notes for culturally specific elements as needed.
8. In your reply message, do not add anything other than the translation. Do not add any extra words or sentences.

Excerpt to be translated:
${content}
`.trim()
}
