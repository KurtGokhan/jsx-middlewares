/** @jsx jsx */

import { useState } from 'react';
import BrowserWindow from '../components/BrowserWindow';
import { createLocalJsxContext } from './setup';

const ctx = createLocalJsxContext();
const jsx = ctx.jsxClassic;

function ifDirectiveMiddleware(next, type, props, key) {
  if ('$if' in props) {
    if (!props.$if) return null;
    const { $if, ...rest } = props;
    props = rest;
  }

  return next(type, props, key);
}

ctx.addMiddlewares(ifDirectiveMiddleware);

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>

      <div $if={show}>Show 'em</div>
    </div>
  );
}

export default function IfDirectiveExample() {
  return (
    <BrowserWindow>
      <App />
    </BrowserWindow>
  );
}
