import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

// beforeEach: Được gọi trước khi điều hướng
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
