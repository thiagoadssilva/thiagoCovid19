import styled from 'styled-components';


export const Container = styled.div`
    background-color: #000000;
    margin-bottom: 70px;
`;

export const ContainerGraphic = styled.div`
    display:flex;
    align-items: center;
    background-color: #FFFFFF;
    flex-direction: column;
    
    //margin: 15px;
    //padding: 15px;

    @media (max-width: 1010px){
    }
`;

export const ContainerChart = styled.div`
    height: auto;
    width: auto;
    margin: 15px;
    background-color: #CCC;
    width: 100vw;
    
`;

export const ContainerForm = styled.div`
    background-color: #CCC;
    border-radius: 15px;
    padding: 15px;
    margin: 15px;
    @media (min-width: 1010px){
        margin: 5px;
    } 
`;