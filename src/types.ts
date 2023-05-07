export type jsxFn = (type: any, props: any, key: any) => JSX.Element;
export type jsxFnDev = (type: any, props: any, key: any, isStatic: boolean, source: any, self: any) => JSX.Element;

export type OverhaulResult = readonly [type: any, props: any, key: any];

export type Overhaul = (type: any, props: any, key: any, jsx: jsxFn) => OverhaulResult;

export interface OverhaulContext {
  overhauls: Overhaul[];
  defaultJsx: jsxFn | undefined;
  defaultJsxs: jsxFn | undefined;
  defaultJsxDev: jsxFnDev | undefined;
  defaultFragment: any;
  defaultFragmentDev: any;
  setDefaultJsx(jsx?: jsxFn, jsxs?: jsxFn, jsxDev?: jsxFnDev): OverhaulContext;
  setDefaultFragment(fragment?: any, devFragment?: any): OverhaulContext;
  addOverhaul(overhaul: Overhaul): OverhaulContext;
  removeOverhaul(overhaul: Overhaul): OverhaulContext;
  clearOverhauls(): OverhaulContext;
  applyOverhauls(type: any, props: any, key: any, jsx: jsxFn): OverhaulResult;
}
