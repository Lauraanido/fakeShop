import fakeShopApi from "@/api/fakeApiShop";
import { Product } from "@/models/product";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IsProductState } from "./state";
import { iState } from "..";

const actions: ActionTree<IsProductState, iState> = {
    async fetchProducts({ commit }) {
      // usamos la mutación para poner isLoading = true
      commit("setisLoading", true);
  
      // obtenemos los datos de manera asíncrona
      const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product[]>>(
        "/products"
      );
  
      // usamos la mutación para poner isLoading = false
      commit("setisLoading", false);
  
      // usamos la mutación para volcar los datos obtenidos en la variable del state users
      commit("setProducts", data);
    },
    async fetchUserById({ commit }, userId: number) {
      // usamos la mutación para poner isLoading = true
      commit("setisLoading", true);
  
      // obtenemos los datos de manera asíncrona
      const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product>>(
        `/products/${userId}`
      );
  
      // usamos la mutación para poner isLoading = false
      commit("setisLoading", false);
  
      // usamos la mutación para volcar los datos obtenidos en la variable del state users
      commit("setselectedProduct", data);
    },
  };
  
  export default actions;