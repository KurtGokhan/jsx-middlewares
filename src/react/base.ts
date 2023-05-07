import { createMiddlewareContext } from '../context';

export const defaultMiddlewareContext = createMiddlewareContext();

export const addMiddleware = defaultMiddlewareContext.addMiddleware;
export const removeMiddleware = defaultMiddlewareContext.removeMiddleware;
export const clearMiddlewares = defaultMiddlewareContext.clearMiddlewares;
