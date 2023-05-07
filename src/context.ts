import type { Overhaul, OverhaulContext } from './types';

export function createOverhaulContext() {
  const overhauls: Overhaul[] = [];

  let result: OverhaulContext;

  let defaultJsx: jsxFn | undefined;
  let defaultJsxs: jsxFn | undefined;
  let defaultJsxDev: jsxFnDev | undefined;
  let defaultFragment: any;
  let defaultFragmentDev: any;

  function setDefaultJsx(jsx?: jsxFn, jsxs?: jsxFn, jsxDev?: jsxFnDev) {
    defaultJsx = jsx;
    defaultJsxs = jsxs || jsx;
    defaultJsxDev = jsxDev || jsx;
    return result;
  }

  function setDefaultFragment(fragment?: any, devFragment?: any) {
    defaultFragment = fragment;
    defaultFragmentDev = devFragment || fragment;
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

  result = {
    overhauls,
    defaultJsx,
    defaultJsxs,
    defaultJsxDev,
    defaultFragment,
    defaultFragmentDev,
    setDefaultJsx,
    setDefaultFragment,
    addOverhaul,
    removeOverhaul,
    clearOverhauls,
    applyOverhauls,
  };

  return result;
}
