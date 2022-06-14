import { useState, useEffect, ReactNode } from 'react';
import styled from 'styled-components';
import CellContainer from './CellContainer';

export interface IIndex {
  row: number;
  column: number;
}

const Board = () => {
  const [selectedCellIdx, setSelectedCellIdx] = useState<IIndex>({
    row: -1,
    column: -1
  });

  const boardContainer = (): ReactNode[] => {
    let arr = [];

    for (let i=0, idx=0; i<3; i++) {
      for (let j=0 ;j<3; j++, idx++) {
        arr.push(
        <CellContainer 
          key={idx} 
          containerIdx={{ row: i, column: j }}
          selectedCellIdx={selectedCellIdx}
          setSelectedCellIdx={setSelectedCellIdx}
        />)
      }
    }

    return arr;
  }

  return (
    <StyledBoard>
      {boardContainer()}
    </StyledBoard>
  )
};

const StyledBoard = styled.div`
  display: grid;
  width: 23rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  border: 1px solid ${({ theme }) => theme.palette.black};
  background: white;
`;

export default Board;