<script>
import VCheckBox from "./UI/vCheckBox.vue";

export default {
  name: "Footer",
  components: {VCheckBox}
}
</script>

<template>
  <footer class="footer">
    <div class="footer-smoke"><img src="/img/smokeD.png" alt=""></div>
    <div class="container">
      <div class="footer__content">
        <div class="footer__block">
          <div class="footer__block-text">
            <h1>Чтобы сделать заказ, укажите ваш телефон</h1>
            <p>Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания</p>
          </div>
          <div class="footer__block-order">
            <div class="footer__block-number">
              <input placeholder="Номер телефона">
              <button>Сделать заказ</button>
            </div>
            <div class="footer__block-license">
              <v-check-box/>
              <p>Нажамая на кнопку, вы соглашаетесь с условиями обработки персональных данных</p></div>
          </div>
        </div>
        <div class="footer__link">
          <div class="footer__link-wrapper">
            <nav class="footer__link-nav">
              <ul class="footer__link-lists">
                <li class="footer__link-list"><p>Согласие на обработку данных</p></li>
                <li class="footer__link-list"><p>Служба поддержки</p></li>
                <li class="footer__link-list"><p>Политика конфиденциальности</p></li>
              </ul>
            </nav>
            <p style="font-weight: 400;font-size: 12px; line-height: 150%; color: #7e868e;">© nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 0000000000000</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #081130;
  padding-bottom: 100px;
}

.footer-smoke img {
  width: 100%;
}

.footer__block {
  padding: 80px 0;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 80px;
}

.footer__block-text {
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
  margin-bottom: 36px;
}

.footer__block-text h1 {
  font-size: calc(var(--index) * 2);
  font-weight: 700;
  line-height: 133%;
  color: #2e363e;
}

.footer__block-text p {
  font-weight: 400;
  font-size: calc(var(--index) * 1);
  line-height: 143%;
  letter-spacing: -0.01em;
  text-align: center;
  color: #2e363e;
}

.footer__block-order {

}

.footer__block-number {
  max-width: 730px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.footer__block-number input, button {
  width: 50%;
  height: 85px;
}

.footer__block-number input {
  padding: 0 31px;
  background-color: #f2f6fa;
  border-radius: 8px;
}

.footer__block-number button {
  background-color: #fed84c;
  border-radius: 8px;
  font-weight: 300;
  font-size: 18px;
  line-height: 152%;
  color: #2e363e;
}

.footer__block-license {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 11px;
  line-height: 130%;
  color: #7e868e;
}

.footer__link {
  display: flex;
  justify-content: center;
  text-align: center;
}

.footer__link-lists {
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #7e868e;
  display: flex;
  align-items: center;
  gap: 43px;
}
.footer__link-wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
@media (max-width: 720px) {
  .footer__block-number {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .footer__block-number input, button {
    width: 100%;
    height: 50px;
  }
}
@media (max-width: 630px) {
  .footer__block-text h1 {

  }
  .footer__link-lists {
    flex-direction: column;
    gap: 20px;
  }
}
</style>