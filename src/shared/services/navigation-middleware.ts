import { routes } from '@app/routes';
import { TOKEN } from '@shared/constants/localStorageKeys.ts';
import { redirect } from 'react-router';

const loggedOutAllowedRoutes = [
  routes.main.path,
  routes.login.path,
  routes.registry.path,
  routes.auth.path,
];

const loggedInDeniedRoutes = [routes.login.path, routes.registry.path, routes.auth.path];

export async function navigationMiddleware({ request }: { request: Request }) {
  const isAuth = !!localStorage.getItem(TOKEN);
  const requestUrl = request.url.replace('http://localhost:5173', '');

  if (isAuth && loggedInDeniedRoutes.includes(requestUrl)) {
    throw redirect(routes.main.path);
  }

  if (!isAuth && !loggedOutAllowedRoutes.includes(requestUrl)) {
    throw redirect(routes.login.path);
  }
}
