<template lang="pug">
    main.h-main-wrapper
        MainHeader
        RouterView

</template>

<script>
import MainHeader from '@/components/MainHeader';
import MainCatalog from '@/components/MainCatalog';
import Cart from '@/components/Cart';

export default {
    components: {
        MainHeader,
        MainCatalog,
        Cart
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