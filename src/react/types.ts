import type { JSX } from 'react';
import type * as Base from '../types.js';

export type Middleware = Base.Middleware<JSX.Element>;
export type MiddlewareContext = Base.MiddlewareContext<JSX.Element>;
export type MiddlewareNextFn = Base.MiddlewareNextFn<JSX.Element>;
