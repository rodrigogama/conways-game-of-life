import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 2px;
  grid-template-columns: ${({ numColumns }) => (`repeat(${numColumns}, 20px)`)};
  padding: 0 12px 12px;
`;

export const GridCell = styled.div`
  grid-column-start: auto;
  grid-row-start: auto;
  border: 1px solid black;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-color: ${({ isAlive }) => (isAlive ? 'salmon' : 'transparent')};
`;