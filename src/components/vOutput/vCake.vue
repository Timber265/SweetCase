<script>
export default {
  name: "vCake",
  props: {
    data: Object,
  }
}
</script>

<template>
    <div class="product-item">
      <img :src="data.img" alt="">
    </div>
</template>

<style scoped>
.product-item img {
  width: 100%;
  object-fit: cover;
}
</style>