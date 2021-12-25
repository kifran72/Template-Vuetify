import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: "#3f51b5",
        secondary: "#b0bec5",
        anchor: "#8c9eff",
      },
      dark: {
        primary: "#3f51b5",
        secondary: "#b0bec5",
        anchor: "#8c9eff",
      },
    },
    options: {
      themeCache: {
        get: (key) => localStorage.getItem(key),
        set: (key, value) => localStorage.setItem(key, value),
      },
    },
  },
});
