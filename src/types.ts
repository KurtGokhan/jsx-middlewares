export type jsxFn = (type: any, props: any, key: any) => JSX.Element;
export type jsxFnDev = (type: any, props: any, key: any, isStatic: boolean, source: any, self: any) => JSX.Element;

export type Overhaul = (type: any, props: any, key: any, jsx: jsxFn) => [any, any, any];
