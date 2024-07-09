<script>
import Header from "../components/Header.vue";
import FirstSection from "../components/helpComponents/FirstSection.vue";
import SecondSection from "../components/helpComponents/SecondSection.vue";
import ThirdSection from "../components/helpComponents/ThirdSection.vue";
import FourthSection from "../components/helpComponents/FourthSection.vue";
import FifthSection from "../components/helpComponents/FifthSection.vue";
import SixthSection from "../components/helpComponents/SixthSection.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "mainPage",
  components: {Footer, SixthSection, FifthSection, FourthSection, ThirdSection, SecondSection, FirstSection, Header}
}
</script>

<template>
  <Header/>
  <first-section />
  <second-section />
  <third-section />
  <fourth-section />
  <fifth-section />
  <sixth-section />
  <Footer />
</template>

<style scoped>

</style>