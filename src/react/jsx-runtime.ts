import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { baseMiddlewares } from './base';

export { Fragment } from 'react/jsx-runtime';

const ctx = baseMiddlewares.clone(_jsx, _jsxs);

export const jsx = ctx.jsx;
export const jsxs = ctx.jsxs;
