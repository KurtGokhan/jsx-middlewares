type jsxFn = (type: any, props: any, key: any) => JSX.Element;
type jsxDEVFn = (type: any, props: any, key: any, isStaticChildren: boolean, source: any, self: any) => JSX.Element;

declare module 'react/jsx-runtime' {
  export const Fragment: Symbol;
  export const jsx: jsxFn;
  export const jsxs: jsxFn;
}

declare module 'react/jsx-dev-runtime' {
  export const Fragment: Symbol;
  export const jsxDEV: jsxDEVFn;
}
