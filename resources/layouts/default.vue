<template>
  <div>
    <Header/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import MyFooter from '~/components/Footer.vue'

export default {
  components: {
    MyFooter,
    Header
  }
}
</script>
