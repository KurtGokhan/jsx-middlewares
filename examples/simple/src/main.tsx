import React from 'react';
import { createRoot } from 'react-dom/client';
import { addOverhaul } from 'react-overhaul/react';
import App from './App';
import './index.css';

addOverhaul((type, props, key) => {
  console.log('Created: ', type, props, key);

  return [type, props, key];
});

addOverhaul((type, props, key) => {
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

  return [type, props, key];
});

addOverhaul((type, props, key) => {
  if ('$tooltip' in props) {
    let $tooltip;
    ({ $tooltip, ...props } = props);

    props = {
      ...props,
      children: [$tooltip, React.Children.toArray(props.children)],
    };
  }

  return [type, props, key];
});

const app = <App />;
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(app);
