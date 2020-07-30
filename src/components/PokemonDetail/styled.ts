import styled from 'styled-components';

export const PokemontModal = styled.div<any>`
  position: fixed; 
  z-index: 30;
  left: 0;
  top: 0;
  width: 90%;
  height: 90%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  background-color: rgb(0,0,0, 0.8); 
`;

export const List = styled.ul<any>`
  list-style-type: none;
`;

