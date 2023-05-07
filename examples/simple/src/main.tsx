import { addMiddlewares } from 'jsx-middlewares/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

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
  function tooltipMiddleware(next, _ctx, type, props, key) {
    if ('$tooltip' in props) {
      let $tooltip;
      ({ $tooltip, ...props } = props);

      props = {
        ...props,
        children: [$tooltip, React.Children.toArray(props.children)],
      };
    }

    return next(type, props, key);
  },
);

const app = <App />;
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(app);
