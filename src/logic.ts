import { overhauls } from './manager';
import type { jsxFn } from './types';

export function applyOverhauls(type: any, props: any, key: any, jsx: jsxFn) {
  for (let index = 0; index < overhauls.length; index++) {
    [type, props, key] = overhauls[index](type, props, key, jsx);
  }

  return [type, props, key];
}
