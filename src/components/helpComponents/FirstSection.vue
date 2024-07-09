<script>
import VButton from "../UI/vButton.vue";
import VSpanText from "../UI/vSpanText.vue";

export default {
  name: "FirstSection",
  components: {VSpanText, VButton}
}
</script>

<template>
  <div class="intro">
    <div class="intro-bg">
      <div class="fruits">
        <div class="fruits__item first"><img src="/img/berry.svg" alt=""></div>
        <div class="fruits__item second"><img src="/img/berry.svg" alt=""></div>
        <div class="fruits__item third"><img src="/img/berry.svg" alt=""></div>
        <div class="fruits__item fourth"><img src="/img/leaf.svg" alt=""></div>
      </div>
      <div class="container">
        <div class="intro__wrapper">
          <div class="intro__item">
            <v-span-text text="вкуснейшие"/>
            <div class="intro__text">
              <h1 class="intro__item-title">Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт Петербургу</h1>
              <p class="intro__item-subtitle">Приготовим за 3 часа в день заказа.
                Доставка на авто в холодильнике.</p>
            </div>
            <div class="intro__block">
              <v-button style="padding: calc(var(--index) * 1.2)" color="" text="Перейти в каталог"/>
              <span class="intro__block-span">9 различных <br> видов на выбор</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro {
  height: 125vh;
  color: #fff;
  background: rgb(9, 13, 25);
  background: linear-gradient(90deg, rgba(9, 13, 25, 1) 0%, rgba(8, 30, 106, 1) 100%);
}

.intro-bg {
  height: 100%;
  background-image: url("/img/bg.jpg");
  background-size: cover;
  background-position: center;
}

.intro__wrapper {
  height: 70%;
  display: flex;
  align-items: center;
}

.intro__item {
  z-index: 2;
  width: 100%;
  max-width: 647px;
}

.intro__text {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 24px 0 40px 0;
}

.intro__item-title {
  font-size: calc(var(--index) * 1.9);
  font-weight: 700;
  line-height: 125%;
  letter-spacing: -0.02em;
}

.intro__item-subtitle {
  font-weight: 400;
  font-size: calc(var(--index) * 1);
  line-height: 143%;
}

.intro__block {
  display: flex;
  align-items: center;
  gap: 20px;
}

.fruits {
  position: relative;
}

.fruits__item {
  position: absolute;
  max-width: calc(var(--index) * 8);
}

.fruits__item.first {
  left: 91%;
  transform: translate3d(0, calc(var(--scrollTop) * 1), 0) rotate(180deg);
  z-index: 1;
}

.fruits__item.second {
  left: 81%;
  top: 700px;
  transform: translate3d(0, calc(var(--scrollTop) * .8), 0);
  z-index: 1;
}

.fruits__item.third {
  top: 100px;
  left: -70px;
  transform: translate3d(0, calc(var(--scrollTop) * .9999), 0) rotate(95deg);
  z-index: 1;
}

.fruits__item.fourth {
  left: 10%;
  top: 700px;
  transform: translate3d(0, calc(var(--scrollTop) * .7), 0);
  z-index: 1;
}

.fruits__item img {
  width: 100%;
}


@media (max-width: 680px) {
  .intro__block {
    flex-direction: column;
  }
}
</style>