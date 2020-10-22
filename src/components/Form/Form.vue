<template>
  <div class="px-7 step-main d-flex flex-column align-self-start overflow-hidden">
    <v-col class="text-left px-0 py-0" cols="12">
      <v-carousel height="80vh" v-model="item" vertical touchless hide-delimiters :continuous="false" :show-arrows="false">
        <v-carousel-item>
          <Question number="1" title="What type of insurance are you looking for?">
            <Chips icon="briefcase" title="Professional Liability" subtitle="Erros & Omissions (E&O insurance)" :onClick="nextItem" />
            <Chips icon="cloud-rain" title="General Liability" subtitle="Help mitigate against loss (CGL insurance)" :onClick="nextItem" />
            <Chips icon="package" title="Business Owner’s Policy" subtitle="The complete package (BOP)" :onClick="nextItem" />
            <Chips icon="wifi" title="Cyber" subtitle="Internet-bsed risks (CLIC)" :onClick="nextItem" />
          </Question>
        </v-carousel-item>
        <v-carousel-item>
          <Question number="2" title="What’s the name of your business?">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                label="Solo"
                v-model="name"
                :rules="nameRules"
                placeholder="Business Name"
                light
                single-line
              ></v-text-field>
              <v-btn
                color="secondary"
                class="mt-3 primary--text"
                large
                @click="nextItem"
              >
                Ok
                <v-icon
                  right
                  dark
                >
                  mdi-check
                </v-icon>
              </v-btn>
            </v-form>
          </Question>
        </v-carousel-item>
        <v-carousel-item>
          <Question number="3" title="What’s the phone number?">
            <v-form>
              <v-text-field
                label="Solo"
                placeholder="111-111-111"
                light
                single-line
              ></v-text-field>
              <v-btn
                color="secondary"
                class="primary--text"
                large
                @click="nextItem"
              >
                Ok
                <v-icon
                  right
                  dark
                >
                  mdi-check
                </v-icon>
              </v-btn>
            </v-form>
          </Question>
        </v-carousel-item>
        <v-carousel-item>
          <Question number="4" title="What state do you operate from?">
            <v-form lazy-validation>
              <v-select
                 light
                single-line
                :items="states"
                label="Select State"
              ></v-select>
              <v-btn
                color="secondary"
                class="primary--text"
                large
                @click="nextItem"
              >
                Ok
                <v-icon
                  right
                  dark
                >
                  mdi-check
                </v-icon>
              </v-btn>
            </v-form>
          </Question>
        </v-carousel-item>
        <v-carousel-item>
        <Question number="5" title="Do you do your own design?">
          <Chips icon="droplet" title="Yes" subtitle="We do designs in-house" :onClick="nextItem" />
          <Chips icon="airplay" title="No" subtitle="We’re gonna need some assistance" :onClick="nextItem" />
        </Question>
        </v-carousel-item>
        <v-carousel-item>
          <Question number="6" title="Include building coverage?">
            <Chips icon="thumbs-up" title="Yes" :onClick="nextItem" />
            <Chips icon="thumbs-down" title="No" :onClick="nextItem" />
          </Question>
        </v-carousel-item>
        <v-carousel-item>
          <Question number="7" title="When did your business begin?">
            <v-form>
              <v-text-field
                label="Solo"
                placeholder="dd/mm/yyyy"
                light
                single-line
                append-outer-icon="mdi-calendar-blank-outline"
              ></v-text-field>
              <v-btn
                color="secondary"
                class="primary--text"
                large
                @click="nextItem"
              >
                Ok
                <v-icon
                  right
                  dark
                >
                  mdi-check
                </v-icon>
              </v-btn>
            </v-form>
          </Question>
          <v-col class="mb-4 mt-16 text-center px-0 py-0" cols="12">
          <uh-btn
            text="get quotes"
            :onClick="goToPage"
          />
        </v-col>
        </v-carousel-item>
      </v-carousel>
    </v-col>
      <v-bottom-navigation
      absolute
      background-color="primary"
      class="px-7 bottom-navigation d-flex justify-space-between align-center"
    >
    <div>
      <span class="questions-count font-weight-bold">{{item + 1}}/7</span>
    </div>
    <div>
      <v-btn @click="prevItem"  class=" mr-3 navigation-btn" :disabled="item === 0">

        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>

      <v-btn  @click="nextItem" class="navigation-btn" :disabled="item === 6">

        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </div>
      
    </v-bottom-navigation>
    
  </div>
</template>

<script>
  import Button from '../Button';
  import Question from './Question';
  import Chips from './Chips';

  export default {
    name: 'Form',

    data: () => ({
      item: 0,
      states: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
      ],
    }),

    components: {
      'uh-btn': Button,
      Question,
      Chips,
    },

    methods: {
      goToPage() {
        this.$emit('btn-click', 2)
      },
      nextItem() {
        if(this.item === 1 && !this.name) {
          return 
        }
        this.item += 1;
      },
      prevItem() {
        this.item -= 1;
      },
      validate() {
        this.$refs.form.validate()
      },
    }

  }
</script>

<style lang="scss" scoped>
  .bottom-navigation {
    overflow: hidden;
    box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
  }
  .questions-count {
    font-size: 1.125rem;
    line-height: 1.318125rem;
    color: #ffffff;
  }

  .navigation-btn {
    background-color: #FFFFFF !important;
    height: 36px !important;
    width: 36px !important;
    padding: 0 !important;
    max-width: 36px !important;
    min-width: 36px !important;
    border-radius: 2px !important;
    color: #333333;

    &.v-btn--disabled {
      background-color: rgba(255, 255, 255, 0.8) !important;
    }
  }
</style>