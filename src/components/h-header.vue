<template lang="pug">
    header.h-header
        nav.h-header__nav.main-nav
            ul.main-nav__list
                li.main-nav__list-item
                    a.main-nav__link(
                        href="/"
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

<style lang="sass">
.h-header
    display: grid
    grid-template-columns: 1fr auto
    align-items: center
</style>