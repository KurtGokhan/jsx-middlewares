import * as ReactJSXRuntime from 'react/jsx-dev-runtime';
import { defaultMiddlewareContext } from './base';

export const Fragment = ReactJSXRuntime.Fragment;

const originalJsx = defaultMiddlewareContext.defaultJsxDEV || ReactJSXRuntime.jsxDEV;
const ctx = defaultMiddlewareContext.clone().setDefaultJsx(undefined, undefined, originalJsx);

export const jsxDEV = ctx.jsxDEV;
