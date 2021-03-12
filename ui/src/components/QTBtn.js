import { QBtn } from 'quasar';

const props = {};
const propTypes = {
  Boolean: [
    'round',
    'outline',
    'flat',
    'unelevated',
    'rounded',
    'push',
    'glossy',
  ],
};

propTypes.Boolean.forEach((prop) => {
  props[prop] = {
    type: Boolean,
    default() { return this.$q.config.QuasTom.QTBtn[prop]; },
  };
});

export default {
  name: 'QTBtn',
  extends: QBtn,
  props,
};
