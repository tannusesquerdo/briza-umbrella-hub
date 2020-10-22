<template>
<div>
  <div class="mt-7 mb-10 d-flex align-center">
    <div class="question--number">{{number}}</div>
    <div class="question--title font-weight-bold typeface--text">{{title}}</div>
  </div>
  <slot />
  </div>
</template>


<script>

  export default {
    name: 'Question',

    components: {
    },

    props: ['title', 'number'],

    methods: {
      goToPage() {
        this.$emit('btn-click', 1)
      }
    }

  }
</script>

<style lang="scss" scoped>
  .question {
    &--number {
      width: 36px;
      height: 36px;
      background-color: #A8DAFF;
      border-radius: 50%;
      font-size: 1.125rem;
      line-height: 1.318125rem;
      font-weight: 700;
      color: #0074D9;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 21px;
      flex-shrink: 0;
    }

    &--title {
      font-size: 1.5rem !important;
      line-height: 1.758125rem !important;
    }
  }
  
</style>