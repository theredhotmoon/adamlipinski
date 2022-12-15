<template>
  <div class="root">
    <v-container class="fixed-width">
      <u-animate-container>
        <v-row>
          <v-col md="3" cols="12" class="illu-wrap">
            <hidden point="smDown">
              <div class="illustration one" />
              <figure class="illustration two">
                <img src="/images/adas-lipinski-01.jpg" alt="Adam Lipiński" />
              </figure>
              <figure class="illustration three">
                <img src="/images/adas-lipinski-02.jpg" alt="Adam Lipiński" />
              </figure>
              <figure class="illustration four">
                <img src="/images/adas-lipinski-03.jpg" alt="Adam Lipiński" />
              </figure>
              <div class="illustration five" />
            </hidden>
          </v-col>
          <v-col md="9" cols="12">
            <u-animate
              :offset="-100"
              delay="0.2s"
              name="fadeInRight"
              duration="0.6s"
            >
              <div>
                <div class="title-about">
                  <h3 class="use-text-title">
                    <span>O Adasiu</span>
                  </h3>
                </div>
                <p class="use-text.paragraph">
                  Adaś jest wcześniakiem, urodzonym w 31 tygodniu ciąży. Na świat przyszedł 02.06.2021.
                  <br />

                  Na skutek niedotlenienia oraz niedokrwienia doszło do leukomalacji okołokomorowej.
                  <br />

                  Adaś ma diagnozowane czterokończynowe porażenie mózgowe i tylko ciągła rehabilitacja może pomóc mu w rozwoju.
                  <br />
                </p>
              </div>

            </u-animate>
          </v-col>
        </v-row>
       </u-animate-container>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './about-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import link from '~/static/text/link'
import Hidden from '../Hidden'

export default {
  components: {
    Hidden
  },
  data: () => ({
    imgAPI: imgAPI,
    link: link
  })
}
</script>
