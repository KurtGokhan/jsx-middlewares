export type Decorator = (type: any, props: any, key: any) => [any, any, any];

type jsxFn = (type: any, props: any, key: any) => JSX.Element;

export const decorators: Decorator[] = [];

export let defaultJsx: jsxFn | undefined;
export let defaultJsxs: jsxFn | undefined;
export let defaultJsxDev: jsxFn | undefined;
export let defaultFragment: any;
export let defaultFragmentDev: any;

export function setDefaultJsx(jsx?: jsxFn, jsxs?: jsxFn, jsxDev?: jsxFn) {
  defaultJsx = jsx;
  defaultJsxs = jsxs || jsx;
  defaultJsxDev = jsxDev || jsx;
}

export function setDefaultFragment(fragment?: any, devFragment?: any) {
  defaultFragment = fragment;
  defaultFragmentDev = devFragment || fragment;
}

export function addDecorator(decorator: Decorator) {
  decorators.push(decorator);

  return function removeDecorator() {
    const index = decorators.indexOf(decorator);
    if (index > -1) {
      decorators.splice(index, 1);
    }
  };
}

export function removeDecorator(decorator: Decorator) {
  const index = decorators.indexOf(decorator);
  if (index > -1) {
    decorators.splice(index, 1);
  }
}
