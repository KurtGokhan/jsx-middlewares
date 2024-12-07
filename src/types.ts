export type jsxClassicFn<JSXEl> = (type: any, props: any, ...children: any[]) => JSXEl;
export type jsxFn<JSXEl> = (type: any, props: any, key: any) => JSXEl;
export type jsxDEVFn<JSXEl> = (type: any, props: any, key: any, isStatic: boolean, source: any, self: any) => JSXEl;

export type MiddlewareNextFn<JSXEl> = {
  (type: any, props: any, key?: any): JSXEl;
  context: MiddlewareContext<JSXEl>;
  original: jsxFn<JSXEl>;
};

type Falsy = false | null | undefined | 0 | '';

export type Middleware<JSXEl> = Falsy | ((next: MiddlewareNextFn<JSXEl>, type: any, props: any, key: any) => JSXEl);

export interface MiddlewareContext<JSXEl> {
  addMiddlewares(...middlewares: Middleware<JSXEl>[]): MiddlewareContext<JSXEl>;
  removeMiddlewares(...middlewares: Middleware<JSXEl>[]): MiddlewareContext<JSXEl>;
  clearMiddlewares(): MiddlewareContext<JSXEl>;
  jsxClassic: jsxClassicFn<JSXEl>;
  jsx: jsxFn<JSXEl>;
  jsxs: jsxFn<JSXEl>;
  jsxDEV: jsxDEVFn<JSXEl>;
  clone<TJSXEl extends JSXEl = JSXEl>(
    jsx?: jsxFn<TJSXEl>,
    jsxs?: jsxFn<TJSXEl>,
    jsxDEV?: jsxDEVFn<TJSXEl>,
  ): MiddlewareContext<TJSXEl>;
}
