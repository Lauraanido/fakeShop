import { Product } from "@/models/product";
import { MutationTree } from "vuex";
import { IsProductState } from "./state";


const mutations : MutationTree<IsProductState> = {
    setProducts(state : IsProductState, products: Product[]){
        state.products = products;
    },
    setisLoading(state: IsProductState, value:boolean){
        state.isLoading = value;
    },
    setselectedProduct(state, product: Product){
        state.selectedProduct = product;
    }

}

export default mutations;