/** @jsxImportSource react */

import { addMiddlewares } from 'jsx-middlewares/react';
import { tooltipMiddleware } from './middlewares/tooltip';

export function setupMiddlewares() {
  addMiddlewares(
    function logMiddleware(next, _ctx, type, props, key) {
      console.log('Created: ', type, props, key);

      return next(type, props, key);
    },
    function mouseEnterMiddleware(next, _ctx, type, props, key) {
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
  );
}
