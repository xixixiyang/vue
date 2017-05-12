import $ from "jquery"
window.$= $;
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Vuex from "vuex"
Vue.use(Vuex)
require("./mui/css/mui.css")
window.mui = require("mui")
var index = require("./components/index.vue")
var baidu = require("./components/baiduMap.vue")
var router = new VueRouter({
    routes:[{
        path:'/index',
        component:index
    },{
        path:'/baidu',
        component:baidu
    }]
})
var store = new Vuex.Store({
    state: {
        exchange: "测试"
    },
    mutations: {
        setExchange(state, data) {
            state.exchange = data
        }
    },
    getters: {
        getExchange(state) {
            return state.exchange
        }
    }
});
new Vue({
    el:"#demo",
    template:`
    <router-view></router-view>
    `,
    router,
    store
})