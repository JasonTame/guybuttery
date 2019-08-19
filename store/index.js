import Config from '~/assets/config'
import axios from 'axios'


export const state = () => ({
  global: [],
  homePage: [],
  aboutPage: [],
  toursPage: [],
  contactPage: []
})

export const mutations = {
  setGlobalOptions(state, obj) {
    state.global = obj
  },
  setHomePage(state, obj) {
    state.homePage = obj
  },
  setAboutPage(state, obj) {
    state.aboutPage = obj
  },
  setToursPage(state, obj) {
    state.toursPage = obj
  },
  setContactPage(state, obj) {
    state.contactPage = obj
  }
}

export const actions = {
  nuxtServerInit({ commit }) {
    // Get all the global ACF options
    return axios.get(Config.wpDomain + Config.api.global)
        .then(res => commit('setGlobalOptions', res.data))
  }
}