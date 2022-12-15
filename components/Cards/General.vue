<template>
  <v-card class="general-card">
    <figure>
      <img :src="img" :alt="title" />
    </figure>
    <div class="desc">
      <h6 class="title pb-2" style="overflow: hidden">{{ title }}</h6>
      <p class="use-text-paragraph">
        {{ desc }}
      </p>
<!--      <div class="property">-->
<!--        <div class="rating">-->
<!--          <v-icon-->
<!--            v-for="index in rating"-->
<!--            :key="index"-->
<!--            class="star-icon"-->
<!--          >-->
<!--            mdi-star-->
<!--          </v-icon>  -->
<!--        </div>-->
<!--        <strong>${{ price }}</strong>-->
<!--      </div>-->
      <v-btn href="#" block class="button" outlined color="primary">
        Czytaj
      </v-btn>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import './card-style';
</style>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    // rating: {
    //   type: Number,
    //   default: 0
    // },
    // price: {
    //   type: Number,
    //   required: true
    // }
  }
}
</script>
