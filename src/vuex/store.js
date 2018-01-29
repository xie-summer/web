/*状态存取，目前写在一起，后期分开写*/

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    username:null
}

const actions = {
    saveName({commit},msg){
        commit('saveMsg',msg)
    }
}

const mutations = {
    saveMsg (state,msg) {
        state.username = msg
    },
}

const getters = {
}


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
