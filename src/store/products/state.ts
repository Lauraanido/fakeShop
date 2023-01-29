import { Product} from "@/models/product";

export interface IsProductState {
    products: Product[];
    isLoading: boolean;
    selectedProduct: Product | null;
};

function state () : IsProductState{
    return {
        products: [],
        isLoading: false,
        selectedProduct: null,
    };
}

export default state;