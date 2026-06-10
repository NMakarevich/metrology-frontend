import { routes } from '@app/routes';
import {
  AuthLayout,
  HomePage,
  LoginPage,
  ProfilePage,
  RegistryPage,
} from '@app/routes/lazyComponents.ts';
import { NotFound } from '@pages/NotFound/NotFound.tsx';
import { navigationMiddleware, titleMiddleware } from '@shared/services';
import { Layout } from '@shared/ui/Layout';
import { createBrowserRouter, Navigate } from 'react-router';

export const router = createBrowserRouter([
  {
    Component: Layout,
    middleware: [navigationMiddleware, titleMiddleware],
    children: [
      { index: true, Component: HomePage },
      { path: routes.profile.path, Component: ProfilePage },
    ],
  },
  {
    path: routes.auth.path,
    Component: AuthLayout,
    middleware: [navigationMiddleware, titleMiddleware],
    children: [
      {
        children: [
          {
            path: routes.login.path,
            Component: LoginPage,
          },
          {
            path: routes.registry.path,
            Component: RegistryPage,
          },
        ],
      },
    ],
  },
  {
    path: routes.notFound.path,
    Component: NotFound,
  },
  {
    path: '*',
    element: <Navigate to={routes.notFound.path} />,
  },
]);
