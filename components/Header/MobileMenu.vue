<template>
  <div class="mobile-nav">
    <div
      :class="{ 'menu-open': open }"
      class="menu hidden"
    >
      <v-list
        dense
        tag="nav"
      >
        <v-list-item
          href="#aktualnosci"
          link
          :style="{ animationDuration: 4 * 0.15 + 's' }"
        >
          <v-list-item-content>
            <v-list-item-title class="menu-list">
                Aktualności
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          href="#statystyki"
          link
          :style="{ animationDuration: 4 * 0.15 + 's' }"
        >
          <v-list-item-content>
            <v-list-item-title class="menu-list">
                Statystyki
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          href="#o-adasiu"
          link
          :style="{ animationDuration: 4 * 0.15 + 's' }"
        >
          <v-list-item-content>
            <v-list-item-title class="menu-list">
                O Adasiu
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './header-style';
</style>

<script>

export default {
  data() {
    return {
    }
  },
  props: {
    open: {
      type: Boolean,
      default: false
    }
  }
}
</script>
