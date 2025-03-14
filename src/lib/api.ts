import { buildPrompt } from './utils'

export const translate = async (content: string, toLanguage: string) => {
  const prompt = buildPrompt(content, toLanguage)

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPEN_ROUTER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'google/gemini-2.0-pro-exp-02-05:free',
        messages: [{ role: 'user', content: prompt }]
      })
    })

    const data = await response.json()
    return data.choices[0].message.content
  } catch (error) {
    console.error(error)
    return null
  }
}
