<template lang="pug">
	.h-catalog-item
		picture.h-catalog-item__img
			source(
				:srcset="getSrcByImg(product.images[0], 'webp')"
				type="image/webp"
			)
			img(
				:src="getSrcByImg(product.images[0], 'jpg')",
				:alt="product.brand"
			)
		.h-catalog-item__title {{product.brand}}
		.h-catalog-item__price {{product.price}} ₽
		.h-catalog-item__btn.btn(
			@click="addToCart(product.id)"
		) В корзину

</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    data() {
        return {};
    },
    methods: {
        getSrcByImg: (img, type) => require(`@/assets/images/${img}.${type}`),
        addToCart() {
            this.$emit('addToCart');
        },
    },
};
</script>

<style lang="sass">
.h-catalog-item
    display: flex
    color: $main-dark-color
    flex-direction: column
    align-items: center
</style>