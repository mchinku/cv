import {portfolioRoutes} from "@/modules/Portfolio/routes/portfolioRoutes.js";
import {createRouter, createWebHistory} from "vue-router";


const routes = [...portfolioRoutes]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router