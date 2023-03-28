import { createStore } from 'vuex';

export default createStore({
  state: {
    infoPokemons: '',
    getPokemon: '',
    listTasksVuex: [],
  },
  getters: {
    getPokeImgFront: (state) => state.getPokemon.data.sprites.front_default,
    getPokeImgBack: (state) => state.getPokemon.data.sprites.back_default,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
