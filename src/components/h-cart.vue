<template lang="pug">
    .h-cart
        .h-cart__title Cart
        .h-cart__list

</template>

<script>
import HCartItem from './h-cart-item';
import {mapGetters} from 'vuex'

export default {
    name: 'h-cart',
    props: {
        cartData: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    components: {
        HCartItem,
    },
    computed: {
        ...mapGetters([
            'CART'
        ])
    }
};
</script>

<style lang="sass">

</style>