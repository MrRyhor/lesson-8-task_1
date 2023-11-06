<template>
    <div class="container">
        <div
            class="item-container"
            v-for="category in categoriesList"
            :key="category.id"
            @click="chooseCurrentCategory(category.title)"
        >
            <div class="img-container" :class="{ selected: getCurrentCategory === category.title }">
                <img :src="category.imgSrc" />
            </div>
            <p>{{ category.title }}</p>
        </div>
    </div>
</template>
<script>
import { categories } from '../constants/products'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'CategoriesList',

    computed: {
        ...mapGetters(['getCurrentCategory']),
        categoriesList() {
            return categories
        },
    },
    methods: {
        ...mapActions(['setCurrentCategory']),
        chooseCurrentCategory(category) {
            this.setCurrentCategory(category.toLowerCase())
        },
    },
}
</script>
<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid gray;
    padding: 10px;
    background-color: gray;
    color: white;

    .item-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        cursor: pointer;
        img {
            width: 300px;
            height: 300px;
            border-radius: 50%;
            object-fit: contain;            
        }
        p {
            text-transform: uppercase;
            font-weight: 700;
        }
    }
    .img-container {
        border-radius: 50%;
        background-color: white;
        object-fit: contain;
    }
    .selected {
        border: 5px solid red;
        width: 300px;
        height: 300px;
        border-radius: 50%;
    }
}
</style>
