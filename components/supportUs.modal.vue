<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="720"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="button white"
        v-bind="attrs"
        v-on="on"
      >
        WSPOMÓŻ NASZĄ FUNDACJĘ
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h5">
        Przekaż 1,5 % z podatku rozliczenia rocznego
      </v-card-title>
      <v-card-text>
        Fundacja Pomocy Osobom Niepełnosprawnym Słoneczko <b>nr KRS 0000186434</b>
        <br />

        w rubryce cel szczegółowy wpisując: <b>Adam Lipiński 433/L</b>
      </v-card-text>

      <v-card-title class="text-h5">
        Przekaż darowiznę na subkonto podopiecznego w Fundacji
      </v-card-title>
      <v-card-text>
        PLN: 89 8944 0003 0000 2088 2000 0010
        <br />
        EURO:76 8944 0003 0000 2088 2000 0050
        <br />
        USD: 76 8944 0003 0000 2088 2000 0060
        <br />
        <br />
        W tytule przelewu: <b>Adam Lipiński 433/L</b>

        </v-card-text>

      <v-card-text>
        Pracujemy nad uruchomieniem przelewów online, prosimy o odrobinę cierpliwości :)
        </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          text
          block
          @click="dialog = false"
        >
          OK!
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script>
export default {
  name: "supportUsModal",
  data: () => ({
    dialog: false,
  })
}
</script>

<style scoped>

</style>
