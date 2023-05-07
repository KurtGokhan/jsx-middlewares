import * as ReactJSXRuntime from 'react/jsx-dev-runtime';
import { applyOverhauls } from './logic';
import { defaultFragmentDev, defaultJsxDev } from './manager';
import type { jsxFn } from './types';

export const Fragment = defaultFragmentDev || ReactJSXRuntime.Fragment;

const originalJsx = defaultJsxDev || ReactJSXRuntime.jsxDEV;

export function jsxDEV(type: any, props: any, key: any, isStaticChildren: boolean, source: any, self: any) {
  const jsxCb: jsxFn = (type, props, key) => originalJsx(type, props, key, isStaticChildren, source, self);
  [type, props, key] = applyOverhauls(type, props, key, jsxCb);
  return originalJsx(type, props, key, isStaticChildren, source, self);
}
