export const GLOBAL_COLOR_THEMES = ['blue', 'orange', 'green'] as const

export type GlobalColorTheme = typeof GLOBAL_COLOR_THEMES[number]

export function useGlobalColorTheme() {
  const globalColorTheme = useState<GlobalColorTheme>('globalColorTheme', () => 'blue')

  function randomizeGlobalColorTheme() {
    globalColorTheme.value = GLOBAL_COLOR_THEMES[Math.floor(Math.random() * GLOBAL_COLOR_THEMES.length)]!
  }

  return { globalColorTheme, randomizeGlobalColorTheme }
}
