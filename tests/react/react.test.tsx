/** @jsxImportSource jsx-middlewares/react */

import {
  Middleware,
  addMiddlewares,
  baseMiddlewares,
  clearMiddlewares,
  removeMiddlewares,
} from 'jsx-middlewares/react';
import 'jsx-middlewares/react/jsx-dev-runtime';

vitest.mock('react/jsx-dev-runtime', () => {
  const Fragment = Symbol('React.Fragment test');
  const jsxDEV = (type: any, props: any, key: any) => [type, props, key] as any;
  return { Fragment, jsxDEV };
});

describe('jsx-middlewares/react', () => {
  afterEach(() => {
    clearMiddlewares();
  });

  test('returns the original results without middlewares', () => {
    const result = <div className={'testcn'} key={5} />;
    expect(result).toEqual(['div', { className: 'testcn' }, 5]);
  });

  test('can add and remove middlewares', () => {
    const className1: Middleware = function className1(next, type, props, key) {
      return next(type, { ...props, className: `${props.className} c1` }, key);
    };

    const className2: Middleware = function className2(next, type, props, key) {
      return next(type, { ...props, className: `${props.className} c2` }, key);
    };

    const className3: Middleware = function className2(next, type, props, key) {
      return next(type, { ...props, className: `${props.className} c3` }, key);
    };

    addMiddlewares(className1, className2);

    removeMiddlewares(className2);

    baseMiddlewares.addMiddlewares(className3);

    const result = <div title={'testtitle'} className={'c0'} key={5} />;
    expect(result).toEqual(['div', { title: 'testtitle', className: 'c0 c3 c1' }, 5]);
  });
});
