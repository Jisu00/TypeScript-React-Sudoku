import { useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { IIndex } from './Board';


type CellProps = {
  idx: IIndex,
  children: ReactNode | null;
  selectedCellIdx: IIndex;
  setSelectedCellIdx: Dispatch<SetStateAction<IIndex>>;
}

interface IStyledCell {
  value: ReactNode;
  isSelected: boolean;
  isSameLine: boolean;
}


const Cell = ({
  idx,
  children,
  selectedCellIdx,
  setSelectedCellIdx
}: CellProps) => {
  const [num, setNum] = useState<ReactNode>(null);
  const [isSelected, setIsSelected] = useState(false);
  const { selectedButton, isClicked } = useSelector((state: RootState) => state.buttonReducer);

  useEffect(() => {
    if (selectedCellIdx.row === idx.row && selectedCellIdx.column === idx.column) 
      setIsSelected(true);
    else setIsSelected(false);
  }, [selectedCellIdx]);

  useEffect(() => {
    if (isSelected) {
      selectedButton === 0 ? setNum(null) : setNum(selectedButton);
    }
  }, [isClicked]);
  
  return (
    <StyledCell
      value={num}
      isSelected={isSelected}
      isSameLine={
        (selectedCellIdx.row !== idx.row && 
         selectedCellIdx.column === idx.column) ||
        (selectedCellIdx.row === idx.row && 
         selectedCellIdx.column !== idx.column) ?
         true: false }
      onClick={() => {
        if (!children)
          setSelectedCellIdx({ 
            ...selectedCellIdx, 
            row: idx.row, 
            column: idx.column })
      }}
    >{children ? children : num}</StyledCell>
  )
};

const StyledCell = styled.div<IStyledCell>`
  border: 0.5px solid #d6dde4;
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  font-size: 1.4rem;

  ${props => {
    if (!props.children)
      return css`
        cursor: pointer;
      `
  }}

  ${props => {
    if (props.isSameLine)
      return css`
        background: ${props.theme.palette.gray};
      `
  }}
  
  ${props => {
    if (props.isSelected) {
      return css`
        background: ${ props => props.theme.palette.blue };
      `
    }
    if (props.value !== null) 
      return css`
        background: ${ props => props.theme.palette.dark_gray };
        cursor: pointer;
      `
  }};
`;

export default Cell;