import type { Overhaul } from './types';

export const overhauls: Overhaul[] = [];

export let defaultJsx: jsxFn | undefined;
export let defaultJsxs: jsxFn | undefined;
export let defaultJsxDev: jsxFnDev | undefined;
export let defaultFragment: any;
export let defaultFragmentDev: any;

export function setDefaultJsx(jsx?: jsxFn, jsxs?: jsxFn, jsxDev?: jsxFnDev) {
  defaultJsx = jsx;
  defaultJsxs = jsxs || jsx;
  defaultJsxDev = jsxDev || jsx;
}

export function setDefaultFragment(fragment?: any, devFragment?: any) {
  defaultFragment = fragment;
  defaultFragmentDev = devFragment || fragment;
}

export function addOverhaul(overhaul: Overhaul) {
  overhauls.push(overhaul);

  return function removeOverhaul() {
    const index = overhauls.indexOf(overhaul);
    if (index > -1) {
      overhauls.splice(index, 1);
    }
  };
}

export function removeOverhaul(overhaul: Overhaul) {
  const index = overhauls.indexOf(overhaul);
  if (index > -1) {
    overhauls.splice(index, 1);
  }
}
