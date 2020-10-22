<template>
  <div class="step-main d-flex flex-column align-center">
    <Header icon="umbrella" title="So what gives?" />

    <v-col class="mb-16 text-left px-0 py-0" cols="10">
      <ul class="start-list">
        <li class="item mb-6 typeface--text">Answer a few simple questions about your business</li>
        <li class="item mb-6 typeface--text">Browse through specially curated quotes</li>
        <li class="item mb-6 typeface--text">Select your quote-of-choice and receive your policy instantly</li>
      </ul>
    </v-col>
    
    <v-col class="mb-4 text-center px-0 py-0" cols="10">
      <uh-btn
        text="Get Started"
        :onClick="goToPage"
      />
    </v-col>

    <v-col class=" text-center px-0 py-0" cols="10">
      <div class="powered my-8">
        <v-img
          :src="require('../../assets/icons/zap.svg')"
          contain
        />
        <span>Powered by Briza</span>
      </div>
    </v-col>
  </div>
</template>

<script>
  import Header from './Header';
  import Button from '../Button';

  export default {
    name: 'GettingStarted',

    components: {
      Header,
      'uh-btn': Button,
    },

    methods: {
      goToPage() {
        this.$emit('btn-click', 1)
      }
    }

  }
</script>

<style lang="scss">
  .step-main {
    width: 100%;
  }

  .start-list {
    list-style: none;
    padding-left: 0 !important;

    .item {
      font-size: 1.125rem;
      line-height: 1.318125rem;
      counter-increment: li;
      position: relative;
      padding-left: 3.5625rem;

      &:before {
        content: counter(li);
        width: 36px;
        height: 36px;
        background-color: #A8DAFF;
        border-radius: 50%;
        font-size: 1.125rem;
        line-height: 1.318125rem;
        font-weight: 700;
        color: #0074D9;
        position: absolute;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .powered {
    font-size: 0.909375rem;
    line-height: 1.065625rem;
    color: #BDBDBD;
    display: flex;
    flex-grow: 0;
    justify-content: center;
    align-items: center;

    > .v-image {
      width: 19.4px;
      height: 19.4px;
      margin: 0 !important;
      flex-grow: 0;
      margin-right: 9px !important;
    }
  }
</style>