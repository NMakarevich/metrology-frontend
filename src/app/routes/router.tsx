import { routes } from '@app/routes/routes.ts';
import { Layout } from '@shared/ui/Layout';
import { createBrowserRouter, Navigate } from 'react-router';

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [{ index: true }],
  },
  {
    path: '*',
    element: <Navigate to={routes['notFound'].path} />,
  },
]);
