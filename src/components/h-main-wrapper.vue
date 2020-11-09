<template lang="pug">
    main.h-main-wrapper
        h-header
        h-catalog

</template>

<script>
import HHeader from '@/components/h-header';
import HCatalog from '@/components/h-catalog';

export default {
    name: 'h-main-wrapper',
    components: {
        HHeader,
        HCatalog,
    },
    data() {
        return {
            title: 'Test title',
        };
    },

};
</script>

<style lang="sass">
.h-main-wrapper
    display: grid
    justify-items: center
</style>