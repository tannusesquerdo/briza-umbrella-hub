<template>
  <v-toolbar
    dense
    flat
    class="flex-grow-0"
  >
    <v-toolbar-title>
      <v-img
        :src="require('../../assets/logo-dark.svg')"
        class="my-3"
        contain
      />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        icon
        color="primary"
        @click="$emit('on-close')"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'FormToolbar',
  }
</script>