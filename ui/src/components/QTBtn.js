import {inject} from 'vue';
import {QBtn} from 'quasar';

const props = {};

Object.entries(QBtn.props).forEach(
  ([prop, defaultOptions]) => {
    const options = typeof defaultOptions === 'object' && !!defaultOptions ? defaultOptions : { type: defaultOptions };

    props[prop] = {
      ...options,
      default() {
        const {QBtn: QBtnProps} = inject('QuasTom', {})
        return typeof QBtnProps === 'object' && !!QBtnProps
            ? QBtnProps[prop] || defaultOptions.default : defaultOptions.default;
      }
    };
  }
)

export default {
  name: 'QTBtn',
  extends: QBtn,
  props,
  setup: QBtn.setup,
};
