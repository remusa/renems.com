import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

// https://astro.build/config
import svelte from '@astrojs/svelte'

// https://github.com/unocss/unocss
// import presetIcons from '@unocss/preset-icons'
// import presetUno from '@unocss/preset-uno'
// import presetWebFonts from '@unocss/preset-web-fonts'
// import UnoCSS from 'unocss/astro'
import tailwind from '@astrojs/tailwind'
const root = {
  colorBackground: '#282c34',
  colorPrimary: '#2bbac5',
  colorSecondary: '#ef596f',
}

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://renems.com',
  integrations: [
    mdx(),
    sitemap(),
    svelte(),
    // UnoCSS({
    //   presets: [
    //     presetIcons({}),
    //     presetUno(),
    //     presetWebFonts({
    //       provider: 'google', // default provider
    //       fonts: {
    //         // these will extend the default theme
    //         sans: 'Inter',
    //         mono: ['Fira Code', 'Fira Mono:400,700'],
    //       },
    //     }),
    //   ],
    //   // https://github.com/unocss/unocss#extend-theme
    //   theme: {
    //     colors: {
    //       background: root.colorBackground,
    //       primary: root.colorPrimary,
    //       secondary: root.colorSecondary,
    //     },
    //   },
    // }),
    tailwind(),
  ],
})
