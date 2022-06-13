import { useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';
import { IIndex } from './Board';


export type CellProps = {
  idx: IIndex,
  children: ReactNode | null;
  selectedCellIdx: IIndex;
  setSelectedCellIdx: Dispatch<SetStateAction<IIndex>>;
}

interface IStyledCell {
  isSelected: boolean;
  isSameLine: boolean;
}


const Cell = ({
  idx,
  children,
  selectedCellIdx,
  setSelectedCellIdx
}: CellProps) => {

  return (
    <StyledCell
      isSelected={
        (selectedCellIdx.row === idx.row && 
         selectedCellIdx.column === idx.column) ?
         true : false }
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
    >{children}</StyledCell>
  )
};

const StyledCell = styled.div<IStyledCell>`
  border: 0.5px solid #d6dde4;
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.45rem;
  text-align: center;
  font-size: 1.4rem;
  
  ${props => {
    if (!props.children) {
      if (props.isSelected)
        return css`
          background: ${ props => props.theme.colors.blue };
        `
      return css`
        cursor: pointer;
      `
    }
  }};

  ${props => {
    if (props.isSameLine)
      return css`
        background: ${props.theme.colors.gray};
      `
  }}
`;

export default Cell;