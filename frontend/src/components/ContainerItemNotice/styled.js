import styled from 'styled-components';

export const Container =  styled.div`
  height: auto;
  
`;

export const ContainerItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 100px;
  border-radius: 10px;
  background-color: ${props => props.text ? '#CCC' : 'none' } ;
  margin: 10px;
  font-weight: bold;
  font-size: 25px;
  transition: 0.5s;
  margin: 15px;
  margin-bottom: 15px;
  border: solid 1px #CCC;

  &:hover{
    background-color: ${props => props.text ? '#CCCCCC' : 'none' } ;   
    font-size: 27px; 
  }

  @media (max-width: 1010px){
    width: 350px;
    height: 80px; 
    font-size: 15px;
  }
`;