import { createApp } from "vue";
import App from "./App.vue";

import router from "@/router";

// bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

// icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./assets/icons";

const app = createApp(App);
app.use(router).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
