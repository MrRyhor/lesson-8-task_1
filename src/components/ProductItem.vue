<template>
    <div class="product-container">
        <a :href="obj.link" target="_blank">
            <div>
                <img :src="obj.imgSrc" />
            </div>
            <div>
                <h3>{{ obj.title }}</h3>
                <p>
                    <span>{{ obj.price }}</span> UAH
                </p>
            </div>
        </a>
    </div>
</template>
<script>
export default {
    name: 'ProductItem',
    props: {
        obj: {
            type: Object,
            default: () => ({}),
        },
    },
}
</script>
<style lang="scss" scoped>
.product-container {
    padding: 0px 20px;
    a {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        color: black;

        img {
            width: 100px;
        }        
        span {
            color: red;
        }
    }
}
</style>
