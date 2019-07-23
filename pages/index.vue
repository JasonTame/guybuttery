<template>
  <div>
    <!-- Home Banner -->
    <hero image="guybuttery_1.jpg" title="Guy Buttery" />

    <div class="section is-medium">
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <p>“Guy Buttery is something of a National treasure”, says South Africa’s leading newspaper The Mercury. As an internationally recognised musician, this multi-instrumentalist enjoys invitations to play sell-out performances all over the globe. The USA, UK, Australia, France, Brazil, and Italy have all welcomed him back year after year.</p>
            <br />
            <p>However, to simply label Guy Buttery as one of South Africa’s musical phenoms would be an injustice. His international role has surpassed merely performing concerts to foreign audiences. It has evolved into one as an ambassador of South African music, inspiring people across the world with his homegrown style at the very heart of his talent and tenacity. Guy’s distinct unification of South African guitar music is the musical advocate for everything positive and beautiful about the place he calls home.</p>
            <a href="/about" class="cta-btn button is-primary is-large">Read More</a>
          </div>
          <div class="column">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5c9f1e6dfb182014576de348/1554291888163-5AQJJPV9T6FUVGQGGKAL/ke17ZwdGBToddI8pDm48kApm4bZ6Mn3TiUWou3kA3bp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWZaykogqWzieOupsqeSuBYug-y5Ut2InYZT1FrJD3yL-rj95DA1mjJIBxXFGHkuyQ/small+Guy+Buttery+%C2%A9+Jacki+Bruniquel+%282%29.jpg?format=2500w"
              alt="About Guy image"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="section is-small has-text-centered">
      <TourList :tours="tours" />
      <a href="/tours" class="button is-primary is-large is-outlined">View more tours and shows</a>
    </div>

    <InstaFeed />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import InstaFeed from '~/components/InstaFeed.vue'
import TourList from '~/components/TourList.vue'

export default {
  components: {
    Hero,
    InstaFeed,
    TourList
  },
  computed: {
    tours() {
      return this.$store.state.tours.subset
    }
  }
}
</script>

<style>
.cta-btn {
  margin: 1rem 0;
}
</style>
