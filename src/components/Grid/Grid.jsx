import React from 'react';
import { GridContainer, GridCell } from './styles';

const Grid = ({ grid, onClick }) => {
  return (
    <GridContainer numColumns={grid.length}>
      {grid.map((rows, rowIndex) => (
        rows.map((column, columnIndex) => (
          <GridCell
            isAlive={column} // column value: 1 or 0
            key={`${rowIndex}_${columnIndex}`}
            onClick={() => onClick(rowIndex, columnIndex)}
          />
        ))
      ))}
    </GridContainer>
  );
};

export default Grid;
