import * as ReactJSXRuntime from 'react/jsx-runtime';
import { defaultOverhaulContext } from './base';

export const Fragment = ReactJSXRuntime.Fragment;

const originalJsx = defaultOverhaulContext.defaultJsx || ReactJSXRuntime.jsx;
const originalJsxs = defaultOverhaulContext.defaultJsxs || ReactJSXRuntime.jsxs;

const ctx = defaultOverhaulContext.clone().setDefaultJsx(originalJsx, originalJsxs);

export const jsx = ctx.jsx;
export const jsxs = ctx.jsxs;
