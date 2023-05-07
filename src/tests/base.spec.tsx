/** @jsxImportSource . */

import { mw } from './jsx-runtime';

describe('base', () => {
  afterEach(() => {
    mw.clearMiddlewares();
  });

  test('returns the raw results without middlewares', () => {
    const result = <div className={'testcn'} key={5} />;
    expect(result).toEqual(['div', { className: 'testcn' }, 5]);
  });

  test('returns the intercepted result when middleware intercepts', () => {
    mw.addMiddlewares(function intercept(next, ctx, type, props, key) {
      return [type, { ...props, className: 'intercepted' }, key] as any;
    });

    const result = <div title={'testtitle'} className={'testcn'} key={5} />;
    expect(result).toEqual(['div', { title: 'testtitle', className: 'intercepted' }, 5]);
  });
});
