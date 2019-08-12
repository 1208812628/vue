import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login'
import home from '../views/home'

Vue.use(Router)

export const RouterMap = [
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {}
    },
    {
        path: '/home',
        name: 'home',
        component: home,
        meta:{}
    }
];

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: RouterMap
})


