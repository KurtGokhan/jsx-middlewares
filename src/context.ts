import type { Middleware, MiddlewareContext, jsxDEVFn, jsxFn } from './types';

export function createMiddlewareContext(
  defaultJsx?: jsxFn | undefined,
  defaultJsxs?: jsxFn | undefined,
  defaultJsxDEV?: jsxDEVFn | undefined,
) {
  return createMiddlewareContextWithDefaults([], defaultJsx, defaultJsxs, defaultJsxDEV);
}

function createMiddlewareContextWithDefaults(
  middlewares: Middleware[] = [],
  defaultJsx?: jsxFn | undefined,
  defaultJsxs?: jsxFn | undefined,
  defaultJsxDEV?: jsxDEVFn | undefined,
) {
  let ctx: MiddlewareContext;

  defaultJsxs ??= defaultJsx;
  defaultJsxDEV ??= defaultJsx;

  let jsxCb: jsxFn;
  let jsxsCb: jsxFn;
  let jsxDEVCb: jsxDEVFn;

  function refreshCallbacks() {
    jsxCb = createCallback(defaultJsx!);
    jsxsCb = createCallback(defaultJsxs!);
    jsxDEVCb = function jsxDEV(type, props, key, isStaticChildren, source, self) {
      return createCallback((type, props, key) => defaultJsxDEV!(type, props, key, isStaticChildren, source, self))(
        type,
        props,
        key,
      );
    };
  }

  function createCallback(jsx: jsxFn) {
    let cb = jsx;

    for (let index = 0; index < middlewares.length; index++) {
      cb = middlewares[index].bind(null, cb, ctx);
    }

    return cb;
  }

  function addMiddlewares(...items: Middleware[]) {
    middlewares.push(...items);
    refreshCallbacks();

    return ctx;
  }

  function removeMiddlewares(...items: Middleware[]) {
    for (const item of items) {
      const index = middlewares.indexOf(item);
      if (index > -1) {
        middlewares.splice(index, 1);
      }
    }

    refreshCallbacks();

    return ctx;
  }

  function clearMiddlewares() {
    middlewares.length = 0;
    refreshCallbacks();
    return ctx;
  }

  function jsxClassic(type: any, props: any, ...children: any[]) {
    if (props == null) props = {};
    if (children != null) props.children = children;

    const key = props.key;
    delete props.key;

    return jsxsCb(type, props, key);
  }

  function jsx(type: any, props: any, key: any) {
    return jsxCb(type, props, key);
  }

  function jsxs(type: any, props: any, key: any) {
    return jsxsCb(type, props, key);
  }

  function jsxDEV(type: any, props: any, key: any, isStaticChildren: boolean, source: any, self: any) {
    return jsxDEVCb(type, props, key, isStaticChildren, source, self);
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
    addMiddlewares,
    removeMiddlewares,
    clearMiddlewares,
    jsxClassic,
    jsx,
    jsxs,
    jsxDEV,
    clone,
  };

  refreshCallbacks();

  return ctx;
}
