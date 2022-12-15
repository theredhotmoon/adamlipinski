<template>
  <v-snackbar
    :timeout="-1"
    v-model="snackbar"
    class="notification"
  >
    <div class="action text-center">
      Serwis internetowy www.adaslipinski.pl wykorzystuje pliki cookies, które umożliwiają i ułatwiają korzystanie z jego zasobów.
      <br />
      Korzystając z serwisu wyrażasz jednocześnie zgodę na wykorzystanie plików cookies.
      <br />
      Szczegółowe informacje znajdziesz w zakładce Polityka Prywatności.
<!--      {{ $t('common.notif_msg') }}-->
    </div>
    <v-btn
      color="secondary"
      class="button"
      @click="snackbar = false"
    >
      Zgadzam się
    </v-btn>
  </v-snackbar>
</template>

<style lang="scss" scoped>
@import './notification-style.scss';
</style>

<script>
export default {
  data() {
    return {
      snackbar: true
    }
  }
}
</script>
