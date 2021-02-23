<template lang="pug">
	.h-catalog
		CatalogItem(
			v-for="product in PRODUCTS",
			:key="product.id",
			:product="product",
			@addToCart="addToCart(product)"
		)

</template>

<script>
import CatalogItem from '@/components/CatalogItem';
import {mapActions, mapGetters} from 'vuex';

export default {
    components: {
        CatalogItem,
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
        ]),
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_PRODUCT_TO_CART',
        ]),
        addToCart(product) {
            this.ADD_PRODUCT_TO_CART(product);
        },
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API();
    },
};
</script>

<style lang="sass">

.h-catalog
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))
    gap: 30px


</style>