import { ReactNode } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setSelectedButton, toggleIsClicked } from '../../modules/button';


type ButtonProps = {
  value: number,
  children: ReactNode,
}

const Button = ({ value, children }: ButtonProps) => {
  const dispatch = useDispatch();

  const onChangeButton = () => {
    dispatch(setSelectedButton(value));
    dispatch(toggleIsClicked());
  };

  return (
    <StyledButton
      onClick={onChangeButton}
    >{children}</StyledButton>
  )
};


const StyledButton = styled.button`
  background: none;
  border: none;
  color: ${({theme}) => theme.palette.dark_blue};
  font-size: 1.8rem;
  margin: 0 0.2rem;
  cursor: pointer;
  &:hover { opacity: 0.8 };
  &:active { color: #2a3a5c };
`;

export default Button;