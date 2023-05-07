export type jsxFn = (type: any, props: any, key: any) => JSX.Element;
export type jsxDEVFn = (type: any, props: any, key: any, isStatic: boolean, source: any, self: any) => JSX.Element;

export type Middleware = (next: jsxFn, type: any, props: any, key: any) => JSX.Element;

export interface MiddlewareContext {
  addMiddlewares(...middlewares: Middleware[]): MiddlewareContext;
  removeMiddlewares(...middlewares: Middleware[]): MiddlewareContext;
  clearMiddlewares(): MiddlewareContext;
  jsx: jsxFn;
  jsxs: jsxFn;
  jsxDEV: jsxDEVFn;
  clone(jsx?: jsxFn, jsxs?: jsxFn, jsxDEV?: jsxDEVFn): MiddlewareContext;
}
