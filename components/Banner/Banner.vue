<template>
  <div class="hero-content">
    <v-container :class="{ 'fixed-width': isDesktop }">
      <v-row class="banner-wrap">
        <v-col class="px-6" cols="12" lg="6" md="7">
          <div class="banner-text">
            <div class="title">
              <h3 class="use-text-title">
                Cześć!
              </h3>
            </div>
            <h5 class="subtitle mr-0 pr-0">
              Nazywam się <b>Ada,</b> i mam
              <span v-if="age < 2">
                prawie dwa lata
              </span>
              <span v-else-if="age < 3">
                niedawno skończyłem 2 lata
              </span>
              <br />
              Chcesz mi pomóc nie odrywając rąk od klawiatury?
              <br />
              <br />
              <b>Przelej pieniądze na naszą fundację!</b>
              <br />
              <br />
              Dziękujemy za wsparcie!
            </h5>
          </div>
        </v-col>
        <v-col
          v-if="isTablet"
          lg="6"
          cols="12"
          class="md-5 pa-6 deco-grid"
        >
          <div class="deco-banner">
            <div class="artwork-bg">
              <div class="oval"></div>
              EWQE
              <div class="parallax-scene back" v-if="loaded">
                <kinesis-container
                   :duration="1500"
                   easing="cubic-bezier(0.23, 1, 0.32, 1)"
                >
                  <kinesis-element
                    :strength="30"
                    type="translate"
                    tag="div"
                  >
                    <span class="icon-three" />
                  </kinesis-element>
                  <kinesis-element
                    :strength="20"
                    type="translate"
                    tag="div"
                  >
                    <span class="icon-four" />
                  </kinesis-element>
                </kinesis-container>
              </div>
              <img src="/images/education/banner-artwork.png" alt="artwork" />
              <div class="parallax-scene front" v-if="loaded">
                <kinesis-container
                   :duration="1500"
                   easing="cubic-bezier(0.23, 1, 0.32, 1)"
                >
                  <kinesis-element
                    :strength="10"
                    type="translate"
                    tag="div"
                  >
                    <span class="icon-two" />
                  </kinesis-element>
                  <kinesis-element
                    :strength="15"
                    type="translate"
                    tag="div"
                  >
                    <span class="icon-one" />
                  </kinesis-element>
                </kinesis-container>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div id="watched_counter" />
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';
</style>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

export default {
  components: {
    KinesisContainer,
    KinesisElement
  },
  data() {
    return {
      loaded: false,
      age: null
    }
  },
  mounted() {
    this.loaded = true;

    this.age = 2020 - new Date().getFullYear(); // todo needs completing
  },
  computed: {
    isDesktop() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    },
    isTablet() {
      const smUp = this.$store.state.breakpoints.smUp
      return smUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
