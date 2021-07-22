import Home from './components/pages/home/Home.vue'
import SignUp from './components/pages/signUp/SignUp.vue'
import SignIn from './components/pages/signIn/SignIn.vue'

import {createRouter,createWebHistory} from 'vue-router'
const routes = [
    {
        name:'Home',
        path:"/",
        component:Home
    },
    {
        name:'SignUp',
        path:"/SignUp",
        component:SignUp
    },
    {
        name:'SignIn',
        path:"/SignIn",
        component:SignIn
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;
