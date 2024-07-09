<script>
import VProductList from "../vOutput/vProductList.vue";
import VProduct from "../vOutput/vProduct.vue";
import {mapGetters, mapState} from "vuex";
import VStatus from "../UI/vStatus.vue";

export default {
  name: "SecondSection",
  components: {VStatus, VProduct, VProductList},
  computed: {
    ...mapGetters(['getData']),
    ...mapState(['loading'])
  }
}
</script>

<template>
<div class="meal">
  <div class="container">
    <div class="meal__wrapper">
      <h1 class="meal__title">Для любых событий и дорогих вам людей </h1>
      <div class="meal__content">
        <v-status v-if="loading"/>
        <v-product-list v-else>
          <v-product v-for="data in getData" :data=data />
        </v-product-list>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.meal__title {
  font-size: calc(var(--index) * 2);
  font-weight: 500;
  line-height: 125%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #2e363e;
  margin-bottom: 80px;
}
.meal__wrapper {
  position: relative;
  z-index: 2;
}
</style>