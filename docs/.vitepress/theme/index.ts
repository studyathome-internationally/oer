// import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import "./styles/index.styl";

import Resources from "./components/Resources.vue";
import Resource from "./components/Resource.vue";
// import ReloadPrompt from "./components/ReloadPrompt.vue";

export default {
  ...DefaultTheme,
  // Layout() {
  //   return h(DefaultTheme.Layout, null, {
  //     "layout-bottom": () => h(ReloadPrompt),
  //   });
  // },
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx);

    // register your custom global components
    ctx.app.component("Resources", Resources);
    ctx.app.component("Resource", Resource);
  },
};
