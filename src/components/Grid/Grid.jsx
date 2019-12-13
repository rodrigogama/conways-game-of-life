import React from 'react';
import { GridContainer, GridCell } from './styles';

const generateGrid = (rows, columns) => {
  const grid = [];
  for (let i = 0; i < rows; i += 1) {
    grid.push(Array(columns).fill(0));
  }
  return grid;
};

const Grid = ({ rows, columns, onClick }) => {
  const grid = generateGrid(rows, columns);

  return (
    <GridContainer numRows={rows} numColumns={columns}>
      {grid.map((rows, rowIndex) => (
        rows.map((column, columnIndex) => (
          <GridCell
            key={`${rowIndex}_${columnIndex}`}
            onClick={() => onClick(rowIndex, columnIndex)}
          />
        ))
      ))}
    </GridContainer>
  );
};

export default Grid;
