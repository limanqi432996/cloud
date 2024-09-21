import { createRouter, createWebHashHistory } from "vue-router";

let router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/home",
        },
        {
            path: "/export",
            component: () => import("./components/export.vue"),
        },
        {
            path: "/home",
            component: () => import("./Home.vue"),
            redirect: "/home/firstpage", // 默认子路由
            children: [
                {
                    path: "firstpage",
                    component: () => import("./components/Firstpage.vue"),
                },
                {
                    path: "design",
                    component: () => import("./components/Design.vue"),
                },
                {
                    path: "service",
                    component: () => import("./components/Service.vue"),
                },
                {
                    path: "firstpage/serviceshow",
                    component: () => import("./components/serviceshow.vue"),
                },
                {
                    path: "knowledge",
                    component: () => import("./components/Knowledge.vue"),
                    // 可以选择取消重定向，或者在具体场景下控制导航
                    redirect: '/home/knowledge/course', // 这部分可以根据具体需求调整
                    children: [
                        {
                            path: "base",
                            component: () => import("./components/Knowledge/base.vue"),
                        },
                        {
                            path: "consult",
                            component: () => import("./components/Knowledge/consult.vue"),
                        },
                        {
                            path: "course",
                            component: () => import("./components/Knowledge/course.vue"),
                        },
                        {
                            path: "forum",
                            component: () => import("./components/Knowledge/forum.vue"),
                        },
                        {
                            path: "communicate",
                            component: () => import("./components/Knowledge/communicate.vue"),
                        },
                    ],
                },
                {
                    path: "experiment",
                    component: () => import("./components/Experiment.vue"),
                },
                {
                    path: "users",
                    component: () => import("./components/Users.vue"),
                },
            ],
        },
    ],

    // 添加scrollBehavior，确保路由切换时页面从头开始展示
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

export default router;
