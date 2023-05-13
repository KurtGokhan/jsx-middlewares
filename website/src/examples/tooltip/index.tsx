/** @jsx jsx */

import BrowserWindow from '../../components/BrowserWindow';
import { createLocalJsxContext } from '../setup';
import styles from './index.module.css';

const ctx = createLocalJsxContext();
const jsx = ctx.jsxClassic;

function tooltipMiddleware(next, type, { $tooltip, ...props }, key) {
  if ($tooltip) {
    return (
      <div className={styles.tooltipContainer}>
        {<div className={styles.tooltip}>{$tooltip}</div>}
        {next(type, props, key)}
      </div>
    );
  }

  return next(type, props, key);
}

ctx.addMiddlewares(tooltipMiddleware);

function App() {
  return (
    <div>
      <button $tooltip={'Secret tooltip here'}>See tooltip on hover</button>
    </div>
  );
}

export default function TooltipExample() {
  return (
    <BrowserWindow>
      <App />
    </BrowserWindow>
  );
}
