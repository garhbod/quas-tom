import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-quas-tom'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
