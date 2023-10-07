import { fr } from '@formkit/i18n'
import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import myTailwindTheme from './tailwind-theme.js'

export default {
  locales: { fr },
  locale: 'fr',
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(myTailwindTheme),
  },
}