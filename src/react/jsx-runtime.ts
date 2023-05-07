import * as ReactJSXRuntime from 'react/jsx-runtime';
import { baseContext } from './base';

export const Fragment = baseContext.defaultFragment || ReactJSXRuntime.Fragment;

const originalJsx = baseContext.defaultJsx || ReactJSXRuntime.jsx;
const originalJsxs = baseContext.defaultJsxs || ReactJSXRuntime.jsxs;

export function jsx(type: any, props: any, key: any) {
  [type, props, key] = baseContext.applyOverhauls(type, props, key, originalJsx);
  return originalJsx(type, props, key);
}

export function jsxs(type: any, props: any, key: any) {
  [type, props, key] = baseContext.applyOverhauls(type, props, key, originalJsxs);
  return originalJsxs(type, props, key);
}
