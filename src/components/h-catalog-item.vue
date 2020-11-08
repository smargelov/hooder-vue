<template lang="pug">
    .h-catalog-item
        .h-catalog-item__img
        .h-catalog-item__title {{title}}
        .h-catalog-item__desc {{desc}}

</template>

<script>
export default {
    name: 'h-catalog-item',
    data() {
        return {
            title: 'Test product',
            desc: 'Test description'
        }
    }
};
</script>

<style scoped lang="sass">
    .h-catalog-item
        display: flex
        flex-direction: column
        align-items: center
</style>