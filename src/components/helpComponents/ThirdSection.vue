<script>
import VSpanText from "../UI/vSpanText.vue";
import VButton from "../UI/vButton.vue";

export default {
  name: "ThirdSection",
  components: {VButton, VSpanText}
}
</script>

<template>
  <div class="sketch">
    <div class="sketch__bg --top"><img src="/img/smokeD.png" alt=""></div>
    <div class="container">
      <div class="sketch__content">
        <div class="sketch__content-wrapper">
          <div class="sketch__content-text">
            <p><v-span-text text="Не нашли то что нужно?"/></p>
            <h1>Приготовим заказ любой сложности по фото или эскизу</h1>
            <p class="load-image">Загрузите фотографию или эскиз капкейков и мы рассчитаем стоимость за 30 минут</p>
          </div>
          <div class="sketch__content-btn">
            <v-button style="padding: 30px 50px"  color="black" text="Загрузить фотографию"/>
          </div>
        </div>
      </div>
    </div>
    <div class="image-phone"><img src="/img/handPhone.png" alt=""></div>
    <div class="sketch__bg --bottom"><img src="/img/smokeU.png" alt=""></div>
  </div>
</template>

<style scoped>
.sketch {
  overflow: hidden;
  background-color: #081130;
}

.sketch__content {
  position: relative;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: right;
  z-index: 2;
}

.sketch__content-wrapper {
  max-width: 481px;
}
.sketch__content-text {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

.sketch__content h1 {
  font-weight: 500;
  font-size: 48px;
  line-height: 125%;
  letter-spacing: -0.02em;
  color: #fff;
}
.sketch__content-text h1 {
  font-size: calc(var(--index) * 1.9);
}.sketch__content-text p {
  font-size: calc(var(--index) * 1) !important;
}

.sketch__content .load-image {
  font-weight: 400;
  font-size: 21px;
  line-height: 143%;
  letter-spacing: -0.01em;
  color: #fff;
}

.sketch__bg.--top img {
  display: block;
  position: relative;
  width: 100%;
  object-fit: cover;

}

.sketch__bg.--bottom img {
  display: block;
  position: relative;
  width: 100%;
  object-fit: cover;
}

.image-phone {
  position: relative;
  width: 100%;
}

.image-phone img {
  width: calc(var(--index) * 30) ;
  top: calc(var(--index) *-15);
  object-fit: cover;
  position: absolute;
}

@media (max-width: 1060px) {
  .image-phone img{
    display: none;
  }
}

</style>