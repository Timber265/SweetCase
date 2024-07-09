import {createWebHistory, createRouter} from "vue-router";
import mainPage from "../pages/mainPage.vue";

const routes = [
    { path: '/', component: mainPage},
]

export default createRouter({
    history: createWebHistory(),
    routes,
})