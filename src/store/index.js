import {createStore} from "vuex";
import axios from "axios";

export default createStore({
    state() {
        return {
            data: [],
            dataComments: [],
            dataProducts: [],
            loading: false
        }
    },
    getters: {
        getData(state) {
            return state.data
        },
        getComments(state) {
            return state.dataComments
        },
        getDataProducts(state) {
            return state.dataProducts
        }
    },
    mutations: {
        setLoading(state, isLoading) {
            state.loading = isLoading;
        },
        updateData(state, data) {
            state.data = data
        },
        updateDataComments(state, data) {
            state.dataComments = data
        },
        updateDataProducts(state, data) {
            state.dataProducts = data
        }
    },
    actions: {
        setCakeData({commit}) {
            commit('setLoading', true);
            axios.get('http://localhost:3000/cupCake')
                .then(response => {
                    commit('updateData', response.data)
                    commit('setLoading', false);
                }).catch(error => {
                console.error(error);
                commit('setLoading', false);
            });
        },
        setDataComments({commit}) {
            commit('setLoading', true);
            commit('updateDataComments', true)
            axios.get('http://localhost:3000/comments')
                .then(response => {
                    commit('updateDataComments', response.data)
                    commit('setLoading', false);
                }).catch(error => {
                console.log(error)
                commit('setLoading', false)
            })
        },
        setDataProducts({commit}) {
            axios.get('http://localhost:3000/products')
                .then(response => {
                    commit('updateDataProducts', response.data)
                }).catch(error => {
                console.log(error)
            })
        }
    }
})