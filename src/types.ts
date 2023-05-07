export type jsxFn = (type: any, props: any, key: any) => JSX.Element;
export type jsxDEVFn = (type: any, props: any, key: any, isStatic: boolean, source: any, self: any) => JSX.Element;

export type Middleware = (next: jsxFn, type: any, props: any, key: any) => JSX.Element;

export interface MiddlewareContext {
  middlewares: Middleware[];
  defaultJsx: jsxFn | undefined;
  defaultJsxs: jsxFn | undefined;
  defaultJsxDEV: jsxDEVFn | undefined;
  setDefaultJsx(jsx?: jsxFn, jsxs?: jsxFn, jsxDEV?: jsxDEVFn): MiddlewareContext;
  addMiddleware(middleware: Middleware): MiddlewareContext;
  removeMiddleware(middleware: Middleware): MiddlewareContext;
  clearMiddlewares(): MiddlewareContext;
  applyMiddlewares(type: any, props: any, key: any, jsx: jsxFn): JSX.Element;
  jsx: jsxFn;
  jsxs: jsxFn;
  jsxDEV: jsxDEVFn;
  clone(): MiddlewareContext;
}
