import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'user',
        component: () =>import('@/views/Index.vue')
    },
    {
        path: '/create',
        name: 'create',
        component: () =>import('@/views/Create.vue')
    },
    {
        path: '/edit',
        name: 'edit',
        component: () =>import('@/views/Edit.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router