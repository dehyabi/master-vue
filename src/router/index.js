import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/HomeView.vue'
import About from '../components/AboutView.vue'
import User from '../components/UserView.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/user/:name',
        component: User,
        props: true,
        children: [
            {
              path: 'role/:roleId',
              component: User,
              props: true
            },
          ],
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active"
})


export default router