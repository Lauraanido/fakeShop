import { Module } from "vuex";
import state, { IsProductState } from "./state";
import getters from "./getter";
import mutations from "./mutations";
import actions from "./actions";
import { iState } from "..";

const productsModule: Module<IsProductState, iState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
