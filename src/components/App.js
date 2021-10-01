import React from 'react';
import ButtonPanel from './buttonPanel';
import Display from './display';

function App() {
  return (
    <>
      <h1 className="title">Project Calculator</h1>

      <div className="calculator">
        <Display result={0} />
        <ButtonPanel />
      </div>
    </>
  );
}
export default App;
