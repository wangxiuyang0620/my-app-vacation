import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    setState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
   async getList({ commit }) {
      const { $http } = Vue.prototype;
      let res = await $http('get', '/list')
      if (res.data.code === 200) {
        commit({ type: "setState", key: 'list', value: res.data.data })

      }

    }
  },
   
modules: {
}
})
