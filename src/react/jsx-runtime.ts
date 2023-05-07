import * as ReactJsx from 'react/jsx-runtime';
import { baseMiddlewares } from './base';

export const Fragment = ReactJsx.Fragment;

const ctx = baseMiddlewares.clone().setDefaultJsx(ReactJsx.jsx, ReactJsx.jsxs);

export const jsx = ctx.jsx;
export const jsxs = ctx.jsxs;
