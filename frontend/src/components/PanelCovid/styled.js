import styled from 'styled-components';


export const Container = styled.div`
    background-color: #FFF;
    margin-bottom: auto;
`;

export const ContainerFilter = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 810px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const ContainerFilterRadio = styled.div`
    display: flex;
    justify-content: center;
    margin: 15px;
    width: 200px;
    height: 150px;
    border-radius: 15px;
    background-color: #CCC;
    
    @media (max-width: 810px){
        width: 80%;
    }
`;

export const ContainerFilterSearch = styled.div`
    display: ${props => props.displayControlState ? 'none' : 'flex'};
    flex-direction: column;
    justify-content: center;
    margin: 15px;
    width: 300px;
    height: 150px;
    border-radius: 15px;
    background-color: #CCC;
    
    @media (max-width: 810px){
        width: 80%;
    }
`;

export const ContainerSelect = styled.div`
    margin: 15px;
    margin-top: 0;
`;

export const ContainerSelectTitle = styled.label`
    margin: 15px;
    margin-bottom: 0;
    font-weight: bold;
    font-size: 20px;
`;




