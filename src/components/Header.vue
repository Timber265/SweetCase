<script>
export default {
  name: "Header"
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <div class="header__logo"><h1 class="header__logo-text">Сладкий сундук</h1></div>
        <nav class="header__nav">
          <ul class="header__nav-lists">
            <li class="header__nav-list">
              <span class="header__nav-icon"><img src="/icons/location.svg" alt="icon"></span>
              <a class="header__nav-link" href="#">г. Санкт Петербург, <br> ул. Куйбышева 31</a>
            </li>
            <li class="header__nav-list">
              <span class="header__nav-icon"><img src="/icons/phone.svg" alt="icon"></span>
              <div>
                <a class="header__nav-link" href="#">8 (812) 844-95-49</a>
                <p>Ежедневно с 9:00 до 20:00</p>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  height: 100px;
  background: rgb(0, 5, 17);
  background: linear-gradient(90deg, rgba(0, 5, 17, 1) 0%, rgba(11, 23, 65, 1) 100%);
  border-bottom: 1px solid rgba(126, 134, 142, .1);
}

.header-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
}

.header__logo-text {
  cursor: pointer;
  font-size: calc(var(--index) * 1);
}

.header__nav-lists {
  display: flex;
  gap: 65px;
  font-size: calc(var(--index) * .6);
}

.header__nav-list {
  display: flex;
  gap: 10px;
}

@media (max-width: 500px) {
  .header-wrapper {
    flex-direction: column;
    gap: 20px;
    justify-content: center;
  }
}
</style>