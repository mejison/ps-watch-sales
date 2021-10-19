import { createStore } from 'vuex'
import api from '@/api'

export default createStore({
  state: {
    games: [],
  },
  getters: {
    games: state => state.games,
  },
  mutations: {
    setGames(state, data) {
      state.games = data;
    },
  },
  actions: {
    getAllGames({ commit }, params) {
      return api.getAllGames(params).then(({ data }) => {
        console.log(data)
        commit('setGames', data.categoryGridRetrieve.products);
      });
    }
  },
  modules: {
  }
})
