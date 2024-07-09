<script>
export default {
  name: "vSpanText",
  props: {
    text:String,
  }
}
</script>

<template>
  <span class="intro__item-span">{{text}}</span>
</template>

<style scoped>
.intro__item-span {
  cursor: default;
  display: inline-block;
  color: #2E363E;
  padding: 10px 18px;
  background-color: #F2F6FA;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 11px;
}
</style>