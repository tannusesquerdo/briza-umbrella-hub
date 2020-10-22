<template>
  <v-col class="mb-11 text-center px-0 py-0" cols="11">
    <div class="header--icon mx-auto mb-10">
      <v-img
        :src="svg"
        class="my-3"
        contain
      />
    </div>
    <h1 class="header--title mb-4 font-weight-bold typeface--text">
      {{title}}
    </h1>

    <p v-if="subtitle" class="header--subtitle font-weight-regular">{{subtitle}}</p>
  </v-col>
</template>

<script>
  export default {
    name: 'FormHeader',

    props: ['icon', 'title', 'subtitle'],

    data: () => ({
      svg: '',
    }),

    created() {
      this.svg = require(`../../assets/icons/${this.icon}.svg`);
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    &--icon {
      height: 100px;
      width: 100px;
    }

    &--title {
      font-size: 2.5rem;
      line-height: 2.93rem;
    }

    &--subtitle {
      font-size: 1.25rem;
      line-height: 1.465rem;
    }
  }
</style>