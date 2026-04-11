import type { RoutesType } from '@app/routes/types.ts';

export const routes: RoutesType = {
  main: {
    path: '/',
    getLink: () => {
      return '/';
    },
    title: 'Метрология',
  },
  addresses: {
    path: '/addresses',
    getLink: () => {
      return '/addresses';
    },
    title: 'Адреса',
  },
  address: {
    path: '/address',
    getLink: (id) => {
      return `/address/${id}`;
    },
    title: 'Адрес',
  },
  clinics: {
    path: '/clinics',
    getLink: () => {
      return '/clinics';
    },
    title: 'Клиники',
  },
  clinic: {
    path: '/clinic/:id',
    getLink: (id) => {
      return `/clinics/${id}`;
    },
    title: 'Клиника',
  },
  categories: {
    path: '/categories',
    getLink: () => {
      return '/categories';
    },
    title: 'Категории',
  },
  category: {
    path: '/category/:id',
    getLink: (id) => {
      return `/category/${id}`;
    },
    title: 'Категория',
  },
  vendors: {
    path: '/category/:categoryId/vendors',
    getLink: (categoryId) => {
      return `/category/${categoryId}/vendors`;
    },
    title: 'Производители',
  },
  vendor: {
    path: '/category/:categoryId/vendor/:id',
    getLink: (categoryId, id) => {
      return `/categories/${categoryId}/vendor/${id}`;
    },
    title: 'Производитель',
  },
  models: {
    path: '/category/:categoryId/vendor/:vendorId/models',
    getLink: (categoryId, vendorId) => {
      return `/category/${categoryId}/vendor/${vendorId}/models`;
    },
    title: 'Модели',
  },
  model: {
    path: '/category/:categoryId/vendor/:vendorId/models/:id',
    getLink: (categoryId, vendorId, id) => {
      return `/category/${categoryId}/vendor/${vendorId}/model/${id}`;
    },
    title: 'Модель',
  },
  instruments: {
    path: '/clinics/:clinicId/categories/:categoryId/instruments',
    getLink: (clinicId, categoryId) => {
      return `/clinics/${clinicId}/categories/${categoryId}/instruments`;
    },
    title: 'Приборы',
  },
  instrument: {
    path: '/clinics/:clinicId/categories/:categoryId/instruments/:id',
    getLink: (clinicId, categoryId, id) => {
      return `clinics/${clinicId}/categories/${categoryId}/instruments/${id}`;
    },
    title: 'Прибор',
  },
  verifications: {
    path: '/verifications',
    getLink: () => {
      return '/verifications';
    },
    title: 'Поверки',
  },
  verification: {
    path: '/verification/:id',
    getLink: (id) => {
      return `/verification/${id}`;
    },
    title: 'Поверка',
  },
  plannings: {
    path: '/plannings',
    getLink: () => {
      return `/plannings`;
    },
    title: 'Планирование',
  },
  planning: {
    path: '/planning/:id',
    getLink: (id) => {
      return `/planning/${id}`;
    },
    title: 'Планирование',
  },
  registry: {
    path: '/auth/registry',
    getLink: () => {
      return '/auth/registry';
    },
    title: 'Регистрация',
  },
  login: {
    path: '/auth/login',
    getLink: () => {
      return '/auth/login';
    },
    title: 'Авторизация',
  },
  notFound: {
    path: '/404',
    getLink: () => {
      return '/404';
    },
    title: 'Страница не найдена',
  },
};
