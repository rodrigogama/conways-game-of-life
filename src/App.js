import React from 'react';
import Grid from './components/Grid';
import { NUM_ROWS, NUM_COLUMNS, GRID_OPERATIONS } from './helpers/constants';

const generateEmptyGrid = (numRows, numColumns) => {
  const rows = [];
  for (let i = 0; i < numRows; i += 1) {
    rows.push(Array(numColumns).fill(0));
  }

  return rows;
};

const countCellNeighbors = (grid, i, j) => {
  const numRows = grid.length;
  const numColumns = numRows ? grid[0].length : 0;
  let neighbors = 0;

  GRID_OPERATIONS.forEach(([x, y]) => {
    const rowBoundary = i + x;
    const columnBoundary = j + y;
    if (rowBoundary >= 0 && rowBoundary < numRows && columnBoundary >= 0 && columnBoundary < numColumns) {
      neighbors += grid[rowBoundary][columnBoundary];
    }
  });

  return neighbors;
}

function App() {
  const [grid, setGrid] = React.useState(() => generateEmptyGrid(NUM_ROWS, NUM_COLUMNS));
  const [running, setRunning] = React.useState(false);
  const runningRef = React.useRef(running);
  runningRef.current = running; // updated current value on every render

  const onClickCellHandler = (rowIndex, columnIndex) => {
    setGrid(prevGrid => {
      const newGrid = [...prevGrid];
      newGrid[rowIndex][columnIndex] = prevGrid[rowIndex][columnIndex] ? 0 : 1;
      return newGrid;
    });
  }

  const onStartGameHandler = () => {
    setRunning(!running);

    if (!running) {
      runningRef.current = true;
      runSimulation();
    }
  }

  // create the function just once.
  const runSimulation = React.useCallback(() => {  
    if (!runningRef.current) return;

    setGrid(prevGrid => {
      const newGrid = prevGrid.map(rows => rows.slice(0));
      
      for (let i = 0; i < NUM_ROWS; i += 1) {
        for (let j = 0; j < NUM_COLUMNS; j += 1) {
          const neighbors = countCellNeighbors(prevGrid, i, j);
          
          if (neighbors < 2 || neighbors > 3) { // cell dies
            newGrid[i][j] = 0;
          } else if (newGrid[i][j] === 0 && neighbors === 3) { // cell lives
            newGrid[i][j] = 1;
          }
        }
      }
      
      return newGrid;
    });

    setTimeout(runSimulation, 500);
  }, []);

  return (
    <div className="App">
      <button onClick={onStartGameHandler}>{running ? 'stop' : 'start'}</button>
      <Grid grid={grid} onClick={onClickCellHandler} />
    </div>
  );
}

export default App;
