import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  
  a{
    text-decoration: none;
    color: #000000;
  }

`;

export const ContainerItemHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #FFF;
  height: auto;

  @media (max-width: 1010px){
    padding-bottom: 70px;
  }
  

`;


  