import type { Middleware, MiddlewareContext, jsxDEVFn, jsxFn } from './types';

export function createMiddlewareContext() {
  return createMiddlewareContextWithDefaults();
}

function createMiddlewareContextWithDefaults(
  middlewares: Middleware[] = [],
  defaultJsx?: jsxFn | undefined,
  defaultJsxs?: jsxFn | undefined,
  defaultJsxDEV?: jsxDEVFn | undefined,
) {
  let ctx: MiddlewareContext;

  defaultJsx = jsx;
  defaultJsxs = jsxs || jsx;
  defaultJsxDEV = jsxDEV || jsx;

  function addMiddleware(middleware: Middleware) {
    middlewares.push(middleware);

    return ctx;
  }

  function removeMiddleware(middleware: Middleware) {
    const index = middlewares.indexOf(middleware);
    if (index > -1) {
      middlewares.splice(index, 1);
    }

    return ctx;
  }

  function clearMiddlewares() {
    middlewares.length = 0;
    return ctx;
  }

  function applyMiddlewares(type: any, props: any, key: any, jsx: jsxFn) {
    let cb = jsx;

    for (let index = 0; index < middlewares.length; index++) {
      cb = middlewares[index].bind(null, cb);
    }

    return cb(type, props, key);
  }

  function jsx(type: any, props: any, key: any) {
    return applyMiddlewares(type, props, key, defaultJsx!);
  }

  function jsxs(type: any, props: any, key: any) {
    return applyMiddlewares(type, props, key, defaultJsxs!);
  }

  function jsxDEV(type: any, props: any, key: any, isStaticChildren: boolean, source: any, self: any) {
    const jsxCb: jsxFn = (type, props, key) => defaultJsxDEV!(type, props, key, isStaticChildren, source, self);
    return applyMiddlewares(type, props, key, jsxCb);
  }

  function clone(jsx?: jsxFn, jsxs?: jsxFn, jsxDEV?: jsxDEVFn) {
    return createMiddlewareContextWithDefaults(
      middlewares,
      jsx || defaultJsx,
      jsxs || defaultJsxs,
      jsxDEV || defaultJsxDEV,
    );
  }

  ctx = {
    addMiddleware,
    removeMiddleware,
    clearMiddlewares,
    jsx,
    jsxs,
    jsxDEV,
    clone,
  };

  return ctx;
}
