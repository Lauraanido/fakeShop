<template>
    <div class="detail">
        <h1>Listado de Productos</h1>
        <div v-if="isLoading"> Cargando, espera un poquito :D </div>
        <div v-else>
            <!-- No he encontrado el error por lo que no se ven los productos en mi código, help! -->
            <ListProducts v-for="product in products" :key="product?.id" :product="product"/>
        </div>
       
    </div>
    

    
</template>

<script lang="ts">
    import useProducts from '@/composable/useProducts';
    import { defineComponent } from 'vue';
    import ListProducts from '@/components/ListProducts.vue';


    export default defineComponent({
        
        components:{
            ListProducts,
        },
        setup () {
            const {products, isLoading, fetchProducts} = useProducts();

            fetchProducts();

            return {products, isLoading}
        },
    })
</script>