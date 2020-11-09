<template lang="pug">
    .h-cart-item
        img(
            :src="getSrcByImg(cartData.images[0])",
            :alt="cartData.brand"
        ).h-cart-item__img
        .h-cart-item__title {{cartData.name}}
        .h-cart-item__size {{cartData.size}}


</template>

<script>
export default {
    name: 'h-cart-item',
    props: {
        cartData: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    data() {
        return {};
    },
    computed: {},
    methods: {
        getSrcByImg: img => require('@/assets/images/' + img),

    },
};
</script>

<style lang="sass">

</style>