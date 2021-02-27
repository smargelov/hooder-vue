import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import _ from 'lodash';

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        catalog: [],
        cart: [],
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_PRODUCTS_TO_CATALOG: (state) => {
            state.catalog = _.take(state.products, 6);
        },
        SET_PRODUCT_TO_CART: (state, product) => {
            state.cart.push(product);
        },
    },
    actions: {
        GET_PRODUCTS_FROM_API({ commit }) {
            return axios('http://localhost:3000/catalog', {
                method: 'GET',
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    commit('SET_PRODUCTS_TO_CATALOG');
                    return products;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                });
        },
        ADD_PRODUCT_TO_CART({ commit }, product) {
            commit('SET_PRODUCT_TO_CART', product);
        },
    },
    getters: {
        PRODUCTS(store) {
            return store.catalog;
        },
        CART(store) {
            return store.cart;
        },
    },
});
export default store;