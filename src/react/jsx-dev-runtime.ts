import * as ReactJSXRuntime from 'react/jsx-dev-runtime';
import { defaultOverhaulContext } from './base';

export const Fragment = ReactJSXRuntime.Fragment;

const originalJsx = defaultOverhaulContext.defaultJsxDEV || ReactJSXRuntime.jsxDEV;
const ctx = defaultOverhaulContext.clone().setDefaultJsx(undefined, undefined, originalJsx);

export const jsxDEV = ctx.jsxDEV;
