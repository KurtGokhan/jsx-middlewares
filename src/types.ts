export type jsxFn = (type: any, props: any, key: any) => JSX.Element;
export type jsxDEVFn = (type: any, props: any, key: any, isStatic: boolean, source: any, self: any) => JSX.Element;

export type OverhaulResult = readonly [type: any, props: any, key: any];

export type Overhaul = (type: any, props: any, key: any, jsx: jsxFn) => OverhaulResult;

export interface OverhaulContext {
  overhauls: Overhaul[];
  defaultJsx: jsxFn | undefined;
  defaultJsxs: jsxFn | undefined;
  defaultJsxDEV: jsxDEVFn | undefined;
  setDefaultJsx(jsx?: jsxFn, jsxs?: jsxFn, jsxDEV?: jsxDEVFn): OverhaulContext;
  addOverhaul(overhaul: Overhaul): OverhaulContext;
  removeOverhaul(overhaul: Overhaul): OverhaulContext;
  clearOverhauls(): OverhaulContext;
  applyOverhauls(type: any, props: any, key: any, jsx: jsxFn): OverhaulResult;
  jsx: jsxFn;
  jsxs: jsxFn;
  jsxDEV: jsxDEVFn;
  clone(): OverhaulContext;
}
