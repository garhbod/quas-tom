import QTBtn from './components/QTBtn'


const version = __UI_VERSION__

function install (app) {
  app.component(QTBtn.name, QTBtn)
}

export {
  version,
  QTBtn,
  install
}
