declare module 'react/jsx-runtime' {
  export const Fragment: Symbol;
  export const jsx: any;
  export const jsxs: any;
}

declare module 'react/jsx-dev-runtime' {
  export const Fragment: Symbol;
  export const jsxDEV: any;
}

import { createMiddlewareContext } from 'jsx-middlewares';
import { jsxDEV as _jsxDEV } from 'react/jsx-dev-runtime';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

export function createLocalJsxContext() {
  return createMiddlewareContext(_jsx, _jsxs, _jsxDEV);
}
