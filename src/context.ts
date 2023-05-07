import type { Middleware, OverhaulContext } from './types';

export function createOverhaulContext() {
  return createOverhaulContextWithDefaults();
}

function createOverhaulContextWithDefaults(
  overhauls: Middleware[] = [],
  defaultJsx?: jsxFn | undefined,
  defaultJsxs?: jsxFn | undefined,
  defaultJsxDEV?: jsxDEVFn | undefined,
) {
  let result: OverhaulContext;

  function setDefaultJsx(jsx?: jsxFn, jsxs?: jsxFn, jsxDEV?: jsxDEVFn) {
    defaultJsx = jsx;
    defaultJsxs = jsxs || jsx;
    defaultJsxDEV = jsxDEV || jsx;
    return result;
  }

  function addOverhaul(overhaul: Middleware) {
    overhauls.push(overhaul);

    return result;
  }

  function removeOverhaul(overhaul: Middleware) {
    const index = overhauls.indexOf(overhaul);
    if (index > -1) {
      overhauls.splice(index, 1);
    }

    return result;
  }

  function clearOverhauls() {
    overhauls.length = 0;
    return result;
  }

  function applyOverhauls(type: any, props: any, key: any, jsx: jsxFn) {
    let cb = jsx;

    for (let index = 0; index < overhauls.length; index++) {
      cb = overhauls[index].bind(null, cb);
    }

    return cb(type, props, key);
  }

  function jsx(type: any, props: any, key: any) {
    return applyOverhauls(type, props, key, defaultJsx!);
  }

  function jsxs(type: any, props: any, key: any) {
    return applyOverhauls(type, props, key, defaultJsxs!);
  }

  function jsxDEV(type: any, props: any, key: any, isStaticChildren: boolean, source: any, self: any) {
    const jsxCb: jsxFn = (type, props, key) => defaultJsxDEV!(type, props, key, isStaticChildren, source, self);
    return applyOverhauls(type, props, key, jsxCb);
  }

  function clone() {
    return createOverhaulContextWithDefaults(overhauls, defaultJsx, defaultJsxs, defaultJsxDEV);
  }

  result = {
    overhauls,
    defaultJsx,
    defaultJsxs,
    defaultJsxDEV,
    setDefaultJsx,
    addOverhaul,
    removeOverhaul,
    clearOverhauls,
    applyOverhauls,
    jsx,
    jsxs,
    jsxDEV,
    clone,
  };

  return result;
}
