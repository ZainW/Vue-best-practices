import userApi from '../api/userApi'
export default {
  namespaced: true,

  state: {
    user: null
  },

  getters: {
    user: state => state.user
  },

  actions: {
    async fetchUser ({ commit }, userId) {
      const user = await userApi.fetchUser(userId)
      commit('SET_USER', user)
    },

    clearUser ({ commit }) {
      commit('CLEAR_USER')
    }
  },

  mutations: {
    SET_USER (state, user) {
      state.user = user
    },

    CLEAR_USER (state) {
      state.user = null
    }
  }
}
