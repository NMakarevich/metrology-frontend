import { routes } from '@app/routes';
import { NotFound } from '@pages/NotFound/NotFound.tsx';
import { Layout } from '@shared/ui/Layout';
import { createBrowserRouter, Navigate } from 'react-router';

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [{ index: true }],
  },
  {
    path: routes['notFound'].path,
    Component: NotFound,
  },
  {
    path: '*',
    element: <Navigate to={routes['notFound'].path} />,
  },
]);
