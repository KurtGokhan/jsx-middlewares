/** @jsxImportSource . */

import BrowserWindow from '../../components/BrowserWindow';

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
