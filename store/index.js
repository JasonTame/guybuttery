import Config from '~/assets/config'
import axios from 'axios'

export const state = () => ({
  global: [],
  albums: [],
  homePage: [],
  socialLinks: [],
  tours: [],
  aboutPage: [],
  toursPage: [],
  contactPage: []
})

export const mutations = {
  setGlobalOptions(state, obj) {
    state.global = obj
  },
  setAlbums(state, list) {
    state.albums = list
  },
  setHomePage(state, obj) {
    state.homePage = obj
  },
  setSocialLinks(state, list) {
    state.socialLinks = list;
  },
  setTours(state, list) {
    state.tours = list
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
  async nuxtServerInit({ commit }) {
    // Fetch home page
    let homePage = '~/assets/content/home.json'
    await commit('setHomePage', homePage)

    // Fetch albums
    let albumList = await require.context(
      '~/assets/content/albums/',
      false,
      /\.json$/
    )
    let albums = albumList.keys().map(key => {
      let res = albumList(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setAlbums', albums)

    // Fetch social links
    let socialLinkList = await require.context(
      '~/assets/content/social-links', false, /\.json$/
    )
    let socialLinks = socialLinkList.keys().map(key => {
      let res = socialLinkList(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setSocialLinks', socialLinks)

    // Fetch tours
    let tourList = await require.context(
      '~/assets/content/tours/',
      false,
      /\.json$/
    )
    let tours = tourList.keys().map(key => {
      let res = tourList(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setTours', tours)

    // Get all the global ACF options
    return axios
      .get(Config.wpDomain + Config.api.global)
      .then(res => commit('setGlobalOptions', res.data))
  }
}
