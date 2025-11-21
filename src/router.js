import { createWebHashHistory, createRouter } from 'vue-router';
import Home from './views/Home-item.vue';
import History from './views/About-item.vue';
import Geography from './views/Function-item.vue';
import Author from './views/Benefits-item.vue';
import Sale from './views/DASS21-item.vue';
import Delete from './views/Delete-account.vue';
import Privacy from './views/Privacy-Policy.vue';

const routes = [
  { path: '/', name: 'Home-item', component: Home },
  { path: '/About-item', name: 'About-item', component: History },
  { path: '/Function-item', name: 'Function-item', component: Geography },
  { path: '/Benefits-item', name: 'Benefits-item', component: Author },
  { path: '/DASS21-item', name: 'DASS21-item', component: Sale },
  { path: '/Delete-account', name: 'Delete-account', component: Delete },
  { path: '/Privacy-Policy', name: 'Privacy-Policy', component: Privacy },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
