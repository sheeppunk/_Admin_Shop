import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useAuthStores } from '../stores/authStores';
import { AuthStatus } from '../interfaces';

const isNotAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const authStore=useAuthStores();
  await authStore.checkAuthStatus();

  authStore.authStatus===AuthStatus.Authenticated
  ? next({ name: 'home' })
  : next();
};

export default isNotAuthenticatedGuard;
