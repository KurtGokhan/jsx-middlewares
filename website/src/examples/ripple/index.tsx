/** @jsxImportSource . */

import BrowserWindow from '../../components/BrowserWindow';

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
