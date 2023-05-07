import type { Overhaul, OverhaulContext } from './types';

export function createOverhaulContext() {
  return createOverhaulContextWithDefaults();
}

function createOverhaulContextWithDefaults(
  overhauls: Overhaul[] = [],
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

  function addOverhaul(overhaul: Overhaul) {
    overhauls.push(overhaul);

    return result;
  }

  function removeOverhaul(overhaul: Overhaul) {
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
    for (let index = 0; index < overhauls.length; index++) {
      [type, props, key] = overhauls[index](type, props, key, jsx);
    }

    return [type, props, key] as const;
  }

  function jsx(type: any, props: any, key: any) {
    [type, props, key] = applyOverhauls(type, props, key, defaultJsx!);
    return defaultJsx!(type, props, key);
  }

  function jsxs(type: any, props: any, key: any) {
    [type, props, key] = applyOverhauls(type, props, key, defaultJsxs!);
    return defaultJsxs!(type, props, key);
  }

  function jsxDEV(type: any, props: any, key: any, isStaticChildren: boolean, source: any, self: any) {
    const jsxCb: jsxFn = (type, props, key) => defaultJsxDEV!(type, props, key, isStaticChildren, source, self);
    [type, props, key] = applyOverhauls(type, props, key, jsxCb);
    return defaultJsxDEV!(type, props, key, isStaticChildren, source, self);
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
