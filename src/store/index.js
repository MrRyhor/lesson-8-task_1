import { createStore } from 'vuex'

export default createStore({
    state: {
        currentCategory: null,
        productsList: [],
    },
    getters: {
        getCurrentCategory: ({ currentCategory }) => currentCategory,
        getProductsList: ({ productsList }) => productsList,
        getFilteredByCategoryProductsList: ({ productsList, currentCategory }) => {
            if (!currentCategory) return productsList
            return productsList.filter((product) => product.category.toLowerCase() === currentCategory.toLowerCase())
        },
    },
    mutations: {
        setCurrentCategory(state, category) {
            state.currentCategory = category
        },
        setProductsList(state, products) {
            state.productsList = products
        },
    },
    actions: {
        setCurrentCategory({ commit }, category) {
            commit('setCurrentCategory', category)
        },
        setProductsList({ commit }, products) {
            commit('setProductsList', products)
        },
    },
    modules: {},
})
