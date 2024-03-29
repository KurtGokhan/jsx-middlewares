/** @jsxImportSource react */

import { addMiddlewares } from 'jsx-middlewares/react';
import { memoMiddleware } from './middlewares/memo';
import { tooltipMiddleware } from './middlewares/tooltip';

export function setupMiddlewares() {
  addMiddlewares(
    function logMiddleware(next, type, props, key) {
      console.log('Created: ', type, props, key);

      return next(type, props, key);
    },
    function mouseEnterMiddleware(next, type, props, key) {
      if (type === 'button') {
        const onMouseEnter = props.onMouseEnter;

        props = {
          ...props,
          onMouseEnter: (...args: any) => {
            console.log('Mouse enter');
            onMouseEnter?.(...args);
          },
        };
      }

      return next(type, props, key);
    },
    tooltipMiddleware,
    memoMiddleware,
  );
}
