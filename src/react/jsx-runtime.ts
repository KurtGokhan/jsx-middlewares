import * as ReactJSXRuntime from 'react/jsx-runtime';
import { defaultMiddlewareContext } from './base';

export const Fragment = ReactJSXRuntime.Fragment;

const originalJsx = defaultMiddlewareContext.defaultJsx || ReactJSXRuntime.jsx;
const originalJsxs = defaultMiddlewareContext.defaultJsxs || ReactJSXRuntime.jsxs;

const ctx = defaultMiddlewareContext.clone().setDefaultJsx(originalJsx, originalJsxs);

export const jsx = ctx.jsx;
export const jsxs = ctx.jsxs;
