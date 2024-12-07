import { jsxDEVFn, jsxFn } from '../types';

declare module 'react/jsx-runtime' {
  export const Fragment: symbol;
  export const jsx: jsxFn;
  export const jsxs: jsxFn;
}

declare module 'react/jsx-dev-runtime' {
  export const Fragment: symbol;
  export const jsxDEV: jsxDEVFn;
}
