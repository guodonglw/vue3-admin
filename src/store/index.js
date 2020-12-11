import { createStore } from 'vuex'

const state = {
  fold: false
}

const mutations = {
  UPDATE_FOLD: (state) => {
    state.fold = !state.fold
  }
}

const actions = {
  UpdateFold: (ctx) => {
    ctx.commit('UPDATE_FOLD')
  }
}

const store = createStore({
  state,
  mutations,
  actions
})

export default store