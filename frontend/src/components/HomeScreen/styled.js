import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background-color: #000000;
    display: flex;
    justify-content: center; 

    @media (max-width: 810px){
        display: flex;
        flex-direction: column;
    }
`;

export const ContainerImageHomeScreen = styled.img`
    width: auto;
    height: auto;

    @media (max-width: 810px){
        width: auto;
        height: auto;
    }
`;

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;

`;

export const ContainerLabelLogin = styled.text`
    font-weight: 700;
    margin: 15px;
    font-size: 70px;
    text-shadow: 1px 2px;
    color: #FFFFFF;

    @media (max-width: 810px){
        font-size: 50px;
    }
`;

export const ContainerVersao = styled.text`
    color: #CCC;
    font-weight: bold;    
`;