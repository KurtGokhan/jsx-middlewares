import { jsxDEVFn, jsxFn } from './common';

declare module 'react/jsx-runtime' {
  export const Fragment: Symbol;
  export const jsx: jsxFn;
  export const jsxs: jsxFn;
}

declare module 'react/jsx-dev-runtime' {
  export const Fragment: Symbol;
  export const jsxDEV: jsxDEVFn;
}
