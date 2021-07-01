<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  provide: {
    QuasTom: {
      QBtn: {
        outline: true,
        noCaps: true,
        color: 'primary',
      }
    }
  }
}
</script>
