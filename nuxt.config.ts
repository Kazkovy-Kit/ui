import {fileURLToPath} from 'url'
import {dirname, join} from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))


export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxt/icon',
        '@nuxtjs/i18n',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        'radix-vue/nuxt'
    ],
    components: [
        {
            path: join(currentDir, './components'),
            // this is required else Nuxt will autoImport `.ts` file
            extensions: ['.vue'],
        },
    ],
    tailwindcss: {
        cssPath: join(currentDir, './assets/css/tailwind.css'),
    },
    colorMode: {
        classSuffix: "",
    },
    radix: {
        components: false,
    },
    i18n: {
        strategy: 'no_prefix',
        locales: [
            {
                code: 'uk',
                name: '🇺🇦 Українська',
                file: join(currentDir, './locales/uk.json'),
            },
            {
                code: 'en',
                name: '🇬🇧 English',
                file: join(currentDir, './locales/en.json')
            }
        ],
        lazy: true,
        vueI18n: join(currentDir, './i18n.config.ts'),
        defaultLocale: 'uk',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root'
        }
    }
})
