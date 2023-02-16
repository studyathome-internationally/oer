// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";

import Resources from "./components/Resources.vue";
import Resource from "./components/Resource.vue";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx);

    // register your custom global components
    ctx.app.component("Resources", Resources);
    ctx.app.component("Resource", Resource);
  },
};
