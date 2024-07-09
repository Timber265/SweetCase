<script>
import VCakeList from "../vOutput/vCakeList.vue";
import VCake from "../vOutput/vCake.vue";
import {mapGetters} from "vuex";

export default {
  name: "SixthSection",
  components: {VCake, VCakeList},

  computed: {...mapGetters(['getDataProducts'])}
}
</script>

<template>
  <div class="product">
    <div class="product__content">
      <div class="product__text">
        <h1>Сделали более 3.000 заказов за 2 года</h1>
        <p>Посмотрите фото реальных заказов из нашего instagram</p>
      </div>
      <div class="product__wrapper">
        <v-cake-list>
          <v-cake v-for="cake in getDataProducts" :data="cake"/>
        </v-cake-list>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product__text {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 14px;
  text-align: center;
  height: 250px;
}

.product__text h1 {
  font-weight: 500;
  font-size: calc(var(--index) * 1.8);
  line-height: 125%;
  letter-spacing: -0.02em;
  color: #2e363e;
}

.product__text p {
  font-weight: 400;
  font-size: calc(var(--index) * 1);
  line-height: 143%;
  color: #2e363e;
}

@media (max-width: ) {
  .product__text {
    margin: 0;
  }
}
</style>