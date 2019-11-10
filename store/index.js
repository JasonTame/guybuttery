export const state = () => ({
  albums: [],
  homePage: [],
  socialLinks: [],
  tours: [],
})

export const mutations = {
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
  }
}
