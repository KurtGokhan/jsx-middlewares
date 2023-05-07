import { createMiddlewareContext } from '../context';

export const baseMiddlewares = createMiddlewareContext();

export const addMiddlewares = baseMiddlewares.addMiddlewares;
export const removeMiddlewares = baseMiddlewares.removeMiddlewares;
export const clearMiddlewares = baseMiddlewares.clearMiddlewares;
