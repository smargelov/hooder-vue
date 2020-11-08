<template lang="pug">
    .h-catalog-item
        img(
            :src="getSrcByImg(img)",
            :alt="title"
        ).h-catalog-item__img
        .h-catalog-item__title {{title}}
        .h-catalog-item__price {{price}} ₽

</template>

<script>
export default {
    name: 'h-catalog-item',
    data() {
        return {
            img: 'M0010201.jpg',
            title: 'Test product',
            price: 1900
        }
    },
    methods: {
        getSrcByImg: img => '@/assets/images/' + img
    }
};
</script>

<style lang="sass">
    .h-catalog-item
        display: flex
        flex-direction: column
        align-items: center
</style>