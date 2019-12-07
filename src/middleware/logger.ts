import { Middleware } from 'redux';

export const logger: Middleware = (store) => (next) => (action) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(action, typeof action.payload);
  }
  return next(action);
};