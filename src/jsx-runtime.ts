import * as ReactJSXRuntime from 'react/jsx-runtime';
import { applyOverhauls } from './logic';
import { defaultFragment, defaultJsx, defaultJsxs } from './manager';

export const Fragment = defaultFragment || ReactJSXRuntime.Fragment;

const originalJsx = defaultJsx || ReactJSXRuntime.jsx;
const originalJsxs = defaultJsxs || ReactJSXRuntime.jsxs;

export function jsx(type: any, props: any, key: any) {
  [type, props, key] = applyOverhauls(type, props, key, originalJsx);
  return originalJsx(type, props, key);
}

export function jsxs(type: any, props: any, key: any) {
  [type, props, key] = applyOverhauls(type, props, key, originalJsxs);
  return originalJsxs(type, props, key);
}
