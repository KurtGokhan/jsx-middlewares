import * as ReactJsx from 'react/jsx-dev-runtime';
import { baseMiddlewares } from './base';

export const Fragment = ReactJsx.Fragment;

const ctx = baseMiddlewares.clone(undefined, undefined, ReactJsx.jsxDEV);

export const jsxDEV = ctx.jsxDEV;
