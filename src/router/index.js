import Vue from 'vue';
import VueRouter from 'vue-router';

import newsView from '../views/news.vue';
import askView from '../views/ask.vue';
import jobView from '../views/job.vue';

Vue.use(VueRouter);

const routes = [
    {
        path : '/',
        component : newsView
    }, 
    {
        path : '/ask',
        component : askView
    },
    {
        path : '/job',
        component : jobView
    }
];

export const router = new VueRouter({
    // mode : 'history',
    routes
})