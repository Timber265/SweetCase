<script>
export default {
  name: "vProductList"
}
</script>

<template>
  <div class="meal__wrapper">
    <slot/>
  </div>
</template>

<style scoped>
.meal__wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 830px) {
  .meal__wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 465px) {
  .meal__wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>