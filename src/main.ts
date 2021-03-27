import { createApp } from "vue";
import App from "./App.vue";
import { registerGlobComp } from "./components/registerGlobComp";
import { setupI18n } from "./locales/setupI18n";

(async () => {
  const app = createApp(App);

  registerGlobComp(app);

  await setupI18n(app);

  app.mount("#app", true);
})();
