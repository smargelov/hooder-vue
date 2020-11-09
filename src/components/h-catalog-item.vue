<template lang="pug">
    .h-catalog-item
        img(
            :src="getSrcByImg(product.images[0])",
            :alt="product.brand"
        ).h-catalog-item__img
        .h-catalog-item__title {{product.brand}}
        .h-catalog-item__price {{product.price}} ₽
        .h-catalog-item__btn.btn(
            @click="addToCart(product.id)"
        ) В корзину

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

        }
    },
    methods: {
        getSrcByImg: img => require('@/assets/images/' + img),
        addToCart() {
            this.$emit('addToCart')
        }
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