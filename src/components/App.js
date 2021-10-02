import React from 'react';
import ButtonPanel from './buttonPanel';
import Display from './display';
import calculate from '../logic/calculate';

function App() {
  return (
    <>
      <h1 className="title">Project Calculator</h1>
      <div className="calculator">
        <Display result={calculate} />
        <ButtonPanel />
      </div>
    </>
  );
}
export default App;
