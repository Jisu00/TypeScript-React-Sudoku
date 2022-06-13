import { useEffect, useState, SetStateAction, Dispatch } from 'react';
import styled, { css } from 'styled-components';
import { IIndex } from './Board';
import Cell from './Cell';

type CellContainerProps = {
  containerIdx: IIndex;
  selectedCellIdx: IIndex;
  setSelectedCellIdx: Dispatch<SetStateAction<IIndex>>;
}

interface IStyledCellContainer {
  isSelected: boolean;
}

const CellContainer = ({ 
  containerIdx,
  selectedCellIdx,
  setSelectedCellIdx 
}: CellContainerProps) => {
  const [positionArr, setPositionArr] = useState<number[]>([]);
  const [numberArr, setNumberArr] = useState<number[]>([]);
  const [selectedContainerIdx, setSelectedContainerIdx] = useState<IIndex>({
    row: -1,
    column: -1
  });
 
  const randomNum = (min: number, max: number): number => {
    return Math.floor(Math.random()*(max - min + 1)) + min;
  }

  const uniqueNumArray = (): number[] => {
    let arr = [];
    for (let i=0; i<5; i++) {
      let num = randomNum(0, 8);
      if (arr.indexOf(num) === -1) arr.push(num);
      else i--;
    }
    
    return arr;
  }

  useEffect(() => {
    let positionArr = uniqueNumArray();
    let numberArr = uniqueNumArray();

    setPositionArr(positionArr);
    setNumberArr(numberArr);
  }, []);

  useEffect(() => {
    setSelectedContainerIdx({
      row: Math.floor(selectedCellIdx.row/3),
      column: Math.floor(selectedCellIdx.column/3)
    });
    
  }, [selectedCellIdx]);
  
  const cellContainer = () => {
    let arr = [];

    for (let i=0, idx=0, cnt=0; i<3; i++) {
      for (let j=0; j<3; j++, idx++) {
        arr.push(
        <Cell 
          key={idx} 
          idx={{ row: containerIdx.row*3 + i, column: containerIdx.column*3 + j }}
          selectedCellIdx={selectedCellIdx}
          setSelectedCellIdx={setSelectedCellIdx}
        >
          {positionArr.indexOf(idx) >= 0 ?
           numberArr[cnt++] + 1 : null}
        </Cell>)
      }
    }

    return arr;
  }

  return (
    <StyledContainer
      isSelected={
        selectedContainerIdx.row === containerIdx.row && 
        selectedContainerIdx.column === containerIdx.column ? 
        true : false}
    >
      {cellContainer()}
    </StyledContainer>
  )
};

const StyledContainer = styled.div<IStyledCellContainer>`
  width: 7.61rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  border: 1px solid ${({ theme }) => theme.colors.black};

  div:nth-child(3n) { border-right: none; }
  div:nth-child(3n-2) { border-left: none; }
  div:nth-child(-n+3) { border-top: none; }
  div:nth-child(n+7):nth-child(-n+9) { border-bottom: none; }

  ${props => {
    if (props.isSelected)
      return css`
        background: ${props.theme.colors.gray};
      `
  }}
`;

export default CellContainer;