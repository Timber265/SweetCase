<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {mapGetters} from "vuex";

export default {
  name: "FifthSection",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
    };
    const onSlideChange = () => {
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation],
    };
  },
  computed: {
    ...mapGetters(['getComments'])
  }
}
</script>

<template>
  <div class="slider">
    <div class="smoke-d"><img src="/img/smokeD.png" alt=""></div>
    <h1 class="slider__title">Почитайте отзывы довольных клиентов</h1>
    <div class="slider__content">
      <swiper
          :navigation="true" :modules="modules" class="mySwiper"
      >
        <swiper-slide v-for="comment in getComments">
          <div class="slider__content-item">
            <div class="slider__content-text">
              <div style="margin-bottom: 30px">
                <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M8.78049 9.99024C13.6083 9.99024 17.522 13.904 17.522 18.7317C17.522 23.5594 13.6083 27.4732 8.78049 27.4732C3.9527 27.4732 0.0390244 23.5594 0.0390244 18.7317L0 17.4829C0 7.82736 7.82736 0 17.4829 0V4.99512C14.1474 4.99512 11.0114 6.29409 8.65272 8.65272C8.19871 9.10681 7.78435 9.58993 7.41058 10.0974C7.85694 10.0272 8.31438 9.99024 8.78049 9.99024ZM31.2585 9.99024C36.0862 9.99024 40 13.904 40 18.7317C40 23.5594 36.0862 27.4732 31.2585 27.4732C26.4308 27.4732 22.5171 23.5594 22.5171 18.7317L22.478 17.4829C22.478 7.82736 30.3053 0 39.961 0V4.99512C36.6255 4.99512 33.4893 6.29409 31.1308 8.65272C30.6767 9.10681 30.2623 9.58993 29.8885 10.0974C30.3349 10.0272 30.7924 9.99024 31.2585 9.99024Z"
                      fill="#5D6AFB"/>
                </svg>
              </div>
              <h1 class="slider__content-title">{{ comment.title }}</h1>
              <p class="slider__content-subtitle" style="margin-bottom: 24px; line-height: 170%">{{ comment.desc }}</p>
            </div>
            <div class="slider__content-person">
              <div class="slider__content-img"><img :src=comment.img alt=""></div>
              <div class="slider__content-info">
                <h2>{{ comment.personName }}</h2>
                <p>{{ comment.city }}</p>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>

    </div>
    <div class="smoke-u"><img src="/img/smokeU.png" alt=""></div>
  </div>
</template>

<style scoped>
.smoke-d img {
  width: 100%;
}

.smoke-u img {
  width: 100%;
}

.slider {
  color: black;
  background-color: rgba(8, 30, 106, 1);
}

.slider__title {
  font-size: 38px;
  font-weight: 500;
  line-height: 125%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #fff;
  margin-bottom: 80px;
}

.slider__content {
  display: flex;
}

.slider__content-item {
  margin: 0 auto;
  width: 70%;
  display: flex;
  gap: 54px;
  background-color: #fff;
  border: 2px solid #e2eaf2;
  border-radius: 5px;
  padding: 70px 143px;
}

.slider__content-img {
  max-width: 340px;
}

.slider__content-img img {
  width: 100%;
}

.slider__content-text {
  max-width: 460px;
}

.slider__content-text h1 {
  font-weight: 500;
  font-size: 30px;
  line-height: 143%;
  color: #2e363e;
  margin-bottom: 24px;
}

.slider__content-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  text-align: center;
}

.slider__content-info h2 {
  font-weight: 500;
  font-size: 21px;
  line-height: 143%;
  color: #2e363e;
}

.slider__content-info p {
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  color: #a6aeb6;
}

.swiper-button-prev,
.swiper-button-next {
  color: #fff;
  /* дополнительные стили для кнопок */
}

@media (max-width: 1135px) {
  .slider__content-title {
    font-size: calc(var(--index) * 1.4) !important;
  }
  .slider__content-subtitle {
    font-size: calc(var(--index) * .9) !important;
  }
  .slider__content-item {
    justify-content: center;
    flex-direction: column;
    padding: 20px 30px;
    align-items: center;
  }
  .slider__content-text {
    width: 100%;
  }
}
</style>