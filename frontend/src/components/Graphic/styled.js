import styled from 'styled-components';


export const Container = styled.div`
    background-color: #000000;
    margin-bottom: 70px;
`;

export const ContainerGraphic = styled.div`
    display:flex;
    background-color: #FFFFFF;
    //margin: 15px;
    //padding: 15px;

    @media (max-width: 1010px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        padding: 15px;
    }
`;