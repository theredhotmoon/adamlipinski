<template>
  <fragment>
    <v-navigation-drawer
      v-if="isMobile"
      v-model="openDrawer"
      fixed
      temporary
      class="mobile-nav"
    >
      <mobile-menu :open="openDrawer" />
    </v-navigation-drawer>
    <v-app-bar
      v-scroll="handleScroll"
      id="header"
      :class="{ fixed: fixed, 'open-drawer': openDrawer }"
      class="header"
      fixed
      app
    >
      <v-container :class="{ 'fixed-width': mdUp }">
        <div class="header-content">
          <nav
            :class="{ invert: invert }"
            class="nav-logo"
          >
            <v-btn
              v-if="isMobile"
              :class="{ 'is-active': openDrawer }"
              class="hamburger hamburger--spin mobile-menu"
              text
              icon
              @click.stop="handleToggleOpen"
            >
              <span class="hamburger-box">
                <span class="bar hamburger-inner" />
              </span>
            </v-btn>
            <div class="logo">
              <nuxt-link
                v-if="invert"
                :to="link.education.home"
              >
                <img
                  :src="logo"
                  alt="logo"
                >
                <span>
                  Adam Lipiński
                </span>
              </nuxt-link>
              <scrollactive
                v-if="!invert && loaded"
                tag="span"
              >
                <a
                  href="#home"
                  class="anchor-link scrollactive-item"
                >
                  <img
                    :src="logo"
                    alt="logo"
                  >
                  <span>
                  Adam Lipiński
                  </span>
                </a>
              </scrollactive>
            </div>
          </nav>
          <nav
            :class="{ invert: invert }"
            class="nav-menu"
          >
            <div v-if="isDesktop">
              <scrollactive
                v-if="loaded"
                :offset="navOffset"
                active-class="active"
                tag="ul"
              >
                <li
                  v-for="(item, index) in menuList"
                  :key="index"
                >
                  <v-btn
                    v-if="invert"
                    :href="'/' + item.url"
                    text
                  >
                    <span class="text">
                      {{ item.name }}
                    </span>
                  </v-btn>
                  <v-btn
                    v-else
                    :href="item.url"
                    class="anchor-link scrollactive-item"
                    text
                    @click="setOffset(item.offset)"
                  >
                    <span class="text">
                      {{ item.name }}
                    </span>
                  </v-btn>
                </li>
<!--                <li>-->
<!--                  <v-btn-->
<!--                    :href="link.education.contact"-->
<!--                    text-->
<!--                  >-->
<!--                    <span class="text">-->
<!--                      {{ $t('educationLanding.header_contact') }}-->
<!--                    </span>-->
<!--                  </v-btn>-->
<!--                </li>-->
              </scrollactive>
            </div>
          </nav>
          <nav class="nav-menu nav-auth">
            <hidden point="xsDown">
              <div class="deco" />
<!--              <v-btn :href="link.education.login" class="text-btn" text>-->
<!--                {{ $t('educationLanding.header_login') }}-->
<!--              </v-btn>-->
              <support-us-modal></support-us-modal>
<!--              <v-btn :href="link.education.register" class="button white">-->
<!--                WSPOMÓŻ NASZĄ FUNDACJĘ-->
<!--&lt;!&ndash;                {{ $t('educationLanding.header_register') }}&ndash;&gt;-->
<!--              </v-btn>-->
            </hidden>
<!--            <setting-menu :invert="invert" />-->
          </nav>
        </div>
      </v-container>
    </v-app-bar>
  </fragment>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import logo from '~/static/images/adas-lipinski-logo.png'
import link from '~/static/text/link'
import brand from '~/static/text/brand'
import navMenu from './menu'
import Settings from './Settings'
import MobileMenu from './MobileMenu'
import Hidden from '../Hidden'
import SupportUsModal from "../supportUs.modal";

let counter = 0
function createData(name, url, offset) {
  counter += 1
  return {
    id: counter,
    name,
    url,
    offset
  }
}

export default {
  components: {
    SupportUsModal,
    'setting-menu': Settings,
    MobileMenu,
    Hidden
  },
  props: {
    invert: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menuItemsCounter: 0,
      logo: logo,
      link: link,
      loaded: false,
      brand: brand,
      section: 0,
      fixed: false,
      openDrawer: null,
      navOffset: 20,
      menuList: [
        this.buildMenuItem('Aktualności', '#aktualnosci'),
        this.buildMenuItem('O Adasiu', '#o-adasiu'),
        // this.buildMenuItem('Rozliczenia', '#rozliczenia'),
        // this.buildMenuItem('Kontakt', '#kontakt'),
      ]
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    buildMenuItem(name, url) {
      this.menuItemsCounter++;

      return {
        id: this.menuItemsCounter,
        name,
        url
      }
    },
    handleScroll: function() {
      if (window.scrollY > 80) {
        return (this.fixed = true)
      }
      return (this.fixed = false)
    },
    setOffset: function(offset) {
      this.navOffset = offset
    },
    handleToggleOpen: function() {
      console.log(this.openDrawer)
      this.openDrawer = !this.openDrawer
    }
  },
  computed: {
    isMobile() {
      const mdDown = this.$store.state.breakpoints.mdDown
      return mdDown.indexOf(this.$mq) > -1
    },
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
    mdUp() {
      return this.$mq === 'md' || this.$mq === 'lg' || this.$mq === 'xl'
    }
  }
}
</script>
