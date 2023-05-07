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
  let result: MiddlewareContext;

  function setDefaultJsx(jsx?: jsxFn, jsxs?: jsxFn, jsxDEV?: jsxDEVFn) {
    defaultJsx = jsx;
    defaultJsxs = jsxs || jsx;
    defaultJsxDEV = jsxDEV || jsx;
    return result;
  }

  function addMiddleware(middleware: Middleware) {
    middlewares.push(middleware);

    return result;
  }

  function removeMiddleware(middleware: Middleware) {
    const index = middlewares.indexOf(middleware);
    if (index > -1) {
      middlewares.splice(index, 1);
    }

    return result;
  }

  function clearMiddlewares() {
    middlewares.length = 0;
    return result;
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

  function clone() {
    return createMiddlewareContextWithDefaults(middlewares, defaultJsx, defaultJsxs, defaultJsxDEV);
  }

  result = {
    middlewares,
    defaultJsx,
    defaultJsxs,
    defaultJsxDEV,
    setDefaultJsx,
    addMiddleware,
    removeMiddleware,
    clearMiddlewares,
    applyMiddlewares,
    jsx,
    jsxs,
    jsxDEV,
    clone,
  };

  return result;
}
