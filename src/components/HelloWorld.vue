<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="mb-4">
        <h1 class="display-1 font-weight-bold mb-3">
          Briza’s front end coding challenge
        </h1>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <v-row justify="center">
          <FormDialog />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FormDialog from './FormDialog';

  export default {
    name: 'HelloWorld',

    components: {
      FormDialog,
    },

    data: () => ({
      
    }),
  }
</script>
