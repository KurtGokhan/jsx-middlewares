export type jsxFn = (type: any, props: any, key: any) => JSX.Element;
export type jsxDEVFn = (type: any, props: any, key: any, isStatic: boolean, source: any, self: any) => JSX.Element;

export type Middleware = (next: jsxFn, type: any, props: any, key: any) => JSX.Element;

export interface OverhaulContext {
  overhauls: Middleware[];
  defaultJsx: jsxFn | undefined;
  defaultJsxs: jsxFn | undefined;
  defaultJsxDEV: jsxDEVFn | undefined;
  setDefaultJsx(jsx?: jsxFn, jsxs?: jsxFn, jsxDEV?: jsxDEVFn): OverhaulContext;
  addOverhaul(overhaul: Middleware): OverhaulContext;
  removeOverhaul(overhaul: Middleware): OverhaulContext;
  clearOverhauls(): OverhaulContext;
  applyOverhauls(type: any, props: any, key: any, jsx: jsxFn): JSX.Element;
  jsx: jsxFn;
  jsxs: jsxFn;
  jsxDEV: jsxDEVFn;
  clone(): OverhaulContext;
}
