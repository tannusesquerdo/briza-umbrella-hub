<template>
  <div class="step-main d-flex flex-column align-center">
    <Header icon="payment" title="Woah, slow down there cowboy!" subtitle="We’re gonna need to see some payment info" />
    
    <v-col cols="10">
      <v-card ref="form" flat>
        <v-card-text class="pa-0">
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!number || 'This field is required']"
            :error-messages="errorMessages"
            label="Credit Card Number"
            placeholder="4514 8273 4256"
            required
          ></v-text-field>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'Umm, yeah. We’re gonna need this']"
            :error-messages="errorMessages"
            label="Cardholder Name"
            placeholder="John Doe"
            required
          ></v-text-field>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="10">
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
          <!-- <div>
            <v-rating
            empty-icon="$mdiStarOutline"
            full-icon="$mdiStar"
            half-icon="$mdiStarHalfFull"
            hover
            length="5"
            size="22"
            value="3"
          ></v-rating>
          </div> -->
        </div>
        <div class="card--price">
          <p>$125<span>/mo</span></p>
          <span class="per-year">$1500 per year</span>
        </div>
      </v-card>
    </v-col>
    <v-col class="mb-6 text-center px-0 py-0" cols="10">
      <uh-btn
        text="COMPLETE PURCHASE"
      />
    </v-col>
  </div>
</template>

<script>
  import Header from './Header';
  import Button from '../Button';

  export default {
    name: 'Payment',

    components: {
      Header,
      'uh-btn': Button,
    },

  }
</script>

<style lang="scss">
  
</style>