import styled from 'styled-components';

export const Container = styled.div`
  background-color: #CCCCCC;
  position: absolute;
  z-index: 9999;
  border-radius: 15px;
`;

export const ContainerImage = styled.img`
  margin-left: 15px;
  padding: 5px;
  height: 80px;
  width: 80px;
`;

export const ContainerImageLogou = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

export const ContainerMenus = styled.div`
  display: flex;
  flex-direction: column;
  
  a{
    font-size: 20px;
    margin: 20px;
    padding-right: 30px;
    text-decoration-line:none;
    color: black;

    transition: 0.3s;

    &:hover{
      font-weight: bold;
    }
  }
`;