import Vue from 'vue'
import Vuex from 'vuex'
import Index from './modules/index'
import Page from './modules/Page'
import locations from './modules/locations'
import SideNavigation from './modules/SideNavigation'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    SideNavigation,
    locations,
    Index,
    Page
  },
})
