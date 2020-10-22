<template>
  <v-btn
    color="success"
    x-large
    block
    dark
    class="uh-btn"
    @click="onClick"
  >
    {{text}}
  </v-btn>
</template>

<script>

  export default {
    name: 'uh-btn',

    props: ['text', 'onClick']
  }
</script>

<style lang="scss">
  .uh-btn {
    border-radius: 8px !important;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1) !important;

    .v-btn__content {
      color: #333333;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.318125rem;
    }
  }
</style>