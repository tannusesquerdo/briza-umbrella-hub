<template>
  <div class="step-main d-flex flex-column align-center">
    <Header icon="success" title="That worked!" subtitle="Your payment was successful, and your policy documents are on their way to their new home - your inbox!" />
    
    <v-col class="mb-4 text-center px-0 py-0" cols="10">
      <v-btn
        color="success"
        x-large
        block
        dark
        class="uh-btn"
      >
        DOWNLOAD POLICY DOCS
      </v-btn>
    </v-col>

    <v-col class=" text-center px-0 py-0" cols="10">
      <div class="my-2">
        <v-btn
          text
          color="primary"
          class="btn-back"
        >
          <v-icon left>
            mdi-arrow-left
          </v-icon>
          <span>Go back to my portal</span>
        </v-btn>
      </div>
    </v-col>
  </div>
</template>

<script>
  import Header from './Header';

  export default {
    name: 'Success',

    components: {
      Header
    },

  }
</script>

<style lang="scss">
  .btn-back {

    .v-btn__content > span {
      text-decoration: underline !important;
      text-transform: none !important;
      font-size: 16px;
      line-height: 18.75px;
    }
  }
</style>