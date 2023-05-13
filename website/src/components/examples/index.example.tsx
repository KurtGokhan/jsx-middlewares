/** @jsx jsx */

import { createLocalJsxContext } from '../setup';

const ctx = createLocalJsxContext();
const jsx = ctx.jsxClassic;

ctx.addMiddlewares(function borderMiddleware(next, ctx, type, props, key) {
  // This will modify the props to add a border and margin to all HTML elements
  if (typeof type === 'string') {
    props = {
      ...props,
      style: {
        ...props.style,
        border: '2px solid crimson',
        margin: '2px',
      },
    };
  }

  // Call the next middleware with the new props
  // If there is no next middleware, it will call the JSX renderer
  return next(type, props, key);
});

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a paragraph</p>
    </div>
  );
}

export default function IndexExample() {
  return <App />;
}