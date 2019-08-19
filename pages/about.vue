<template>
  <div>
    <Hero image="guybuttery_5.jpg" title="About" />
    <div class="section is-medium">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p>{{$store.state.aboutPage.acf.text}}</p>
          </div>
          <div class="column">
            <div class="about-video">
              <iframe
                width="100%"
                height="300px"
                src="https://www.youtube.com/embed/ib5fPlBR7rc"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <p>At the age of 18, Guy Buttery’s debut album was nominated for ‘Best Newcomer’ and ‘Best Instrumental’ at the South African Music Awards (SAMA’s) making him the youngest nominee in the history of the event. Guy then went on to collect two SAMA’s in 2010 and again in 2014. He has also received numerous other major National accolades including the Ovation Award for his live performances at the National Arts Festival, and has been honoured with more of these prestigious awards than any other artist.</p>
        <p>Guy was then invited to perform his works with the 52- piece KZN Philharmonic Orchestra, dubbed “Africa’s greatest ensemble” with his solo performance voted “Top Live Show” by The Cape Times and was selected by the public as one of South Africa’s Top Young Personalities by The Mail & Guardian. In 2018, Guy received the highest accolade for a musician in South Africa and was awarded the Standard Bank Young Artist Award. In almost four decades of honouring artists throughout the country, this was the first time since its inception that the award was presented to a musician outside of the classical realm.</p>
        <p>Buttery has worked with an incredible myriad of artists including Dave Matthews, Jethro Tull, Vusi Mahlasela, multiple Grammy Award Winner Will Ackerman, Salif Keita, Preston Reed, Kaki King, The Violent Femmes, Jon Gomm and countless others. The media has cited him “as one of the finest exponents of the acoustic guitar in the World.” Expect high dynamics, deep grooves, delicate African inflections and mind-bending guitar playing of an entirely new order.</p>
      </div>
      <Gallery />
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import Config from '~/assets/config'

import Hero from '~/components/Hero.vue'
import Gallery from '~/components/Gallery.vue'

export default {
  components: {
    Hero,
    Gallery
  },
  async fetch({ store, params }) {
    let { data } = await axios.get(Config.wpDomain + Config.api.aboutPage)
    store.commit('setAboutPage', data)
  }
}
</script>

<style scoped>
p {
  margin-top: 1rem !important;
}

.about-video {
  margin-top: 20px;
}

.about-video iframe {
  height: 300px;
}
</style>
