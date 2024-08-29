// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VDateInput } from 'vuetify/labs/VDateInput'
import { fr } from 'vuetify/locale'
import colors from 'vuetify/util/colors'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            primary: colors.red.accent4, //#D50000
          }
        },
      },
    },
    components: {
      VDateInput,
    },
    locale: {
      locale: 'fr',
      messages: { fr },
    },
  })
  app.vueApp.use(vuetify)
})
