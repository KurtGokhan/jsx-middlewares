/** @jsxImportSource . */

import { useState } from 'react';
import BrowserWindow from '../../components/BrowserWindow';

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
