<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">
      <v-img
        :src="require('../assets/logo.svg')"
        class="my-3"
        contain
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn
      href="https://github.com/tannusesquerdo/briza-umbrella-hub"
      target="_blank"
      text
    >
      <span class="mr-2">GitHub</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>