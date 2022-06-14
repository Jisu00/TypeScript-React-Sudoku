import { ReactNode } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { BsFillEraserFill } from 'react-icons/bs';

const Keypad = () => {
  const buttonContainer = (): ReactNode[] => {
    let arr = [];

    for (let i=1; i<10; i++) {
      arr.push( <Button key={i} value={i}>{i}</Button> )
    }

    arr.push( <Button key={0} value={0}><EraserIcon /></Button> )

    return arr;
  }

  return (
    <StyledKeypad>
      {buttonContainer()}
    </StyledKeypad>
  )
};

const StyledKeypad = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  width: 23rem;
  border-radius: 1rem;
  padding: 1rem;
  background: white;
  box-shadow: 0px 0px 5px lightgray;
`;

const EraserIcon = styled(BsFillEraserFill)`
  width: 1.6rem;
  margin-bottom: -0.2rem;
`;


export default Keypad;