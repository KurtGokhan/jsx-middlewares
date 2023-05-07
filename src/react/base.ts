import { createMiddlewareContext } from '../context';

export const baseMiddlewares = createMiddlewareContext();

export const addMiddleware = baseMiddlewares.addMiddleware;
export const removeMiddleware = baseMiddlewares.removeMiddleware;
export const clearMiddlewares = baseMiddlewares.clearMiddlewares;
