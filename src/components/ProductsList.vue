<template>
    <div class="container">
        <product-item v-for="product in productsData" :obj="product" :key="product.id" />
    </div>
</template>
<script>
import ProductItem from './ProductItem.vue'
export default {
    name: 'ProductsList',
    components: {
        ProductItem,
    },
    props: {
        productsData: {
            type: Array,
            default: () => [],
        },
    },
}
</script>
<style lang="scss" scoped>
.container {
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    border: 2px solid gray;
    padding: 10px;
}
</style>
