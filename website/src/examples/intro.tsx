/** @jsx jsx */

import BrowserWindow from '../components/BrowserWindow';
import { createLocalJsxContext } from './setup';

const ctx = createLocalJsxContext();
const jsx = ctx.jsxClassic;

ctx.addMiddlewares(function emojiMiddleware(next, type, props, key) {
  // Modify the props to add an emoji to the text
  if (typeof type === 'string' && typeof props.children === 'string') {
    props = {
      ...props,
      children: props.children + ' 🎉',
    };
  }

  // Call the next middleware with the new props
  // If there is no next middleware, it will call the original JSX renderer
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
  return (
    <BrowserWindow>
      <App />
    </BrowserWindow>
  );
}
