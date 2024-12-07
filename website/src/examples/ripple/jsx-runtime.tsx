import React from 'react';
import { createLocalJsxContext } from '../setup';
import { Ripple } from './ripple';

const ctx = createLocalJsxContext();
export const { jsx, jsxDEV, jsxs } = ctx;

function rippleMiddleware(next, type, { $ripple, ...props }, key) {
  if ($ripple || (type === 'button' && $ripple !== false)) {
    return <Ripple>{next(type, props, key)}</Ripple>;
  }

  return next(type, props, key);
}

ctx.addMiddlewares(rippleMiddleware);
