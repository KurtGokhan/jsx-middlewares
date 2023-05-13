/** @jsx jsx */

import { useState } from 'react';
import BrowserWindow from '../components/BrowserWindow';
import { createLocalJsxContext } from './setup';

const ctx = createLocalJsxContext();
const jsx = ctx.jsxClassic;

function WithClickCount({ render, props, type }) {
  const [count, setCount] = useState(0);

  props = {
    ...props,
    onClick: () => setCount(count + 1),
    children: [props.children, ` - Clicked ${count} times`],
  };

  return render(type, props);
}

function withClickCountMiddleware(next, type, props, key) {
  if (props.$withClickCount) {
    const { $withClickCount, ...restProps } = props;
    return <WithClickCount render={next} type={type} props={restProps} key={key} />;
  }

  return next(type, props, key);
}

ctx.addMiddlewares(withClickCountMiddleware);

function App() {
  return <button $withClickCount>Click me</button>;
}

export default function WithClickCountExample() {
  return (
    <BrowserWindow>
      <App />
    </BrowserWindow>
  );
}
