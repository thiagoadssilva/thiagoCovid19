import styled from 'styled-components';

export const Container =  styled.div`
`;

export const ContainerItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 100px;
  border-radius: 10px;
  background-color: ${props => props.text ? '#85C3FF' : 'none' } ;
  margin: 10px;
  font-weight: bold;
  font-size: 25px;

`;