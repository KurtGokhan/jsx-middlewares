import React from 'react';
import { createLocalJsxContext } from '../setup';
import styles from './index.module.css';

const ctx = createLocalJsxContext();
export const { jsx, jsxDEV, jsxs } = ctx;

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
