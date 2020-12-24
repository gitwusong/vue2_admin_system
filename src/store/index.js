import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import tags from './modules/tags'
import sceneStore from './modules/sceneStore'
import globalStore from './modules/globalStore'
export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        tags,
        sceneStore,
        globalStore
    },
    plugins:[],
    devtools:false
})
