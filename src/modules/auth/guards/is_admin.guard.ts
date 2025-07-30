import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useAuthStores } from '../stores/authStores';
//import { AuthStatus } from '../interfaces';

const isAdminGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const authStore = useAuthStores();
  await authStore.checkAuthStatus();

  authStore.isAdmin ? next() : next({ name: 'home' });
};

export default isAdminGuard;
