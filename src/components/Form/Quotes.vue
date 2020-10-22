<template>
  <div class="step-main d-flex flex-column align-center">
    <Header icon="wind" title="Fast like the wind!" subtitle="We dove deep through the internet to get you these great quotes" />

    <v-col class=" text-center px-0 py-0" cols="10">
      <v-card
        class="my-8 mx-auto card d-flex align-center justify-space-between flex-grow-1 flex-column py-9"
        max-width="344"
        outlined
      >
        <div class="card--header px-9">
          <div>
          <v-img
            :src="require('../../assets/progressive-logo.svg')"
            contain
          />
          </div>
          <div class="mt-4 card--stars">
            <v-img
              :src="require('../../assets/icons/stars-progress.svg')"
              contain
            />
          </div>
        </div>
        <div class="card--price">
          <p>$125<span>/mo</span></p>
          <span class="per-year">$1500 per year</span>
        </div>
        <div class="card--actions px-6">
          <v-btn
            color="success"
            x-large
            block
            dark
            class="uh-btn"
            @click="goToPage"
          >
            BUY NOW
          </v-btn>
        </div>
      </v-card>

      <v-card
        class="my-8 mx-auto card d-flex align-center justify-space-between flex-grow-1 flex-column py-9"
        max-width="344"
        outlined
      >
        <div class="card--header px-9">
          <div>
          <v-img
            :src="require('../../assets/geico-logo.svg')"
            contain
          />
          </div>
          <div class="mt-4 card--stars">
            <v-img
              :src="require('../../assets/icons/stars-geico.svg')"
              contain
            />
          </div>
        </div>
        <div class="card--price">
          <p>$125<span>/mo</span></p>
          <span class="per-year">$1500 per year</span>
        </div>
        <div class="card--actions px-6">
          <v-btn
            color="success"
            x-large
            block
            dark
            class="uh-btn"
            @click="goToPage"
          >
            BUY NOW
          </v-btn>
        </div>
      </v-card>

      <v-card
        class="my-8 mx-auto card d-flex align-center justify-space-between flex-grow-1 flex-column py-9"
        max-width="344"
        outlined
      >
        <div class="card--header px-9">
          <div>
          <v-img
            :src="require('../../assets/State-Farm.png')"
            contain
            width="290"
          />
          </div>
          <div class="mt-4 card--stars">
            <v-img
              :src="require('../../assets/icons/stars-geico.svg')"
              contain
            />
          </div>
        </div>
        <div class="card--price">
          <p>$125<span>/mo</span></p>
          <span class="per-year">$1500 per year</span>
        </div>
        <div class="card--actions px-6">
          <v-btn
            color="success"
            x-large
            block
            dark
            class="uh-btn"
            @click="goToPage"
          >
            BUY NOW
          </v-btn>
        </div>
      </v-card>

    </v-col>

    <v-col class=" text-left px-0 py-0" cols="10">
      <h2 class="mb-6 font-weight-bold typeface--text">Your Summary:</h2>
      <p class="typeface--text"><a href="#" class="font-weight-medium">Hoop Heaven</a>, established on <a href="#" class="font-weight-medium">Dec 12 2012</a>, and operating out of <a href="#" class="font-weight-medium">Texas</a>, is interested in purchasing <a href="#" class="font-weight-medium">cyber insurance</a>.</p>
      <p class="typeface--text">Hoop Heaven would also like <a href="#" class="font-weight-medium">building coverage included</a> in their policy. </p>
      <p class="typeface--text">Hoop Heaven does their own <a href="#" class="font-weight-medium">designs in-house</a>.</p>
      <p class="typeface--text">Hoop Heaven can be reached at <a href="#" class="font-weight-medium">231-676-4324</a>.</p>
    </v-col>
  </div>
</template>

<script>
  import Header from './Header';

  export default {
    name: 'Quotes',

    components: {
      Header
    },

     methods: {
      goToPage() {
        this.$emit('btn-click', 3)
      }
    }

  }
</script>

<style lang="scss" scoped>
  .card {
    width: 100%;
    min-height: 383px;
    max-height: 383px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

    &--stars {
      width: 110px;
      height: 22px;
      margin: 0 auto;
    }

    &--actions {
      width: 100%;
    }

    &--price {
      p {
        font-size: 38.5px;
        line-height: 45.12px;
        color: #333333;
        font-weight: 700;
        margin-bottom: 0 !important;

        span {
          font-size: 20px;
          line-height: 23.44px;
          font-weight: 400;
        }
      }

      .per-year {
        color: #828282;
        font-weight: 500;
        font-size: 16.26px;
        line-height: 19.05px;
      }
    }
  }
</style>