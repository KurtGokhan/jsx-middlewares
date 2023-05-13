export type jsxClassicFn = (type: any, props: any, ...children: any[]) => JSX.Element;
export type jsxFn = (type: any, props: any, key: any) => JSX.Element;
export type jsxDEVFn = (type: any, props: any, key: any, isStatic: boolean, source: any, self: any) => JSX.Element;

export type Middleware = (next: jsxFn, ctx: MiddlewareContext, type: any, props: any, key: any) => JSX.Element;

export interface MiddlewareContext {
  addMiddlewares(...middlewares: Middleware[]): MiddlewareContext;
  removeMiddlewares(...middlewares: Middleware[]): MiddlewareContext;
  clearMiddlewares(): MiddlewareContext;
  jsxClassic: jsxClassicFn;
  jsx: jsxFn;
  jsxs: jsxFn;
  jsxDEV: jsxDEVFn;
  clone(jsx?: jsxFn, jsxs?: jsxFn, jsxDEV?: jsxDEVFn): MiddlewareContext;
}
