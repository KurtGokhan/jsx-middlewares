/** @jsx jsx */

import { cloneElement, forwardRef, useCallback, useRef } from 'react';
import { isElement } from 'react-is';
import BrowserWindow from '../components/BrowserWindow';
import { createLocalJsxContext } from './setup';

const ctx = createLocalJsxContext();
const jsx = ctx.jsxClassic;

export const WithOnWheelActive = forwardRef<HTMLElement, any>(function _WithOnWheelActive({ callback, children }, ref) {
  const cleanup = useRef<() => void>(undefined);

  const mergedRef = useCallback(
    (val) => {
      if (typeof ref === 'function') ref(val);
      else if (ref) ref.current = val;

      cleanup.current?.();
      cleanup.current = undefined;

      if (!callback) return;

      if (val) {
        val.addEventListener('wheel', callback, { passive: false });
        cleanup.current = () => val.removeEventListener('wheel', callback);
      }
    },
    [ref, callback],
  );

  if (!isElement(children)) {
    throw new Error('Children passed to <Ripple> must be an element with ref');
  }

  return cloneElement(children, {
    ...children.props,
    ref: mergedRef,
  });
});

function onWheelActiveDirective(next, type, { $onWheelActive, ...props }, key) {
  if ($onWheelActive) {
    return (
      <WithOnWheelActive callback={$onWheelActive} key={key}>
        {next(type, props)}
      </WithOnWheelActive>
    );
  }

  return next(type, props, key);
}

ctx.addMiddlewares(onWheelActiveDirective);

function App() {
  return (
    <div style={{ height: 100, overflow: 'auto' }}>
      <div style={{ height: 200 }} $onWheelActive={(ev) => ev.preventDefault()}>
        Try to scroll with the mouse wheel. You can't!
      </div>
    </div>
  );
}

export default function OnWheelActiveExample() {
  return (
    <BrowserWindow>
      <App />
    </BrowserWindow>
  );
}
