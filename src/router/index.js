import { createRouter, createWebHistory } from 'vue-router';

const importRoute = import.meta.globEager('./modules/*.js');
export const routes =  Object.values(importRoute).map((item) => { return item.default }).flat();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});
export default router;
