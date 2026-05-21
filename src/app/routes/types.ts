export type RouteType = {
  path: string;
  getLink: (...params: string[]) => string;
  title: string;
};

export type RoutesType = {
  [name in RoutesNames]: RouteType;
};

type RoutesNames =
  | 'main'
  | 'addresses'
  | 'address'
  | 'clinics'
  | 'clinic'
  | 'categories'
  | 'category'
  | 'vendors'
  | 'vendor'
  | 'models'
  | 'model'
  | 'instruments'
  | 'instrument'
  | 'verifications'
  | 'verification'
  | 'plannings'
  | 'planning'
  | 'auth'
  | 'registry'
  | 'login'
  | 'profile'
  | 'notes'
  | 'note'
  | 'notFound';
