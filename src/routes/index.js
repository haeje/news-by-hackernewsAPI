import Vue from 'vue';
import VueRouter from 'vue-router';

import newsView from '../views/news.vue';
import askView from '../views/ask.vue';
import jobView from '../views/jobs.vue';
import itemView from '../views/items.vue';
import userView from '../views/user.vue';

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        redirect : '/news'
    },
    {
        path : '/news',
        component : newsView
    }, 
    {
        path : '/ask',
        component : askView
    },
    {
        path : '/jobs',
        component : jobView
    },
    {
        path : '/items',
        component : itemView
    },
    {
        path : '/user',
        component : userView
    }
];

export const router = new VueRouter({
    mode : 'history',
    routes
})