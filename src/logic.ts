import { decorators } from './manager';
import type { jsxFn } from './types';

export function applyDecorators(type: any, props: any, key: any, jsx: jsxFn) {
  for (let index = 0; index < decorators.length; index++) {
    [type, props, key] = decorators[index](type, props, key, jsx);
  }

  return [type, props, key];
}
