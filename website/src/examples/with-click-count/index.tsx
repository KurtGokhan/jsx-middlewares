/** @jsxImportSource . */

import BrowserWindow from '../../components/BrowserWindow';

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
