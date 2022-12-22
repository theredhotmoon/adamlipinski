<template>
  <div class="root">
    <v-container class="max-md">
      <title-main
        :head="$t('foundingResults.title')"
        :desc="$t('foundingResults.description')"
        align="center"
        color="primary"
      />
      <v-row class="spacing8 grid">
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
            </figure>
            <div class="text" v-if="loaded">
              <h4 class="use-text-title">
                +<span
                v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: totalIncome,
                    options: { duration: 1 }
                  }"
              /><span style="font-size: 16px; padding-left:10px">PLN</span>
              </h4>
              <h6 class="use-text-subtitle2">
                zebraliśmy
              </h6>
            </div>
          </div>
        </v-col>
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
            </figure>
            <div class="text" v-if="loaded">
              <h4 class="use-text-title">
                +<span
                v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: totalOutcome,
                    options: { duration: 1 }
                  }"
              /><span style="font-size: 16px; padding-left:10px">PLN</span>
              </h4>
              <h6 class="use-text-subtitle2">
                wydaliśmy
              </h6>
            </div>
          </div>
        </v-col>
        <v-col sm="6" class="px-8" offset="3">
          <div class="counter-item">
            <figure>
            </figure>
            <div class="text" v-if="loaded">
              <h4 class="use-text-title">
                <span
                v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: totalPeople,
                    options: { duration: 2 }
                  }"
              />
              </h4>
              <h6 class="use-text-subtitle2">
                ludzi nas wsparło
              </h6>
            </div>
          </div>
        </v-col>
<!--        <v-col sm="6" class="px-8">-->
<!--          <div class="counter-item">-->
<!--            <figure>-->
<!--            </figure>-->
<!--            <div class="text" v-if="loaded">-->
<!--              <h4 class="use-text-title">2</h4>-->
<!--              <h6 class="use-text-subtitle2">-->
<!--                Tu coś tkliwego-->
<!--              </h6>-->
<!--            </div>-->
<!--          </div>-->
<!--        </v-col>-->
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'feature-style.scss';
</style>

<script>
import Title from '../Title'


export default {
  components: {
    'title-main': Title
  },
  data() {
    return {
      loaded: false,
      totalIncome: 0,
      totalPeople: 0,
      totalOutcome: 0
    }
  },
  mounted() {
    this.loaded = true;
    this.retrieveCalculations();
  },
  methods: {
    retrieveCalculations() {
      this.$axios.get('http://localhost:1337/api/calculations', {
        headers: {
          Authorization:
            'Bearer 080ac7486da1e72c71024691c31c7730aeb5d3f9591e176e0ff8e1ba88e28bc130477d007eb9929caffe1d4df71f9885d442638c1cf41eda590748b835fa744240bbbf1b172108ef7df36ead025ec057b579bf6b3d01ad0fc7e3fdfd8ad562d94003d3c1675c60379684a24728fbc7b9ba465c859afc564c817b88bb2cf564a7'
        },
      }).then(response => {
        // this.posts = response.data.data ;
        this.totalIncome = response.data.data[0]['attributes']['totalIncome'];
        this.totalOutcome = response.data.data[0]['attributes']['totalOutcome'];
        this.totalPeople = response.data.data[0]['attributes']['totalPeople'];
        console.log(response);
      });

    }
  }
}
</script>
