import { computed } from "vue";
import { useStore } from "vuex"


const useProducts = () => {
    const store = useStore();

    return{
        // Getters
        products: computed(() => store.getters['/products/getProducts']),
        isLoading: computed(() => store.getters['/products/getisLoading']),

        //Actions
        fetchProducts: () => store.dispatch('products/fetchProducts'),
    }
}

export default useProducts;