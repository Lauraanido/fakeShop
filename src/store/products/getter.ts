import { GetterTree } from "vuex";
import { iState } from "..";
import { IsProductState } from "./state";

const getters : GetterTree<IsProductState, iState> = {
    getProducts(state){
        return state.products;
    },
    getisLoading(state){
        return state.isLoading;
    },
    getProduct(state){
        return state.selectedProduct;
    }
}

export default getters;

