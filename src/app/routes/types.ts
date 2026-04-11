export type RouteType = {
  path: string;
  getLink: (...params: string[]) => string;
  title: string;
};

export type QueryType = {
  [name: string]: string;
};

export type RoutesType = {
  [name: string]: RouteType;
};
