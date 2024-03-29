/** @jsxImportSource . */

import BrowserWindow from '../../components/BrowserWindow';

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
