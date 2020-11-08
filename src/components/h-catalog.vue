<template lang="pug">
    .h-catalog
        h-catalog-item(
            v-for="product in PRODUCTS",
            :key="product.id",
            :product="product"
        )

</template>

<script>
import HCatalogItem from '@/components/h-catalog-item';
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'h-catalog',
    components: {
        HCatalogItem,
    },
    computed: {
      ...mapGetters([
          'PRODUCTS'
      ])
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API'
        ])
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
    }
};
</script>

<style scoped lang="sass">

</style>