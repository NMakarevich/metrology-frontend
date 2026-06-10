import { lazy } from 'react';

export const AuthLayout = lazy(() => import('@shared/ui/AuthLayout/AuthLayout.tsx'));
export const RegistryPage = lazy(() => import('@pages/RegistryPage/ui/RegistryPage.tsx'));
export const LoginPage = lazy(() => import('@pages/LoginPage/ui/LoginPage.tsx'));
export const HomePage = lazy(() => import('@pages/HomePage/HomePage.tsx'));
export const ProfilePage = lazy(() => import('@pages/ProfilePage/ProfilePage.tsx'));
