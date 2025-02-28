import {createRouter, createWebHistory} from 'vue-router'
import axios from "axios";
import NetWork from "@/views/NetWork.vue";
import Home from "@/views/Home.vue";
import PageTest from "@/views/PageTest.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/net',
            name: 'Net',
            component: NetWork,
        },
        {
            path: '/page',
            name: 'page',
            component: PageTest,
        }
    ],
})
export default router
