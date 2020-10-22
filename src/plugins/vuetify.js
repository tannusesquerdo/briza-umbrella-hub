import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0074D9',
        secondary: '#A8DAFF',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#71F79F',
        warning: '#FFC107',
        gray: '#BDBDBD',
        typeface: '#333333'
      }
    }
  }
})
