'use strict'

const apiEndpoint = 'q1avj.wpdevsite.co' 

export default {
  appTitleShort: 'Guy Buttery',
  appTitle: 'Guy Buttery',
  appTitleShort: 'guy-buttery',
  appDescription: 'Guy Buttery website',
  appThemeColor: '#ffffff ',
  appBgColor: '#4a4a4a ',
//   appIcon: 'assets/icon.png',
  // these are the rest api endpoints and your wordpress url 
  client: `https://${apiEndpoint}`, 
  wpDomain: `https://${apiEndpoint}/wp-json`,
  url: 'https://goofy-gates-b5b016.netlify.com', // your website url
//   loadDbName: '[starter_wp]', // db name if needed
  api: {
    global: '/acf/v3/options/options',
    homePage: '/wp/v2/pages/10',
    aboutPage: '/wp/v2/pages/5',
    toursPage: '/wp/v2/pages/12',
    contactPage: '/wp/v2/pages/14'
    // this url will hit an endpoint for contact form 7 plugin
    // postFormContact: '/contact-form-7/v1/contact-forms/[form_id]/feedback' // change {form_id} with the contact form 7 id provided
  }
}