import { memo } from 'react';
import { createLocalJsxContext } from '../setup';

const ctx = createLocalJsxContext();
export const { jsx, jsxDEV, jsxs } = ctx;

const memoMap = new Map();

ctx.addMiddlewares(function memoMiddleware(next, type, { $memo, ...props }, key) {
  if ($memo && typeof type === 'function') {
    let memoed = memoMap.get(type);
    if (!memoed) {
      memoed = memo(type);
      memoMap.set(type, memoed);
    }

    return next(memoed, props, key);
  }

  return next(type, props, key);
});
