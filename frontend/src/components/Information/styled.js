import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFFFFF;  
    
`;

export const ContainerBlue = styled.div`
    background-color: #FFFFFF;
    margin: 15px;
    border-radius: 10px;
    margin-bottom: 70px;

    @media (max-width: 1010px){
        font-size: 16px;
        margin-bottom: 70px;
        
    }
`;

export const ContainerTitle = styled.h1`
    margin: 15px;
    color: #000000;

    @media (max-width: 1010px){
        font-size: 25px;
    }
`;
export const ContainerInformation = styled.p`
    margin: 15px;
    padding: 10px;
    padding-left: 15px;
    font-size: 25px;
    align-items: left;
    color: #000000;

    @media (max-width: 1010px){
        font-size: 16px;
    }

`;

export const ContainerHr = styled.hr`
    border-top: 2px solid #000000;
    width: 100%;
    margin-top: 0;
`;
