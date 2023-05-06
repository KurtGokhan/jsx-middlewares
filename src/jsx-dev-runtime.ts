import * as ReactJSXRuntime from 'react/jsx-dev-runtime';
import { applyDecorators } from './logic';
import { defaultFragmentDev, defaultJsx } from './manager';

export const Fragment = defaultFragmentDev || ReactJSXRuntime.Fragment;

const originalJsx = defaultJsx || ReactJSXRuntime.jsx;

export function jsx(type: any, props: any, key: any) {
  [type, props, key] = applyDecorators(type, props, key);
  return originalJsx(type, props, key);
}
