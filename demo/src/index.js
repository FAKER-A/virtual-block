// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./index.vue"
import VirtualList from "../../src/index.js"

Vue.config.productionTip = false

Vue.use(VirtualList)
/* eslint-disable no-new */
new Vue({
    el: "#app",
    render: h => h(App)
})