import { routes } from '@app/routes';
import { NotFound } from '@pages/NotFound/NotFound.tsx';
import { navigationMiddleware } from '@shared/services';
import { Layout } from '@shared/ui/Layout';
import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';

const AuthLayout = lazy(() => import('@shared/ui/AuthLayout/AuthLayout.tsx'));
const RegistryPage = lazy(() => import('@pages/RegistryPage/ui/RegistryPage.tsx'));
const LoginPage = lazy(() => import('@pages/LoginPage/ui/LoginPage.tsx'));
const HomePage = lazy(() => import('@pages/HomePage/HomePage.tsx'));

export const router = createBrowserRouter([
  {
    Component: Layout,
    middleware: [navigationMiddleware],
    children: [{ index: true, Component: HomePage }],
  },
  {
    path: routes.auth.path,
    Component: AuthLayout,
    middleware: [navigationMiddleware],
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
