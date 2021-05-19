import { startCase } from "lodash";

const SideNavigation = {
    namespaced: true,

    state:{
        right:{},
        left:{},
    },

    getters:{

    },

    mutations:{
        SET_RIGHT: (state, payload) => state.right = payload,

        SET_LEFT: (state, payload) => state.left = payload,
    },

    actions:{
        setRightNavigation({commit}, payload){
            commit('SET_RIGHT', payload);
        },
        setLeftNavigation({commit}, payload){
            commit('SET_LEFT', payload);
        },

    }

};

export default SideNavigation;