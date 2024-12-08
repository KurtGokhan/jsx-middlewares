import { JSX } from 'react';
import { createMiddlewareContext as baseCreateMiddlewareContext } from '../context.ts';

export const createMiddlewareContext = baseCreateMiddlewareContext<JSX.Element>;
export const baseMiddlewares = createMiddlewareContext();

export const addMiddlewares = baseMiddlewares.addMiddlewares;
export const removeMiddlewares = baseMiddlewares.removeMiddlewares;
export const clearMiddlewares = baseMiddlewares.clearMiddlewares;
