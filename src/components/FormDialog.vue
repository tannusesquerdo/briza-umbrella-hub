<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        Open Dialog
      </v-btn>
    </template>
    <v-card class="d-flex flex-column">
      <Toolbar @onClose="closeDialog" />

      <div class="d-flex justify-center align-center flex-grow-1">
        <!-- <GettingStarted /> -->
        <!-- <Quotes /> -->
        <!-- <Success /> -->
        <Payment />
      </div>

    </v-card>
  </v-dialog>
</template>

<script>
  import Toolbar from './Form/Toolbar';
  import GettingStarted from './Form/GettingStarted';
  import Quotes from './Form/Quotes';
  import Success from './Form/Success';
  import Payment from './Form/Payment';

  export default {
    name: 'FormDialog',

    components: {
      Toolbar,
      GettingStarted,
      Quotes,
      Payment,
      Success
    },

    data: () => ({
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    }),

    methods: {
      closeDialog() {
        this.dialog = false;
      }
    }
  }
</script>