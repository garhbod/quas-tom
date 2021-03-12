import { version } from '../package.json'

import QTBtn from './components/QTBtn'


export {
  version,

  QTBtn,

}

export default {
  version,

  QTBtn,


  install (Vue) {
    Vue.component(QTBtn.name, QTBtn)

  }
}
