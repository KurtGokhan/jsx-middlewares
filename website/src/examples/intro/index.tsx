/** @jsxImportSource . */

import BrowserWindow from '../../components/BrowserWindow';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a paragraph</p>
    </div>
  );
}

export default function IndexExample() {
  return (
    <BrowserWindow>
      <App />
    </BrowserWindow>
  );
}
