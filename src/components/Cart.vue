<template lang="pug">
	.h-cart
		.h-cart__title Cart
		.h-cart__list

</template>

<script>
import CartItem from './CartItem';
import {mapGetters} from 'vuex';

export default {
    props: {
        cartData: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    components: {
        CartItem,
    },
    computed: {
        ...mapGetters([
            'CART',
        ]),
    },
};
</script>

<style lang="sass">

</style>