<template>
  <q-page padding>
    <QTBtn label="QTBtn" :rounded="true" />
  </q-page>
</template>

<script>
import QTBtnExample from '../components/QTBtnExample'
import {inject} from "vue";
export default {
  components: {
    QTBtnExample
  },
  provide() {
    const QuasTom = inject('QuasTom', {});

    QuasTom.QBtn = {
      ...QuasTom.QBtn,
      color: 'primary'
    }

    return {
      QuasTom
    }
  }
}
</script>

<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>
