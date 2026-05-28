import { routes } from '@app/routes';

export const titleMiddleware = ({ request }: { request: Request }) => {
  const { pathname } = new URL(request.url);
  const fullMatchedRoute = Object.values(routes).find((route) => route.path === pathname);
  const partMatchedRoute = Object.values(routes).find((route) => {
    const routeSegments = route.path.split('/').slice(1);
    const pathnameSegments = pathname.split('/').slice(1);
    return pathnameSegments.some((segment) => routeSegments.includes(segment));
  });

  if (fullMatchedRoute) {
    document.title = fullMatchedRoute.title;
  } else if (partMatchedRoute) {
    document.title = partMatchedRoute.title;
  } else {
    document.title = routes.main.title;
  }
};
