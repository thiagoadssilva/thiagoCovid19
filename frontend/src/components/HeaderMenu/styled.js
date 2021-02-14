import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: #CCCCCC;
`;

export const ContainerHeader = styled.div`
  
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
  align-items: center;
  justify-content: space-between;
  
  a{
    font-size: 25px;
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



  