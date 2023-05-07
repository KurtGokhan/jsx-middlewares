import * as ReactJSXRuntime from 'react/jsx-dev-runtime';
import { baseContext } from './base';
import type { jsxFn } from './types';

export const Fragment = baseContext.defaultFragmentDev || ReactJSXRuntime.Fragment;

const originalJsx = baseContext.defaultJsxDev || ReactJSXRuntime.jsxDEV;

export function jsxDEV(type: any, props: any, key: any, isStaticChildren: boolean, source: any, self: any) {
  const jsxCb: jsxFn = (type, props, key) => originalJsx(type, props, key, isStaticChildren, source, self);
  [type, props, key] = baseContext.applyOverhauls(type, props, key, jsxCb);
  return originalJsx(type, props, key, isStaticChildren, source, self);
}
