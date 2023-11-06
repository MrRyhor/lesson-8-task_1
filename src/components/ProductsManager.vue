<template>
    <div class="wraper">
        <categories-list />
        <products-list :products-data="getFilteredByCategoryProductsList" />
    </div>
</template>
<script>
import CategoriesList from './CategoriesList'
import ProductsList from './ProductsList'
import { products } from '../constants/products'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'ProductsManager',

    components: {
        CategoriesList,
        ProductsList,
    },
    computed: {
        ...mapGetters(['getProductsList', 'getFilteredByCategoryProductsList']),
    },
    methods: {
        ...mapActions(['setProductsList']),
    },
    created() {
        this.setProductsList(products)
    },
}
</script>
<style lang="scss" scoped>
.wraper {
    max-width: 1000px;
    margin: 0 auto;    
}
</style>
