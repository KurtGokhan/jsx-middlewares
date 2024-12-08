import type { JSX } from 'react';
import type * as Base from '../types.js';

export type Middleware = Base.Middleware<JSX.Element>;
export type MiddlewareContext = Base.MiddlewareContext<JSX.Element>;
export type MiddlewareNextFn = Base.MiddlewareNextFn<JSX.Element>;
export type jsxFn = Base.jsxFn<JSX.Element>;
export type jsxDEVFn = Base.jsxDEVFn<JSX.Element>;
export type jsxClassicFn = Base.jsxClassicFn<JSX.Element>;
