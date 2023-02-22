import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/css/bootstrap.css";

import "bootstrap/dist/js/bootstrap.bundle.js";

import bootstrap from "bootstrap/dist/js/bootstrap.js";

window.bootstrap = bootstrap;

import $ from "jquery";
window.$ = $;

const app = createApp(App);
app.mount("#app");
