<template>
    <div class="product-item">
        <div class=" product-image">
            
        </div>
        <div class="product-title"> {{ product?.title}}</div>
        <div class="product-price"> {{ product?.price }}</div>
    </div>
</template>

<script lang="ts">
import { Product } from '@/models/product';
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        product: {
            type: Object as PropType<Product>
        }
    }
})
</script>

<style scoped>

</style>>

