import { decorators } from './manager';

export function applyDecorators(type: any, props: any, key: any) {
  for (let index = 0; index < decorators.length; index++) {
    [type, props, key] = decorators[index](type, props, key);
  }

  return [type, props, key];
}
