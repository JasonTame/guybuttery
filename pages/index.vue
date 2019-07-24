<template>
  <div class="has-background-grey-darker has-text-white">
    <!-- Home Banner -->
    <hero image="guybuttery_1.jpg" title="Guy Buttery" />

    <div class="section has-background-white has-text-dark is-medium">
      <div class="container">
        <h1 class="section-title has-text-centered">About Guy</h1>
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

    <div class="section is-medium has-text-centered">
      <h1 class="section-title has-text-white has-text-centered">Upcoming shows & tours</h1>
      <TourList :tours="tours" />
      <a href="/tours" class="tour-cta button is-primary is-large">View more tours and shows</a>
    </div>

    <div class="section has-background-white has-text-dark is-medium">
      <NewsList :news="news" />
    </div>
    <!-- <InstaFeed /> -->
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import InstaFeed from '@/components/InstaFeed.vue'
import TourList from '@/components/TourList.vue'
import NewsList from '@/components/NewsList.vue'

export default {
  components: {
    Hero,
    InstaFeed,
    TourList,
    NewsList
  },
  computed: {
    tours() {
      return this.$store.state.tours.subset
    },
    news() {
      return this.$store.state.news.subset
    }
  }
}
</script>

<style lang="scss" scoped>
.cta-btn {
  margin: 1rem 0;
}

.tour-cta {
  margin-top: 3rem;
}
</style>
