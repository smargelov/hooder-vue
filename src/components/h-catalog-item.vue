<template lang="pug">
    .h-catalog-item
        img(
            :src="getSrcByImg(product.images[0])",
            :alt="product.brand"
        ).h-catalog-item__img
        .h-catalog-item__title {{product.brand}}
        .h-catalog-item__price {{product.price}} ₽

</template>

<script>
export default {
    name: 'h-catalog-item',
    props: {
      product: {
          type: Object,
          default() {
              return {}
          }
      }
    },
    data() {
        return {
            img: 'M0010201.jpg',
            title: 'Test product',
            price: 1900
        }
    },
    methods: {
        getSrcByImg: img => require('@/assets/images/' + img)
    }
};
</script>

<style lang="sass">
    .h-catalog-item
        display: flex
        color: $main-dark-color
        flex-direction: column
        align-items: center
</style>