export const Fragment = Symbol('React.Fragment test');

export const jsxDEV = (type: any, props: any, key: any) => [type, props, key] as any;

jest.mock(
  'react/jsx-dev-runtime',
  () => {
    return { Fragment, jsxDEV };
  },
  { virtual: true },
);
