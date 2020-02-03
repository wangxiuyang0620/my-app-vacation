import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    itemlist: []
  },
  mutations: {
    setState(state, payload) {
      state[payload.key] = payload.value
    },
    changeitemlist(state, options) {
      state.itemlist = [...options]
    }
  },
  actions: {
    async getList({ commit }) {
      const { $http } = Vue.prototype;
      let res = await $http('get', '/list')
      if (res.data.code === 200) {
        commit({ type: "setState", key: 'list', value: res.data.data })

      }

    },
    async getItemlist(store, options) {
      const { $http } = Vue.prototype;
      let res = await $http('post', '/itemlist', options)
      if (res.data.code == 200) {
        store.commit('changeitemlist', res.data.data)
        return
      }
    }
    
  },

  modules: {
  }
})
