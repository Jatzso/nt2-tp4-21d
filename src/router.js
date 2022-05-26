import Vue from 'vue'
import VueRouter from 'vue-router'

import Form from './components/Form'
import HTTPClient from './components/HTTPClient'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/form', component: Form},
        {path: '/httpclient', component: HTTPClient}
    ]
})