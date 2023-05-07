import { createMiddlewareContext } from 'src';

export const Fragment = Symbol('React.Fragment test');

const baseJsx = (type: any, props: any, key: any) => [type, props, key] as any;
export const mw = createMiddlewareContext(baseJsx, baseJsx, baseJsx);
export const jsx = mw.jsx;
