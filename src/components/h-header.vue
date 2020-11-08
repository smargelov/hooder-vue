<template lang="pug">
    header.h-header
        nav.h-header__nav.main-nav
            ul.main-nav__list
                li.main-nav__list-item
                    v-route.main-nav__link(
                        to="/"
                    ) Главная
        h-cart

</template>

<script>
import HCart from '@/components/h-cart';

export default {
    name: 'h-header',
    props: {},
    components: {
        HCart
    },
    data() {
        return {};
    },
    computed: {},
};
</script>

<style scoped lang="sass">

</style>