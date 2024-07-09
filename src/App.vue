<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions(['setCakeData', 'setDataComments', "setDataProducts"])
  },
  created() {
    this.setCakeData()
    this.setDataComments()
    this.setDataProducts()
  }
}
</script>

<template>
  <router-view/>
</template>

<style scoped>

</style>
