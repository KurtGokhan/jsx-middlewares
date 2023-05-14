/** @jsx jsx */

import BrowserWindow from '../../components/BrowserWindow';
import { createLocalJsxContext } from '../setup';
import { Ripple } from './ripple';

const ctx = createLocalJsxContext();
const jsx = ctx.jsxClassic;

function rippleMiddleware(next, type, { $ripple, ...props }, key) {
  if ($ripple || (type === 'button' && $ripple !== false)) {
    return <Ripple>{next(type, props, key)}</Ripple>;
  }

  return next(type, props, key);
}

ctx.addMiddlewares(rippleMiddleware);

function App() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <button>Click to see ripple</button>

      <button $ripple={false}>This doesn't have ripple though</button>

      <div $ripple style={{ height: 60, border: '1px solid' }}>
        Custom element with ripple
      </div>
    </div>
  );
}

export default function RippleExample() {
  return (
    <BrowserWindow>
      <App />
    </BrowserWindow>
  );
}
