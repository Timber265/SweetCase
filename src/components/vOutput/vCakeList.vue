<script>
export default {
  name: "vCakeList"
}
</script>

<template>
  <div class="product__grid">
    <slot/>
  </div>
</template>

<style scoped>
  .product__grid {
    display: grid;
    gap: 9px;
    grid-template-columns: repeat(3, 1fr);
  }
</style>