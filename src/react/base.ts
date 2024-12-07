import { JSX } from 'react';
import { createMiddlewareContext } from '../context.js';

export const baseMiddlewares = createMiddlewareContext<JSX.Element>();

export const addMiddlewares = baseMiddlewares.addMiddlewares;
export const removeMiddlewares = baseMiddlewares.removeMiddlewares;
export const clearMiddlewares = baseMiddlewares.clearMiddlewares;
