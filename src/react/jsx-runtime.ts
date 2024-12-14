import { Fragment, JSX, jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { baseMiddlewares } from './base.ts';

export { Fragment, type JSX } from 'react/jsx-runtime';

const ctx = baseMiddlewares.clone<JSX.Element>(_jsx, _jsxs, undefined, Fragment);

export const jsx: typeof _jsx = ctx.jsx;
export const jsxs: typeof _jsxs = ctx.jsxs;
