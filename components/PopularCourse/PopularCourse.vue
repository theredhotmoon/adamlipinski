<template>
  <div class="root">
    <div class="parallax-wrap">
      <dot-parallax />
    </div>
    <v-container>
      <div class="floating-title">
        <title-main
          :head="'Aktualności'"
          :desc="'Zobacz, co słychać u Adasia!'"
          :align="isMobile ? 'center' : 'left'"
          dark
          color="primary"
        />
      </div>
    </v-container>
    <div class="slider-wrap">
      <div class="carousel" v-if="loaded">
        <slick ref="slick" :options="slickOptions">
          <div class="props item-props-first">
            <div />
          </div>
          <div
            v-for="(item, index) in posts"
            :key="index"
            class="item"
          >
<!--            aa {{ item.attributes.Image.data[0]['attributes']['formats'] }}-->
            <general-card
              v-if="item && item.attributes && item.attributes.Image && item.attributes.Image.data[0] && item.attributes.Image.data[0]['attributes']['formats']"
              :img="'http://localhost:1337' + item.attributes.Image.data[0]['attributes']['formats']['thumbnail']['url']"
              :title="item.attributes.Title"
              :desc="item.attributes.Content"
            />
          </div>
          <div class="props item-props-last">
            <div />
          </div>
        </slick>
      </div>
      <v-btn
        icon
        fab
        class="nav prev"
        @click="prev()"
      >
        <i class="ion-ios-arrow-back" />
      </v-btn>
      <v-btn
        icon
        fab
        class="nav next"
        @click="next()"
      >
        <i class="ion-ios-arrow-forward" />
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './popular-course-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import GeneralCard from '../Cards/General'
import Title from '../Title'
import DotParallax from '../Parallax/Dot'

export default {
  components: {
    'title-main': Title,
    DotParallax,
    GeneralCard,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      posts: [],
      imgAPI: imgAPI,
      loaded: false,
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 4,
        arrows: false,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.retrieveBlogPosts();
    const props = window.innerWidth > 1400 ? 1 : 2 // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
    setTimeout(() => {
      if (this.$vuetify.rtl) {
        const lastSlide = Math.floor(
          this.posts.length + props - this.slickOptions.slidesToShow
        )
        this.$refs.slick.goTo(lastSlide)
      }
    }, 200)
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  },
  methods: {
    retrieveBlogPosts() {
      this.$axios.get('http://localhost:1337/api/posts?populate=*', {
        headers: {
          Authorization:
            'Bearer 080ac7486da1e72c71024691c31c7730aeb5d3f9591e176e0ff8e1ba88e28bc130477d007eb9929caffe1d4df71f9885d442638c1cf41eda590748b835fa744240bbbf1b172108ef7df36ead025ec057b579bf6b3d01ad0fc7e3fdfd8ad562d94003d3c1675c60379684a24728fbc7b9ba465c859afc564c817b88bb2cf564a7'
        },
      }).then(response => {
        this.posts = response.data.data ;
        this.loaded = true;
      });

    },
    next: function() {
      this.$refs.slick.next()
    },
    prev: function() {
      this.$refs.slick.prev()
    }
  }
}
</script>
