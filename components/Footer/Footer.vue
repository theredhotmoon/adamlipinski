<template>
  <footer class="footer">


    <v-container class="max-lg">
      <v-row class="spacing4">
        <v-col
          class="py-0 px-4"
          md="2"
          cols="12"
        >
<!--          <div class="logo">-->
<!--&lt;!&ndash;            <img&ndash;&gt;-->
<!--&lt;!&ndash;              :src="logo"&ndash;&gt;-->
<!--&lt;!&ndash;              alt="logo"&ndash;&gt;-->
<!--&lt;!&ndash;            >&ndash;&gt;-->
<!--            <h6 class="title">-->
<!--              AdaśLipiński.pl-->
<!--            </h6>-->
<!--          </div>-->
<!--          <p class="footer-desc pb-2">-->
<!--            Copyright © 2012-->
<!--          </p>-->
<!--          <p class="body-2" v-if="isDesktop">-->
<!--            &copy;&nbsp;-->
<!--            {{ brand.education.footerText }}-->
<!--          </p>-->
        </v-col>
        <v-col
          class="py-0 px-6"
          md="8"
          cols="12"
        >
          <v-expansion-panels v-if="isMobile" class="accordion-root">
            <v-expansion-panel
              v-for="(footer, index) in footers"
              :key="index"
              class="accordion-content"
            >
              <v-expansion-panel-header>
                <h6 class="title-main mb-4">
                  {{ footer.title }}
                </h6>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <ul>
                  <li
                    v-for="(item, index) in footer.description"
                    :key="index"
                  >
                    <nuxt-link :to="footer.link[index]">
                      {{ item }}
                    </nuxt-link>
                  </li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-row justify="space-around" v-if="isDesktop">
            <v-col
              v-for="(footer, index) in footers"
              :key="index"
              sm="3"
              cols="12"
              class="pa-4 px-md-0 site-map-item"
            >
              <h6 class="title-nav">
                {{ footer.title }}
              </h6>
              <ul>
                <li
                  v-for="(item, index) in footer.description"
                  :key="index"
                >
                  <a :href="footer.link[index]" target="_blank">
                    {{ item }}
                  </a>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          md="2"
          cols="12"
          class="py-0 px-4"
        >
<!--          <div class="socmed">-->
<!--            <v-btn-->
<!--              text-->
<!--              icon-->
<!--              class="button"-->
<!--            >-->
<!--              <span class="ion-logo-twitter  icon" />-->
<!--            </v-btn>-->
<!--            <v-btn-->
<!--              text-->
<!--              icon-->
<!--              class="button"-->
<!--            >-->
<!--              <span class="ion-logo-facebook icon" />-->
<!--            </v-btn>-->
<!--            <v-btn-->
<!--              text-->
<!--              icon-->
<!--              class="button"-->
<!--            >-->
<!--              <span class="ion-logo-instagram icon" />-->
<!--            </v-btn>-->
<!--            <v-btn-->
<!--              text-->
<!--              icon-->
<!--              class="button"-->
<!--            >-->
<!--              <span class="ion-logo-linkedin icon" />-->
<!--            </v-btn>-->
<!--          </div>-->
<!--          <v-select-->
<!--            :items="langList"-->
<!--            :value="lang"-->
<!--            v-model="lang"-->
<!--            label=""-->
<!--            outlined-->
<!--            class="select-lang"-->
<!--            prepend-inner-icon="mdi-web"-->
<!--            @change="switchLang(lang)"-->
<!--          />-->
        </v-col>
      </v-row>
      <p class="body-2 text-center" v-if="isMobile">
        &copy;&nbsp;
        {{ brand.education.footerText }}
      </p>
    </v-container>
  </footer>
</template>

<style scoped lang="scss">
@import './footer-style';
</style>

<script>
import logo from '~/static/images/education-logo.svg'
import brand from '~/static/text/brand'

export default {
  data: () => ({
    supporters: [],
    logo: logo,
    brand: brand,
    lang: 'en',
    footers: [
      {
        title: 'Pomagają nam',
        description: ['I love rolki', 'Hedonskate', 'Intruz'],
        link: ['https://iloverolki.pl/', 'https://hedonskate.com/', 'https://intruz.com/']
      },
      {
        title: 'Social media',
        description: [
          'Instagram',
        ],
        link: [
          '#resource',
          '#resource-name',
          '#another-resource',
          '#final-resource'
        ]
      },
      {
        title: 'O nas',
        description: ['Polityka prywatnośći'],
        link: ['#privacy-policy']
      }
    ]
  }),
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
    langList: function() {
      const list = []
      console.log('this.$i18n.locales', this.$i18n.locales);
      this.$i18n.locales.map(item => {
        list.push({ text: this.$t('common.' + item.code), value: item.code })
      })
      return list
    }
  },
  mounted() {
    // todo ustawić zawsze PL
    this.lang = this.$i18n.locale;
    this.retrieveFooterContent();
  },
  methods: {
    retrieveFooterContent() {
      this.$axios.get('http://localhost:1337/api/supporters', {
        headers: {
          Authorization:
            'Bearer 080ac7486da1e72c71024691c31c7730aeb5d3f9591e176e0ff8e1ba88e28bc130477d007eb9929caffe1d4df71f9885d442638c1cf41eda590748b835fa744240bbbf1b172108ef7df36ead025ec057b579bf6b3d01ad0fc7e3fdfd8ad562d94003d3c1675c60379684a24728fbc7b9ba465c859afc564c817b88bb2cf564a7'
        },
      }).then(response => {
        const supporters = response.data.data ;
        this.footers[0]['supporters'] = supporters
        this.loaded = true;
      });

    },

    switchLang: function(val) {
      this.$i18n.setLocale(val)
    }
  }
}
</script>
