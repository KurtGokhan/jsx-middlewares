import * as ReactJSXRuntime from 'react/jsx-runtime';
import { applyDecorators } from './logic';
import { defaultFragment, defaultJsx, defaultJsxs } from './manager';

export const Fragment = defaultFragment || ReactJSXRuntime.Fragment;

const originalJsx = defaultJsx || ReactJSXRuntime.jsx;
const originalJsxs = defaultJsxs || ReactJSXRuntime.jsxs;

export function jsx(type: any, props: any, key: any) {
  [type, props, key] = applyDecorators(type, props, key);
  return originalJsx(type, props, key);
}

export function jsxs(type: any, props: any, key: any) {
  [type, props, key] = applyDecorators(type, props, key);
  return originalJsxs(type, props, key);
}
