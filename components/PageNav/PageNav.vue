<template>
  <div
    v-scroll="handleScroll"
    :class="{ show: show }"
    class="page-nav"
  >
    <nav class="section-nav">
      <scrollactive
        :offset="navOffset"
        active-class="active"
        tag="section"
      >
        <a
          v-for="(item, index) in menuList"
          :key="index"
          :style="{ top: 50 * (menuList.length - item.id) + 'px' }"
          :href="item.url"
          class="anchor-link scrollactive-item"
          @click="setOffset(item.offset)"
        >
          <v-tooltip
            :nudge-top="23"
            :left="!isRtl"
            :right="isRtl"
          >
            <template v-slot:activator="{ on }">
              <span v-on="on">{{ item.name }}</span>
            </template>
            <span class="tooltip">{{ item.name }}</span>
          </v-tooltip>
        </a>
      </scrollactive>
    </nav>
    <v-tooltip
      :nudge-top="25"
      :left="!isRtl"
      :right="isRtl"
    >
      <template v-slot:activator="{ on }">
        <scrollactive
          tag="div"
        >
          <v-btn
            fab
            color="secondary"
            class="fab anchor-link scrollactive-item"
            href="#home"
            v-on="on"
          >
            <v-icon dark class="icon">mdi-arrow-up</v-icon>
          </v-btn>
        </scrollactive>
      </template>
      <span class="tooltip">To Top</span>
    </v-tooltip>
  </div>
</template>

<style scoped lang="scss">
@import './pagenav-style';
</style>

<script>

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
  data: () => ({
    navOffset: 20,
    isRtl: false,
    show: false,
    menuList: [
      createData('Aktualności', '#aktualnosci'),
      createData('Statystyki', '#statystyki'),
      createData('O Adasiu', '#o-adasiu')
    ]
  }),
  mounted() {
    if (this.$vuetify.rtl) {
      this.isRtl = true
    }
  },
  methods: {
    handleScroll: function() {
      if (window.scrollY > 500) {
        return (this.show = true)
      }
      return (this.show = false)
    },
    setOffset: function(offset) {
      this.navOffset = offset
    }
  }
}
</script>
