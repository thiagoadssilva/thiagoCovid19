import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: #CCCCCC;

  @media (max-width: 1100px){
    display: flex;
    justify-content: center;
  }

  @media (max-width: 809px){
    height: 80px;
  }

`;

export const ContainerMenuPizza = styled.div`
  padding: 15px;
  font-size: 30px;
  flex: 1;

  .openMenu{
    cursor: pointer;
  }
  

  @media (max-width: 809px){
    display: block;
  }
  @media (min-width: 810px){
    display: none;
  }
`;

export const ContainerImage = styled.img`
  margin-left: 15px;
  padding: 5px;
  height: 80px;
  width: 80px;

  @media (max-width: 1100px){
    width: 40px;
    height: 40px;
  }  

  @media (max-width: 810px){
    display: none;
  }
`;

export const ContainerImage2= styled.img`
  margin-left: 15px;
  padding: 5px;
  height: 80px;
  width: 80px;
`;

export const ContainerImageLogou = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;

  @media (max-width: 1100px){
    width: 10px;
    height: 10px;
  }  
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

    @media (max-width: 1100px){
      font-size: 15px;
    }  

    @media (max-width: 810px){
      display: none;
    }
  }

  
`;





  