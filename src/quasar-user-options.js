
import './styles/quasar.scss'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/ionicons-v4/ionicons-v4.css'

// To be used on app.use(Quasar, { ... })
export default {
  config: {
    brand: {
      primary: '#2cBc37',
      secondary: '#f45d01',
      accent: '#9C27B0',

      dark: '#1d1d1d',

      positive: '#97cc04',
      negative: '#f42718',
      info: '#31CCEC',
      warning: '#eeb902'
    },
    dark: false,
  },
  plugins: {
  }
}