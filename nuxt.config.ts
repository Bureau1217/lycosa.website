// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/style/_main.scss',
  ],

  modules: [
    'nuxt-studio', '@nuxt/content'
  ],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  $production: {
    studio: false
  },
  studio: {
    editor: {
      components: {
        exclude: ['Prose*']
      },
      commands: {
        exclude: [
          'blockquote',
          'bold',
          'bulletList',
          'code',
          'codeBlock',
          'heading1',
          'heading2',
          'heading3',
          'heading4',
          'image',
          'italic',
          'orderedList',
          'strike',
          'horizontalRule',
          'insert',
          'paragraph',
          'style',
          'video',
        ]
      }
    }
  }
})
