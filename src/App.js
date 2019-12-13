import React from 'react';
import Grid from './components/Grid';

function App() {

  // const onClickHandler = (rowIndex, columnIndex)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <Grid rows={10} columns={10} onClick={onClickHandler} /> */}
    </div>
  );
}

export default App;
