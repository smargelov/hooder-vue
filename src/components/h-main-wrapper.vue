<template lang="pug">
    main.h-main-wrapper
        h-header
        h-catalog
        h-cart

</template>

<script>
import HHeader from '@/components/h-header';
import HCatalog from '@/components/h-catalog';
import HCart from '@/components/h-cart';

export default {
    name: 'h-main-wrapper',
    components: {
        HHeader,
        HCatalog,
        HCart
    },
    data() {
        return {
            title: 'Test title',
        };
    },

};
</script>

<style lang="sass">
.h-main-wrapper
    display: grid
    justify-items: center
</style>