export const state = () => ({
  homePage: [],
  aboutPage: [],
  toursPage: [],
  contactPage: []
})

export const mutations = {
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
