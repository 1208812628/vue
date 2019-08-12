import router from ".";

// 每次路由跳转时判断
router.beforeEach((to, from, next) => {
    window.console.log('传进来的路径:', from.path, "要跳转的路径:", to.path);
    if (to.path === "/") {
        next('/login');
    }else {
        next();
    }


});
