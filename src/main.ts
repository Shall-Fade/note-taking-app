import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store";
import BaseTab from "./components/base/BaseTab.vue";
import BaseNoteFile from "./components/base/BaseNoteFile.vue";

const app = createApp(App);

app.component("BaseTab", BaseTab);
app.component("BaseNoteFile", BaseNoteFile);

app.use(store);

app.mount("#app");
