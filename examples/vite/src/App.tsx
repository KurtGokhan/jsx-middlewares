import { PropsWithChildren } from 'react';
import './App.css';

function App({ children }: PropsWithChildren) {
  return (
    <>
      <h1>JSX Middlewares with Vite</h1>
      <p className='read-the-docs' $tooltip='Hello there'>
        Hover here to see the tooltip
      </p>
      {children}
    </>
  );
}

export default App;
