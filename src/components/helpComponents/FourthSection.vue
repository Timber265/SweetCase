<script>
import VSpanText from "../UI/vSpanText.vue";
import VButton from "../UI/vButton.vue";

export default {
  name: "FourthSection",
  components: {VButton, VSpanText}
}
</script>

<template>
  <div class="quest">
    <div class="container">
      <div class="quest__content">
        <div class="quest__info">
          <v-span-text style="margin-bottom: 24px" text="Кто будет готовить?"/>
          <h1>Лично приготовлю <br> и всё красиво упакую <br> для вашего события</h1>
          <div style="max-width: 360px; margin-bottom: 50px">
            <ul class="quest__info-lists">
              <li class="quest__info-list">
                <span><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                    d="M5 10C3.61333 10 2.42667 9.52569 1.44 8.57708C0.48 7.60211 0 6.40316 0 4.98024C0 3.55731 0.48 2.37154 1.44 1.42293C2.42667 0.474308 3.61333 0 5 0C6.38667 0 7.56 0.474308 8.52 1.42293C9.50667 2.37154 10 3.55731 10 4.98024C10 6.40316 9.50667 7.60211 8.52 8.57708C7.56 9.52569 6.38667 10 5 10Z"
                    fill="#5D6AFB"/></svg></span>
                <p>Проконсультирую по выбору капкейков и придумаю нестандартную идею</p>
              </li>
              <li class="quest__info-list">
                <span><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                    d="M5 10C3.61333 10 2.42667 9.52569 1.44 8.57708C0.48 7.60211 0 6.40316 0 4.98024C0 3.55731 0.48 2.37154 1.44 1.42293C2.42667 0.474308 3.61333 0 5 0C6.38667 0 7.56 0.474308 8.52 1.42293C9.50667 2.37154 10 3.55731 10 4.98024C10 6.40316 9.50667 7.60211 8.52 8.57708C7.56 9.52569 6.38667 10 5 10Z"
                    fill="#5D6AFB"/></svg></span>
                <p>Приготовлю капкейки для вашего события, которые обязательно всем понравятся </p>
              </li>
              <li class="quest__info-list">
                <span><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                    d="M5 10C3.61333 10 2.42667 9.52569 1.44 8.57708C0.48 7.60211 0 6.40316 0 4.98024C0 3.55731 0.48 2.37154 1.44 1.42293C2.42667 0.474308 3.61333 0 5 0C6.38667 0 7.56 0.474308 8.52 1.42293C9.50667 2.37154 10 3.55731 10 4.98024C10 6.40316 9.50667 7.60211 8.52 8.57708C7.56 9.52569 6.38667 10 5 10Z"
                    fill="#5D6AFB"/></svg></span>
                <p>Аккуратно и красиво всё упакую, если вы хотите сделать приятный подарок</p>
              </li>
            </ul>
          </div>
          <div>
            <v-button style="padding: 30px 50px" color="" text="Задать вопрос Юлии"/>
          </div>
        </div>
        <div class="quest__bg" style="position: relative; flex-grow: 1">
          <img
              style="position: absolute; z-index: 1; width: calc(var(--index) * 20); top: calc(var(--index) * -15); right: 20px"
              src="/img/woman.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quest {
  position: relative;
  margin: 100px 0;
  z-index: 2;
}

.quest__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.quest__info {
  position: relative;
  z-index: 2;
  max-width: 580px;
}

.quest__info h1 {
  font-weight: 500;
  font-size: calc(var(--index) * 2);
  line-height: 125%;
  letter-spacing: -0.02em;
  color: #2e363e;
  margin-bottom: 36px;
}

.quest__info-lists {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.quest__info-list {
  display: flex;
  gap: 12px;
}

.quest__info-list p {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #2e363e;
}

</style>