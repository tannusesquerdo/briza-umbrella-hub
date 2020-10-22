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
      <Toolbar @on-close="closeDialog" />
      
        <carousel :per-page="1" :navigate-to="newPage" :adjustable-height="true" :pagination-enabled="false" :mouse-drag="false" :touch-drag="false">
          <slide>
            <div class="slide-item d-flex justify-center align-center flex-grow-1 overflow-hidden">
              <GettingStarted @btn-click="goToPage" />
            </div>
          </slide>
          <slide>
            <div class="slide-item d-flex justify-center align-center flex-grow-1 overflow-hidden">
              <Form @btn-click="goToPage" />
            </div>
          </slide>
          <slide>
            <div class="slide-item d-flex justify-center align-center flex-grow-1 overflow-hidden">
              <Quotes @btn-click="goToPage" />
            </div>
          </slide>
          <!-- <slide data-index="2">
            <div>
            <Payment />
            </div>
          </slide> -->
          <slide>
            <div class="slide-item d-flex justify-center align-center flex-grow-1 overflow-hidden">
              <Success />
            </div>
          </slide>
        </carousel>

    </v-card>
  </v-dialog>
</template>

<script>
  import Toolbar from './Form/Toolbar';
  import { Carousel, Slide } from 'vue-carousel';
  import Form from './Form/Form';
  import GettingStarted from './Form/GettingStarted';
  import Quotes from './Form/Quotes';
  // import Payment from './Form/Payment';
  import Success from './Form/Success';

  export default {
    name: 'FormDialog',

    components: {
      Toolbar,
      Carousel,
      Slide,
      GettingStarted,
      Form,
      Quotes,
      // Payment,
      Success,
    },

    data: () => ({
      dialog: false,
      newPage: 0,
    }),

    mounted() {
      
    },

    methods: {
      closeDialog() {
        this.dialog = false;
      },
      goToPage(val) {
        this.newPage = val
      } 
    }
  }
</script>

<style lang="scss" scoped>
  
  .VueCarousel-slide {
    position: relative;
  }
  .slide-item {
    min-height: calc(100vh - 48px);
  }
</style>