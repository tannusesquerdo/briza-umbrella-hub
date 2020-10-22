<template>
  <div class="uh-card mb-5 d-flex align-center" @click="onClick">
    <div class="px-5 py-6 d-flex align-center">
      <div class="uh-card--icon mr-4">
        <v-img
          :src="svg"
          class=""
          contain
        />
      </div>
      <div>
        <h2 class="uh-card--title font-weight-bold typeface--text">{{title}}</h2>
        <p v-if="subtitle" class="uh-card--subtitle typeface--text">{{subtitle}}</p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Chips',

    data: () => ({
      svg: '',
    }),

    props: ['icon', 'title', 'subtitle', 'onClick'],

    created() {
      this.svg = require(`../../assets/icons/${this.icon}.svg`);
    }

  }
</script>

<style lang="scss" scoped>
  .uh-card {
    background: #FFFFFF;
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    &--icon {
      width: 30px;
      height: 30px;
    }

    &--title {
      font-size: 1.064375rem;
      line-height: 1.2475rem;
      margin-bottom: 5px;
    }

    &--subtitle {
      font-size: 0.75rem;
      line-height: 0.87875rem;
      margin-bottom: 0;
    }
  }
</style>