export const GLOBAL_COLOR_THEMES = ['blue', 'orange', 'green'] as const

export type GlobalColorTheme = typeof GLOBAL_COLOR_THEMES[number]

export function useGlobalColorTheme() {
  const globalColorTheme = useState<GlobalColorTheme>('globalColorTheme', () => 'blue')

  function randomizeGlobalColorTheme() {
    globalColorTheme.value = GLOBAL_COLOR_THEMES[Math.floor(Math.random() * GLOBAL_COLOR_THEMES.length)]!
  }

  return { globalColorTheme, randomizeGlobalColorTheme }
}

const COLOR_PATTERN = /__(orange|green|blue)__/

// Image source for the current theme: an explicit per-colour override (item.blue / item.green / item.orange),
// otherwise the path with its __blue__ / __green__ / __orange__ token swapped for the current theme.
export function themedImageSrc(
  item: { image?: string } & Partial<Record<GlobalColorTheme, string>>,
  theme: GlobalColorTheme,
): string | undefined {
  if (item[theme]) return item[theme]
  return item.image?.replace(COLOR_PATTERN, `__${theme}__`)
}
