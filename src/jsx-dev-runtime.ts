import * as ReactJSXRuntime from 'react/jsx-dev-runtime';
import { applyDecorators } from './logic';

export const Fragment = ReactJSXRuntime.Fragment;

export function jsx(type: any, props: any, key: any) {
  [type, props, key] = applyDecorators(type, props, key);
  return ReactJSXRuntime.jsx(type, props, key);
}
