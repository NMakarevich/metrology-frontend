export type RequestOptions = RequestInit & {
  url: string;
};

export type ErrorType = {
  statusCode: number;
  message: string;
};
