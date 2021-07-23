import Home from './components/pages/home/Home.vue'
import SignUp from './components/pages/signUp/SignUp.vue'
import SignIn from './components/pages/signIn/SignIn.vue'
import AddRestaurant from './components/pages/addRestaurant/AddRestaurant.vue'
import UpdateRestaurant from './components/pages/updateRestaurant/UpdateRestaurant.vue'


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
    {
        name:'AddRestaurant',
        path:"/AddRestaurant",
        component:AddRestaurant
    },
    {
        name:'UpdateRestaurant',
        path:"/UpdateRestaurant/:id",
        component:UpdateRestaurant
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;
