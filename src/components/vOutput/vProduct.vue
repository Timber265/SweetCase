<script>

import VButton from "../UI/vButton.vue";

export default {
  name: "vProduct",
  components: {VButton},
  props: {
    data: Object
  }
}
</script>

<template>
  <div class="meal__item">
    <div class="meal__item-image">
      <img :src=data.img alt="">
    </div>
    <div class="meal__item-block">
      <div class="meal__item-text">
        <h2 class="meal__item-title">{{ data.title }}</h2>
        <p class="meal__item-desc">{{ data.desc }}</p>
      </div>
      <div class="meal__item-order">
        <h2 class="order-price">{{ data.price }} ₽/шт. </h2>
        <v-button text="Заказать" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.meal__item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 10px;
}

.meal__item-image img {
  width: 100%;
  display: block;
}

.meal__item-block {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  background-color: rgba(255, 255, 255, .2);
  border-radius: 0 0 12px 12px;
  padding: 50px 44px;
  border: 1px solid #ebf1f6;
}
.meal__item-title {
  margin-bottom: 12px;
  font-weight: 700;
  font-size: calc(var(--index) * 1);
  line-height: 143%;
  color: #2e363e;
}
.meal__item-desc {
  font-size: calc(var(--index) * .8);
  font-weight: 400;
  line-height: 150%;
  color: #2e363e;
}
.order-price {
  font-size: 24px;
  font-weight: 500;
  line-height: 150%;
  color: #434b53;
  margin-bottom: 14px;
}


@media (max-width: 830px) {
  .meal__item-desc {
    font-size: calc(var(--index) * 1.2);
  }
}
@media (max-width: 465px) {
  .meal__item-desc {
    font-size: calc(var(--index) * 1.7);
  }
}
</style>