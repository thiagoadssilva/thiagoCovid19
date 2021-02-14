import styled from 'styled-components';

export const Container = styled.div`
    height: ${props => props.control ? '100vh' : ''};
`;

export const Teste = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;

    @media (max-width: 810px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const ContainerTitleInformation = styled.h2`
    margin: 5px;
    font-weight: bold;
`;

export const ContainerInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #CCC;
    margin: 15px;
    height: 180px;  
    border-radius: 15px;

    transition:all 0.3s ease;
    &:hover{
        
    }

    @media (max-width: 810px){
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: auto;
        padding: 15px;
    }
`;

export const ContainerCases = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #02c39a;
    width: 200px;
    height: 100px;
    border-radius: 15px;

    @media (max-width: 810px){
        display: flex;        
    }
`;

export const ContainerSuspects = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #02c39a;
    width: 200px;
    height: 100px;
    border-radius: 15px;

    @media (max-width: 810px){
        margin-top: 15px;       
    }
`;

export const ContainerRecovered = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #02c39a;
    width: 200px;
    height: 100px;
    border-radius: 15px;
    margin-bottom: 0;

    @media (max-width: 810px){
        margin-top: 15px;               
    }
`;

export const ContainerDeaths = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #dc2f02;
    width: 200px;
    height: 100px;
    border-radius: 15px;
    margin-bottom: 0;

    @media (max-width: 810px){
        margin-top: 15px;               
    }
`;



export const CasesDeaths = styled.label`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 0;
`;
export const CasesSuspects = styled.label`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 0;
`;
export const CasesLabel = styled.label`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 0;
`;

export const ContainerHr = styled.hr`
    border-top: 2px solid #000000;
    width: 160px;
    margin-top: 0;
`;