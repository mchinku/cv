
export const portfolioRoutes = [
    {
        path: "",
        name: "portfolio",
        component: () => import("@/modules/Portfolio/views/Portfolio.vue")
    },    {
        path: "/resume",
        name: "resume",
        component: () => import("@/modules/Portfolio/views/Resume.vue")
    },
]