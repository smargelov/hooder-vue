<template lang="pug">
    header.h-header
        nav.h-header__nav.main-nav
            ul.main-nav__list
                RouterLink(
                    :to="{name: 'main'}"
                    tag="li"
                    class="main-nav__list-item"
                    active-class="main-nav__list-item--active"
                ) Главная
                RouterLink(
                    :to="{name: 'cart'}"
                    tag="li"
                    class="main-nav__list-item"
                    active-class="main-nav__list-item--active"
                ) Корзина

</template>

<script>

export default {
    props: {},
    components: {},
    data() {
        return {};
    },
    computed: {},
};
</script>

<style lang="sass">
.h-header
    display: grid
    grid-template-columns: 1fr
    align-items: center
</style>