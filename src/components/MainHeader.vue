<template lang="pug">
    header.h-header
        nav.h-header__nav.main-nav
            ul.main-nav__list
                li.main-nav__list-item
                    a.main-nav__link(
                        href="/"
                    ) Главная

</template>

<script>

export default {
    props: {},
    components: {
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
    grid-template-columns: 1fr
    align-items: center
</style>