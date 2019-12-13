import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 2px;
  grid-template-columns: ${({ numColumns }) => (`repeat(${numColumns}, minmax(auto, 20px))`)};
  grid-template-rows: ${({ numRows }) => (`repeat(${numRows}, minmax(auto, 20px))`)};
  justify-content: center;
  align-content: center;
  justify-items: stretch;
`;

export const GridCell = styled.div`
  grid-column-start: auto;
  grid-row-start: auto;
  border: 1px solid black;
  background-color: ${({ isAlive }) => (isAlive ? 'salmon' : 'transparent')};
  cursor: pointer;
`;