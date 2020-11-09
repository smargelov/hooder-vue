<template lang="pug">
    .h-catalog
        h-catalog-item(
            v-for="product in PRODUCTS",
            :key="product.id",
            :product="product",
            @addToCart="addToCart(product)"
        )

</template>

<script>
import HCatalogItem from '@/components/h-catalog-item';
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'h-catalog',
    components: {
        HCatalogItem,
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