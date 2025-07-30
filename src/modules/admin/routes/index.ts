import isAdminGuard from '@/modules/auth/guards/is_admin.guard';
import type { RouteRecordRaw } from 'vue-router';

export const adminRoutes: RouteRecordRaw = {
  path: '/admin',
  name: 'admin',
  beforeEnter: [isAdminGuard],
  redirect: { name: 'admin-dashboard' },
  component: () => import('@/modules/admin/layouts/AdminLayout.vue'),
  children: [
    {
      path: 'dashboard',
      name: 'admin-dashboard',
      component: () => import('./views/DashboardView.vue'),
    },
    {
      path: 'products',
      name: 'admin-products',
      component: () => import('./views/productsView.vue'),
    },
    {
      path: 'products/:productID',
      name: 'admin-product',
      props: true,
      component: () => import('./views/ProductView.vue'),
    },
  ],
};
