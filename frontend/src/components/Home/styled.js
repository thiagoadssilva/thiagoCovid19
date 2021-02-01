import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: #EEEEEE;
`;
export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerImage = styled.img`
  height: 80px;
  width: 100px;
`;

export const ContainerImageLogou = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

export const ContainerMenus = styled.div`
  display: flex;
  
  a{
    font-size: 25px;
    margin: 20px;
    padding-right: 30px;
    text-decoration-line:none;
    color: black;
  }
`;

export const ContainerItemHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px;
  background-color: #0085FF;
  height: 100vh;
  border-radius: 15px;
`;

export const ContainerFooter = styled.div`
  background-color: #EEEEEE;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  height: 50px;
`;

